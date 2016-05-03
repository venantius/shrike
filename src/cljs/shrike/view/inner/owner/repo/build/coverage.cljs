(ns shrike.view.inner.owner.repo.build.coverage
  (:require [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]))

(defcomponent build-coverage
  [data owner]
  (render
   [_]
   (dom/h4 "This is the coverage page. You probably got here by mistake.")))
