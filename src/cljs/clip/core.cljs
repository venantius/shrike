(ns clip.core
  (:require [clip.components.navbar :as navbar]
            [om.core :as om]
            [om-tools.dom :as dom]))

(.log js/console "Successfully loaded Clip Frontend")

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
