(ns shrike.component.navbar
  (:require [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]
            [shrike.component.button.auth :as auth]
            [shrike.user :as user]))

(defcomponent navbar
  [{:keys [repo view] :as data} owner]
  (render
   [_]
   (dom/nav
    {:class "navbar navbar-inverse navbar-fixed-top"}
    (dom/div
     {:class "container-fluid container-fluid-spacious"}
     (dom/div
      {:class "navbar-header"}
      (dom/button
       {:class "navbar-toggle collapsed"
        :data-toggle "collapse"
        :data-target "#navbar"
        :aria-expanded "false"
        :aria-controls "navbar"}
       (dom/span
        {:class "sr-only"}
        "Toggle navigation")
       (dom/span
        {:class "icon-bar"})
       (dom/span
        {:class "icon-bar"})
       (dom/span
        {:class "icon-bar"}))
      (dom/a
       {:class "navbar-brand navbar-brand-emphasized"
        :href "/"}
       (dom/span
        {:class "icon icon-leaf navbar-brand-icon"})
       "Dashboard"))
     (dom/div
      {:id "navbar"
       :class "navbar-collapse collapse"}
      (dom/ul
       {:class "nav navbar-nav"}
       (dom/li
        (when (= view "repo-list")
          {:class "active"})))
      (dom/form
       {:class "form-inline navbar-form navbar-right"}
       (if (:id (:user data))
         (om/build auth/logout data)
         (om/build auth/login data))))))))
