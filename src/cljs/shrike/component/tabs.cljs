(ns shrike.component.tabs
  (:require [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]
            [shrike.component.button :as button]
            [shrike.user :as user]))

(defcomponent tabs
  [data owner]
  (render
    [_]
    (dom/div
      {:class "hr-divider m-y-md"}
      (dom/ul
        {:class "nav nav-pills hr-divider-content hr-divider-nav"
         :role "tablist"}
        (dom/li
          {:class "active"
           :role "presentation"}
          (dom/a
            {:href "#sales"
             :role "tab"
             :data-toggle "tab"
             :aria-controls "sales"}
            "Sales"))
        (dom/li
          {:role "presentation"}
          (dom/a
            {:href "#inventory"
             :role "tab"
             :data-toggle "tab"
             :aria-contorls "inventory"}
            "Inventory"))
        (dom/li
          {:role "presentation"}
          (dom/a
            {:href "#profit"
             :role "tab"
             :data-toggle "tab"
             :aria-controls "profit"}
            "Profit"))))))
