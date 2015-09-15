(ns shrike.component.button
  "Buttons!!!"
  (:require [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]
            [shrike.user :as user]))

(defcomponent login
  [data owner]
  (render
    [_]
    (dom/a
      {:class "btn btn-primary-outline"
       :role "button"
       :href "/oauth/github/login"}
      "Login "
      (dom/i
        {:class "fa fa-github"}))))

(defcomponent logout
  [data owner]
  (render
    [_]
    (dom/a
      {:class "btn btn-primary-outline"
       :role "button"
       :on-click #(user/logout data)}
      "Logout")))
