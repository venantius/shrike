(ns shrike.component.tabs
  (:require [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]
            [shrike.user :as user]))

(defcomponent tabs
  [data owner]
  (render
    [_]
    (dom/div
      {:class "hr-divider m-y-md"}
      (dom/ul
        {:class "hr-divider-content hr-divider-heading"}
        "Build history"))))
