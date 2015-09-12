(ns shrike.component.navbar
  (:require [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]))

(defcomponent navbar
  [data owner]
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
              (dom/a
                {:href "/order-history"}
                "Order History"))
            (dom/li
              {:class "active"}
              (dom/a
                {:href "/fluid"}
                "Fluid layout"))
            (dom/li
              (dom/a
                {:href "/icon-nav"}
                "Icon nav"))
            (dom/li
              (dom/a
                {:href "/docs"}
                "docs"))
            (dom/li
              (dom/a
                {:href "/light"}
                "Light UI")))
          (dom/form
            {:class "form-inline navbar-form navbar-right"}
            (dom/div
              {:class "input-with-icon"}
              (dom/input
                {:class "form-control"
                 :type "text"
                 :placeholder "Search..."})
              (dom/span
                {:class "icon icon-magnifying-glass"}))))))))

