(ns shrike.controller.user.repo
  (:refer-clojure :exclude [list])
  (:require [clojure.tools.logging :as log]
            [shrike.model.followed-repo :as followed-repo]
            [shrike.model.github.repo :as repo]
            [shrike.model.github.user :as user]
            [shrike.presenter.user.repo :as presenter]
            [titan.http.response :as resp]))

;; TODO: AUTH
;; TODO: Should mirror create! call
(defn list
  "List the repositories the user is following."
  [{:keys [params user] :as request}]
  {:status 200
   :body (presenter/list user)})

(defn create!
  [{:keys [body user] :as request}]
  (let [{:keys [id full_name name owner private fork]} body]
    (when-not (user/fetch-one-github-user {:id (:id owner)})
      (user/create-github-user! {:id (:id owner)
                                 :login (:login owner)
                                 :type (:type owner)}))
    (when-not (repo/fetch-one-github-repo {:id id})
      (repo/create-github-repo! {:id id
                                 :owner_id (:id owner)
                                 :full_name full_name
                                 :name name
                                 :private private
                                 :fork fork}))
    (if (followed-repo/fetch-one-followed-repo
         {:user_id (:id user)
          :github_repo_id id})
      (resp/conflict "You are already following that repository")
      (let [fr (followed-repo/create-followed-repo!
                {:user_id (:id user)
                 :github_repo_id id})]
        {:status 200
         :body (first (followed-repo/fetch-with-full-repo-info fr))}))))

(defn delete!
  [{:keys [user params] :as request}]
  (followed-repo/delete-followed-repo!
   (followed-repo/map->followed-repo
    {:user_id (:id user)
     :github_repo_id (:id params)}))
  (resp/ok "Repo successfully unfollowed"))
