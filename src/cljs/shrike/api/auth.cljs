(ns shrike.api.auth
  (:require [ajax.core :refer [GET POST]]
            [shrike.state :refer [app-state]]))

(defn get-csrf-token
  []
  "Retrieve the user's CSRF token."
  (GET
    "/user/csrf-token"
    {:handler (fn [r] (swap! app-state assoc-in [:user :security :csrf-token] r))}))
