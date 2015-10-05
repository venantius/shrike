(ns shrike.controller.github.user.repo
  (:refer-clojure :exclude [list])
  (:require [clojure.tools.logging :as log]
            [shrike.model.followed-repo :as followed-repo]
            [shrike.service.github.repo :as repo]))

(defn- flag-followed-repos
  [frids repo]
  (assoc repo :followed?
         (if (frids (:id repo))
           true
           false)))

;; TODO: AUTH
(defn list
  "List the repositories the user has access to on GitHub."
  [{:keys [params user] :as request}]
  (let [followed-repo-ids (into #{}
                                (map :github_repo_id
                                     (followed-repo/fetch-followed-repo
                                      {:user_id (:id user)})))]
    {:status 200
     :body (map
            (partial flag-followed-repos followed-repo-ids)
            (map
             #(assoc % :owner (select-keys (:owner %) [:login :type :id]))
             (map
              #(select-keys % [:id :name :full_name :private :fork :owner])
              (repo/repos user))))}))
