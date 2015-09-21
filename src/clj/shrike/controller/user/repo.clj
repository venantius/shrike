(ns shrike.controller.user.repo
  (:refer-clojure :exclude [list])
  (:require [shrike.model.followed-repo :as followed-repo]))

;; TODO: AUTH
(defn list
  "List the repositories the user is following."
  [{:keys [params user] :as request}]
  {:status 200
   :body (followed-repo/fetch-with-full-repo-info {:user_id (:id user)})})
