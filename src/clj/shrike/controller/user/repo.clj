(ns shrike.controller.user.repo
  (:refer-clojure :exclude [list])
  (:require [clojure.tools.logging :as log]
            [shrike.model.followed-repo :as followed-repo]
            [shrike.model.github.repo :as repo]
            [shrike.model.github.user :as user]
            [shrike.presenter.user.repo :as presenter]))

;; TODO: AUTH
(defn list
  "List the repositories the user is following."
  [{:keys [params user] :as request}]
  {:status 200
   :body (presenter/list user)})

(defn create!
  [{:keys [body user] :as request}]
  (let [{:keys [id name owner private fork]} body]
    (when-not (user/fetch-one-github-user {:id (:id owner)})
      (user/create-github-user! {:id (:id owner)
                                 :login (:login owner)
                                 :type (:type owner)}))
    (when-not (repo/fetch-one-github-repo {:id id})
      (repo/create-github-repo! {:id id
                                 :owner_id (:id owner)
                                 :name name
                                 :private private
                                 :fork fork}))
    (if-let [fr (followed-repo/fetch-one-followed-repo
                 {:user_id (:id user)
                  :github_repo_id id})]
      {:status 409
       :body "You are already following that repository"}
      {:status 200
       :body (followed-repo/create-followed-repo!
              {:user_id (:id user)
               :github_repo_id id})})))
