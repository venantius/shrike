(ns shrike.core
  (:require [shrike.component.github]
            [shrike.component.navbar :as navbar]
            [shrike.component.statcard :as statcard]
            [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]))

(.log js/console "Successfully loaded shrike Frontend")

(defonce app-state (atom {}))

(defcomponent app-body
    [data owner]
    (render [_]
            ;; Don't let this be a body tag! Otherwise BAD THINGS happen.
            (dom/div
              {:class "with-top-navbar"}
            (om/build navbar/navbar data))))

(om/root
  app-body
  app-state
  {:target (. js/document (getElementById "my-app"))})

(defcomponent statcards
  [data owner]
  (render
    [_]
    (dom/div
      {:class "row statcards"}
      (om/build-all statcard/statcard [1 2 3 4]))))

(om/root
  statcards
  app-state
  {:target (. js/document (getElementById "my-app2"))})
