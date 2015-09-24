(ns shrike.component.github
  (:require [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]))

(defcomponent oauth-button
  [data owner]
  (render
   [_]
   (dom/button
    "Yo")))

