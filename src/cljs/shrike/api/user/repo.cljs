(ns shrike.api.user.repo
  (:require [ajax.core :refer [GET POST]]
            [shrike.auth :refer [csrf-token]]
            [shrike.state :refer [app-state]]))

(defn get-followed-repos
  "Retrieve the list of repos this user currently follows."
  []
  (GET
    "/api/user/repo"
    {:response-format :json
     :keywords? true
     :handler (fn [r] (swap! app-state assoc-in [:user :followed-repos] r))}))

(defn add-new-followed-repo-to-state
  [r]
  (swap! app-state update-in[:user :followed-repos] conj r))

(defn follow-new-repo
  "Add a new repository to the list of repos this user follows."
  [repo]
  (POST
    "/api/user/repo"
    {:response-format :json
     :format :json
     :headers {:X-CSRF-Token (csrf-token)}
     :params repo
     :keywords? true
     :handler (fn [r] (js/console.log (clj->js r)) (add-new-followed-repo-to-state r))}))

(defn get-github-repos
  []
  (GET "/api/github/user/repo"
    {:response-format :json
     :keywords? true
     :handler (fn [r] (swap! app-state assoc-in [:user :repo-list] r))}))
