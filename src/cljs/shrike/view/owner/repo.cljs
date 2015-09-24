(ns shrike.view.owner.repo
  "High level template for the Shrike dashboard view."
  (:require [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]
            [shrike.component.tabs :as tabs]
            [shrike.component.history :as history]))

(defcomponent repo-dashboard-statcards
  [data owner]
  (render
   [_]
   (dom/div
    (om/build tabs/tabs data)
    (om/build history/history data))))

(defcomponent repo-dashboard
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
       (str (:org repo) "/" (:name repo)))))
    (om/build repo-dashboard-statcards data))))

