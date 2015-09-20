(ns shrike.view.dashboard
  "High level template for the Shrike dashboard view."
  (:require [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]))

(defcomponent dashboard-view
  [{:keys [repo] :as data} owner]
  (render
    [_]
    (dom/div
      {:class "container-fluid container-fluid-spacious"}
      (dom/div
         {:class "dashhead m-t-md"}
         (dom/div
           {:class "dashhead-titles"}
           (dom/h6
             {:class "dashhead-subtitle"}
             "Dashboard")
           (dom/h2
             {:class "dashhead-title"}
             (str (:org repo) "/" (:name repo))
             #_(.stringify js/JSON (clj->js (:builds repo)))
             )))
      (dom/div
        {:class "hr-divider m-t m-b-md"}
        (dom/h3
          {:class "hr-divider-content hr-divider-heading"}
          "Latest stats")))))
