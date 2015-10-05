(ns shrike.component.statcard
  (:require [goog.string :refer [format]]
            [om.core :as om]
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
  [title subtitle value_1 value_2 label_1 label_2]
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
     :data-value (format "[{ value: %s, color: '#1bc98e', label: 'Covered' }, { value: %s, color: '#e64759', label: 'Uncovered'}]" value_1 value_2)})
   (dom/strong {:class "text-muted"} title)
   (dom/h3 subtitle)))

(defn empty-doughnut-chart
  [title subtitle]
  (dom/div
   {:class "statcard text-center"
    :style {:margin-left "40px"
            :margin-right "40px"}}
   (dom/canvas
    {:class "ex-graph"
     :data-chart "doughnut"
     :width "50"
     :height "50"
     :data-segment-show-stroke false
     :data-animate-rotate false
     :data-value "[{ value: 1, color: '#434857'}]"})
   (dom/strong {:class "text-muted"} title)
   (dom/h3 subtitle)))

(defcomponent statcard-coverage
  [data owner]
  (render
   [_]
   (let [coverage (get-in data [:repo :current-build :coverage])]
     (dom/div
      {:class "col-sm-6 col-md-3 m-t"}
       ;; I can't really explain why this requires whens instead of ifs.
       ;; Maybe something to do with cursors?
      (when-not coverage
        (empty-doughnut-chart "Code Coverage" "Not Covered"))
      (when coverage
        (doughnut-chart
         "Code Coverage"
         (str coverage "%")
         coverage
         (- 100 coverage)
         "Covered"
         "Uncovered"))))))

(defcomponent statcard-deadcode
  [data owner]
  (render
   [_]
   (dom/div
    {:class "col-sm-6 col-md-3 m-t"}
    (doughnut-chart "Dead Code" "14 Lines" 86 14 "In-use" "Dead"))))
