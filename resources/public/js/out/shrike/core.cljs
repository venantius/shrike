(ns shrike.core
  (:require [shrike.components.navbar :as navbar]
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
