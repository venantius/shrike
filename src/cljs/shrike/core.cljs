(ns shrike.core
  (:require [shrike.component.github]
            [shrike.component.history :as history]
            [shrike.component.navbar :as navbar]
            [shrike.component.statcard :as statcard]
            [shrike.component.tabs :as tabs]
            [shrike.cookies :as cookies]
            [shrike.routes]
            [shrike.state :refer [app-state]]
            [shrike.view.dashboard :as dashboard]
            [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]))

(.log js/console "Successfully loaded shrike Frontend")

(defcomponent app-body
    [{:keys [repo] :as data} owner]
    (render
      [_]
      ;; Don't let this be a body tag! Otherwise BAD THINGS happen.
      (dom/div
        (om/build navbar/navbar data)
        (om/build dashboard/dashboard-view data))))

(om/root
  app-body
  app-state
  {:target (. js/document (getElementById "my-app"))})

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
      (om/build history/history data)
      #_(om/build tabs/tab-content data))))

(om/root
  statcards
  app-state
  {:target (. js/document (getElementById "my-app2"))})
