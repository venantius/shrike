(ns shrike.view.dashboard
  "High level template for the Shrike dashboard view."
  (:require [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]
            [shrike.component.statcard :as statcard]
            [shrike.component.tabs :as tabs]
            [shrike.component.history :as history]
            ))

(defcomponent statcards
  [data owner]
  (render
    [_]
    (dom/div
      (dom/div
        {:class "row statcards"}
        (om/build statcard/statcard-details data)
        (om/build statcard/statcard-details-2 data)
        (om/build statcard/statcard-coverage data)
        (om/build statcard/statcard-deadcode data))
      (om/build tabs/tabs data)
      (om/build history/history data))))


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
          "Latest stats"))
      (om/build statcards data))))
