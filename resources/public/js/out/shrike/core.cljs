(ns shrike.core
  (:require [shrike.components.navbar :as navbar]
            [om.core :as om]
            [om-tools.dom :as dom]))

(.log js/console "Successfully loaded shrike Frontend")

(defonce app-state (atom {}))

(defn app-body
  [data owner]
  (reify
    om/IRender
    (render [_]
      (dom/body
        {:class "with-top-navbar"}
        (navbar/navbar data owner)))))

(om/root
  app-body
  app-state
  {:target (. js/document (getElementById "my-app"))})
