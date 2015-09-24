(ns shrike.api.repo
  (:require [ajax.core :refer [GET]]
            [shrike.state :refer [app-state]]))

(defn get-followed-repos
  []
  (GET "/api/user/repo"
    {:response-format :json
     :keywords? true
     :handler (fn [r] (swap! app-state assoc-in [:user :followed-repos] r))}))

(defn get-github-repos
  []
  (GET "/api/github/user/repo"
    {:response-format :json
     :keywords? true
     :handler (fn [r] (swap! app-state assoc-in [:user :repo-list] r))}))
