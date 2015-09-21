(ns shrike.controller.github.user.repo
  (:refer-clojure :exclude [list])
  (:require [shrike.service.github.repo :as repo]))

;; TODO: Filter out the repositories we're not already following
;; TODO: AUTH
(defn list
  "List the repositories the user has access to on GitHub."
  [{:keys [params user] :as request}]
  {:status 200
   :body (flatten (map :full_name (repo/repos user)))})
