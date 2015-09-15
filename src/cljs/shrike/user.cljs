(ns shrike.user
  "User data model and functions"
  (:require [ajax.core :refer [GET]]
            [om.core :as om]))

(defn logout
  [user]
  (GET "/logout")
  (om/update! user :user nil))
