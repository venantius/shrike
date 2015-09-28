(ns shrike.user
  "User data model and functions"
  (:require [accountant.core :as accountant]
            [ajax.core :refer [GET]]
            [om.core :as om]
            [shrike.state :refer [app-state]]))

(defn logged-in?
  []
  (if (get-in @app-state [:user :id])
    true
    false))

(defn logout
  [user]
  (GET "/logout")
  (om/update! user :user nil)
  (accountant/navigate! "/"))
