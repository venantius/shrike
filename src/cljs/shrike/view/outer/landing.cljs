(ns shrike.view.outer.landing
  "Root landing page for non-logged in users."
  (:require [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]))

(defcomponent outer
  [data owner]
  (render
   [_]
   (dom/div
    {:class "container-fluid container-fluid-spacious"}
    (dom/div
     {:class "dashhead m-t-md"}
     (dom/h6
      {:class "dashhead-subtitle"}
      "Shrike")
     (dom/h2
      "Impale Bad Code")))))
