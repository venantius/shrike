(ns shrike.component.tabs
  (:require [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]
            [shrike.component.button :as button]
            [shrike.user :as user]))

(defcomponent tabs
  [data owner]
  (render
    [_]
    (dom/div
      {:class "hr-divider m-y-md"}
      (dom/ul
        {:class "hr-divider-content hr-divider-heading"}
        "Build history"))))



#_(dom/li
  {:class "active"
   :role "presentation"}
  (dom/a
    {:href "#sales"
     :role "tab"
     :data-toggle "tab"
     :aria-controls "sales"}
    "Sales"))
#_(dom/li
  {:role "presentation"}
  (dom/a
    {:href "#inventory"
     :role "tab"
     :data-toggle "tab"
     :aria-contorls "inventory"}
    "Inventory"))
#_(dom/li
  {:role "presentation"}
  (dom/a
    {:href "#profit"
     :role "tab"
     :data-toggle "tab"
     :aria-controls "profit"}
    "Profit"))

(defcomponent tab-content
  [data owner]
  (render
    [_]
    (dom/div
      {:class "tab-content"}
      (dom/div
        {:class "tab-pane active"
         :role "tabpanel"
         :id "sales"}
        (dom/div
          {:class "ex-line-graphs"}
          (dom/canvas
            {:class "ex-line-graph"
             :width "600"
             :height "400"
             :data-chart "line"
             :data-scale-line-color "transparent"
             :data-scale-grid-line-color "rgba(255,255,255,0.05)"
             :data-scale-font-color "#a2a2a2"
             :data-labels "['','Aug 29','','','Sept 5','','','Sept 12','','','Sept 19','']"
             :data-value "[{fillColor: 'rgba(28,168,221,.03)', data: [2500, 3300, 2512, 2775, 2498, 3512, 2925, 4275, 3507, 3825, 3445, 3985]}]"})))

      (dom/div
        {:class "tab-pane"
         :role "tabpanel"
         :id "inventory"}
        (dom/div
          {:class "ex-line-graphs"}
          (dom/canvas
            {:class "ex-line-graph"
             :width "600"
             :height "400"
             :data-chart "bar"
             :data-scale-line-color "transparent"
             :data-scale-grid-line-color "rgba(255,255,255,0.05)"
             :data-scale-font-color "#a2a2a2"
             :data-labels "['August','September','October','November','December','January','February']"
             :data-value "[{ label: 'First dataset', data: [65, 59, 80, 81, 56, 55, 40] }, { label: 'Second dataset', data: [28, 48, 40, 19, 86, 27, 90] }]"})))
      (dom/div
        {:class "tab-pane"
         :role "tabpanel"
         :id "profit"}
        (dom/div
          {:class "row ex-graph text-center"}
          (dom/div
            {:class "col-sm-4"}
            (dom/div
              {:class "c-w-lg m-x-auto"}
              (dom/canvas
                {:class "ex-graph"
                 :width "200"
                 :height "200"
                 :data-chart "doughnut"
                 :data-segment-stroke-color "#222"
                 :data-value "[{ value: 230, color: '#1ca8dd', label: 'Returning' }, { value: 130, color: '#1bc98e', label: 'New' }]"}))
            (dom/strong
              {:class "text-muted"}
              "Traffic")
            (dom/h3
              "New vs Returning"))

          (dom/div
            {:class "col-sm-4"}
            (dom/div
              {:class "c-w-lg m-x-auto"}
              (dom/canvas
                {:class "ex-graph"
                 :width "200"
                 :height "200"
                 :data-chart "doughnut"
                 :data-segment-stroke-color "#222"
                 :data-value "[{ value: 330, color: '#1ca8dd', label: 'Recurring' }, { value: 30, color: '#1bc98e', label: 'New' }]"}))
            (dom/strong
              {:class "text-muted"}
              "Revenue")
            (dom/h3
              "New vs Recurring"))

          (dom/div
            {:class "col-sm-4"}
            (dom/div
              {:class "c-w-lg m-x-auto"}
              (dom/canvas
                {:class "ex-graph"
                 :width "200"
                 :height "200"
                 :data-chart "doughnut"
                 :data-segment-stroke-color "#222"
                 :data-value "[{ value: 100, color: '#1ca8dd', label: 'Referrals' }, { value: 260, color: '#1bc98e', label: 'Direct' }]"}))
            (dom/strong
              {:class "text-muted"}
              "Traffic")
            (dom/h3
              "Direct vs Referrals")))))))
