(ns shrike.view.inner.owner.repo.build.style
  (:require [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]))

(defcomponent build-style
  [data owner]
  (render
    [_]
    (dom/h4 "This is the style page. You probably got here by mistake.")))
