(ns shrike.api.user.repo
  (:require [ajax.core :refer [DELETE GET POST]]
            [goog.string :refer [format]]
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
  (swap! app-state update-in [:user :followed-repos] conj r))

(defn follow-new-repo
  "Add a new repository to the list of repos this user follows."
  [repo]
  (POST
    "/api/user/repo"
    {:response-format :json
     :format :json
     :headers {:X-CSRF-Token (csrf-token)}
     :params (clj->js repo)
     :keywords? true
     :handler (fn [r] (js/console.log (clj->js r)) (add-new-followed-repo-to-state r))}))

(defn remove-followed-repo-from-state
  [repo]
  (swap! app-state assoc-in [:user :followed-repos]
         (remove #(= (:id repo) (:id %)) (:followed-repos (:user @app-state)))))

(defn unfollow-repo
  "Stop following this repository."
  [repo]
  (DELETE
    (format "/api/user/repo/%s" (:id repo))
    {:reponse-format :json
     :format :json
     :headers {:X-CSRF-Token (csrf-token)}
     :handler (fn [r] (remove-followed-repo-from-state repo))}))

(defn get-github-repos
  []
  (GET "/api/github/user/repo"
    {:response-format :json
     :keywords? true
     :handler (fn [r] (swap! app-state assoc-in [:user :repo-list] r))}))
