(ns shrike.core
  (:require [shrike.component.github]
            [shrike.component.navbar :as navbar]
            [shrike.component.statcard :as statcard]
            [shrike.component.tabs :as tabs]
            [shrike.cookies :as cookies]
            [shrike.routes]
            [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]))

(.log js/console "Successfully loaded shrike Frontend")

(defonce app-state (atom {:user {:id (cookies/get "id")}}))

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
      (dom/div
        {:class "row statcards"}
        (dom/div
          (dom/h2
          (pr-str data)))
        (om/build-all statcard/statcard [1 2 3 4]))
      (om/build tabs/tabs data))))

(om/root
  statcards
  app-state
  {:target (. js/document (getElementById "my-app2"))})
