(ns shrike.component.statcard
  (:require [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]))

(defn build-details-statcard
  [title value]
  (dom/div
    {:class "col-sm-6 col-md-2"}
    (dom/div
      {:class "statcard"}
      (dom/div
        {:class "p-a"}
        (dom/span {:class "statcard-desc"} title)
        (dom/h4 {:class "statcard-number"} value)))))

(defn build-summary-statcard
  [title value]
  (dom/div
    {:class "statcard"}
    (dom/div
      {:class "p-a"}
      (dom/span {:class "statcard-desc"} title)
      (dom/h2 {:class "statcard-number"} value))))

(defcomponent statcard-details
  [data owner]
  (render
   [_]
   (dom/div
    {:class "col-sm-6 col-md-3 m-b"}
     (build-summary-statcard "Lines of Code" "12,938")
     (build-summary-statcard "Missing Docstrings" "20")
     (build-summary-statcard "Cleanup Opportunities" "13"))))

(defcomponent statcard-details-2
  [data owner]
  (render
   [_]
   (dom/div
    {:class "col-sm-6 col-md-3 m-b"}
     (build-summary-statcard "Code Complexity" "785")
     (build-summary-statcard "Complexity / Definition" "13")
     (build-summary-statcard "Style Problems" "135"))))



(defn doughnut-chart
  [data]
  (dom/div
   {:class "col-sm-6 col-md-3 m-t"}
   (dom/div
    {:class "statcard text-center"
     :style {:margin-left "40px"
             :margin-right "40px"}}
    (dom/canvas
     {:class "ex-graph"
      :data-chart "doughnut"
      :width "50"
      :height "50"
      :data-segment-stroke-color "#222"
      :data-value "[{ value: 80, color: '#1bc98e', label: 'Covered' }, { value: 20, color: '#e64759', label: 'Uncovered'}]"})
    (dom/strong
     {:class "text-muted"}
     "Test Coverage")
    (dom/h3
     "80%"))))

(defcomponent statcard-coverage
  [data owner]
  (render
   [_]
   (dom/div
    {:class "col-sm-6 col-md-3 m-t"}
    (dom/div
     {:class "statcard text-center"
      :style {:margin-left "40px"
              :margin-right "40px"}}
     (dom/canvas
      {:class "ex-graph"
       :data-chart "doughnut"
       :width "50"
       :height "50"
       :data-segment-stroke-color "#222"
       :data-value "[{ value: 80, color: '#1bc98e', label: 'Covered' }, { value: 20, color: '#e64759', label: 'Uncovered'}]"})
     (dom/strong
      {:class "text-muted"}
      "Test Coverage")
     (dom/h3
      "80%")))))

(defcomponent statcard-deadcode
  [data owner]
  (render
   [_]
   (dom/div
    {:class "col-sm-6 col-md-3 m-t"}
    (dom/div
     {:class "statcard text-center"
      :style {:margin-left "40px"
              :margin-right "40px"}}
     (dom/canvas
      {:class "ex-graph"
       :data-chart "doughnut"
       :width "50"
       :height "50"
       :data-segment-stroke-color "#222"
       :data-value "[{ value: 97, color: '#1bc98e', label: 'Covered' }, { value: 3, color: '#e64759', label: 'Uncovered'}]"})
     (dom/strong
      {:class "text-muted"}
      "Dead Code")
     (dom/h3
      "13 lines")))))
