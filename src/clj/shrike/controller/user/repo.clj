(ns shrike.controller.user.repo
  (:refer-clojure :exclude [list])
  (:require [clojure.tools.logging :as log]
            [schema.core :as s]
            [shrike.model.followed-repo :as followed-repo]
            [shrike.model.github.repo :as repo]
            [shrike.model.github.user :as user]
            [shrike.presenter.user.repo :as presenter]
            [titan.controller :refer [defcontroller]]
            [titan.http.response :as resp]))

;; TODO: AUTH
;; TODO: Should mirror create! call
(defcontroller list
  "List the repositories the user is following."
  [{:keys [user]}]
  {:status 200
   :body (presenter/list user)})

(def owner
  {:id s/Int
   :login s/Str
   :type s/Str})

(def repo
  {:id s/Int
   :full_name s/Str
   :name s/Str
   :owner owner
   :private s/Bool
   :fork s/Bool})

(defcontroller create!
  "Follow a new repository."
  {:params repo}
  [{:keys [params user]}]
  (let [{:keys [id full_name name owner private fork]} params]
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

(defcontroller delete!
  "Un-follow this repository."
  {:params {:id s/Int}}
  [{:keys [user params] :as request}]
  (followed-repo/delete-followed-repo!
   {:user_id (:id user)
    :github_repo_id (:id params)})
  (resp/ok "Repo successfully unfollowed"))
