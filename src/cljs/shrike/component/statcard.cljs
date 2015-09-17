(ns shrike.component.statcard
  (:require [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]))

(defcomponent statcard-coverage
  [data owner]
  (render
    [_]
    (dom/div
      {:class "col-sm-6 col-md-3 m-t"}
      (dom/div
        {:class "statcard text-center"
         :style {:margin-left "30px"
                 :margin-right "30px"}}
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
         :style {:margin-left "30px"
                 :margin-right "30px"}}
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

(defcomponent statcard-details
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
            "Lines of Code")
          (dom/h2
            {:class "statcard-number"}
            "12,938 "))

      (dom/div
        {:class "statcard"}
        (dom/div
          {:class "p-a"}
          (dom/span
            {:class "statcard-desc"}
            "Missing Docstrings")
          (dom/h2
            {:class "statcard-number"}
            "20"))

       (dom/div
        {:class "statcard"}
        (dom/div
          {:class "p-a"}
          (dom/span
            {:class "statcard-desc"}
            "Cleanup Opportunities")
          (dom/h2
            {:class "statcard-number"}
            "13"))))
      ))))

(defcomponent statcard-details-2
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
            "Code Complexity")
          (dom/h2
            {:class "statcard-number"}
            "785")))

      (dom/div
        {:class "statcard"}
        (dom/div
          {:class "p-a"}
          (dom/span
            {:class "statcard-desc"}
            "Complexity / Definition")
          (dom/h2
            {:class "statcard-number"}
            "13")))

      (dom/div
        {:class "statcard"}
        (dom/div
          {:class "p-a"}
          (dom/span
            {:class "statcard-desc"}
            "Style Problems")
          (dom/h2
            {:class "statcard-number"}
            "135"))))))
