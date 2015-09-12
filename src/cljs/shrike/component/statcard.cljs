(ns shrike.component.statcard
  (:require [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]))

(defcomponent statcard
  [data owner]
  (render
    [_]
    (dom/div
      {:class "col-sm-6 col-md-3 m-b"}
      (dom/div
       {:class "statcard"}
       (dom/div
         {:class "p-a"}
         (dom/span
           {:class "statcard-desc"}
           "Page views")
         (dom/h2
           {:class "statcard-number"}
           "12,938"
           (dom/small
             {:class "label label-success"}
             "5%")))
       (dom/canvas
         {:id "sparkline1"
          :width "378"
          :height "94"
          :class "sparkline"
          :data-chart "spark-line"
          :data-value "[{strokeColor: '#1ca8dd', fillColor: 'rgba(28,168,221,0.03)', data:[28,68,41,43,96,45,100]}]"
          :data-labels "['a', 'b', 'c', 'd', 'e', 'f', 'g']"
          :style {:width "189px"
                  :height "47px"}})))))
