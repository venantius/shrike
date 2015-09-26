(ns shrike.view.owner.repo
  "High level template for the Shrike dashboard view."
  (:require [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]
            [shrike.component.history :as history]))

(defcomponent repo-build-history
  [data owner]
  (render
   [_]
   (om/build history/history data)))
