(ns shrike.controller.user.repo
  (:refer-clojure :exclude [list])
  (:require [shrike.model.followed-repo :as followed-repo]))

(defn repo-presenter
  [user]
  (let [results (followed-repo/fetch-with-full-repo-info {:user_id (:id user)})]
    (reduce (fn [x y] (update-in x [(:login y)] conj y)) {} results)))

;; TODO: AUTH
(defn list
  "List the repositories the user is following."
  [{:keys [params user] :as request}]
  {:status 200
   :body (repo-presenter user)})
