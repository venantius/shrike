(ns shrike.view.inner.owner.repo.build
  "High level template for the Shrike dashboard view."
  (:require [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]
            [shrike.component.statcard :as statcard]))

(defcomponent build-blurb
  [{:keys [repo]} owner]
  (render
    [_]
    (let [{:keys [build_id sha]} (:current-build repo)]
      (dom/div
        (dom/div
          {:class "hr-divider"}
          (dom/ul
            {:class "hr-divider-content hr-divider-heading"}
            "Build Details"))
        (dom/div
          {:class "row statcards"}
          (statcard/build-details-statcard "Build ID" build_id)
          (statcard/build-details-statcard "Push ref." (subs sha 0 10))
          (statcard/build-details-statcard "Author" "David Jarvis")
          (statcard/build-details-statcard "Started" "5 mins ago")
          (statcard/build-details-statcard "Duration" "5m 20s")
          (statcard/build-details-statcard "Status" "Running"))))))

(defcomponent build-statcards
  [data owner]
  (render
   [_]
   (dom/div
    (om/build build-blurb data)
    (dom/ul
     {:class "nav nav-bordered m-t m-b-0"
      :role "tablist"}
     (dom/li
      {:class "active"
       :role "presentation"}
      (dom/a
       {:href "#yerp"
        :role "tab"
        :data-toggle "tab"
        :aria-controls "support"
        :aria-expanded false}
       "Build Summary"))
     (dom/li
      {:role "presentation"}
      (dom/a
       {:href "#yerp"
        :role "tab"
        :data-toggle "tab"
        :aria-controls "support"
        :aria-expanded false}
       "Code Coverage"))
     (dom/li
      {:role "presentation"}
      (dom/a
       {:href "#yerp"
        :role "tab"
        :data-toggle "tab"
        :aria-controls "support"
        :aria-expanded false}
       "Style")))
    (dom/hr
     {:class "m-t-0"})
    (dom/div
     (dom/div
      {:class "row statcards"}
      (om/build statcard/statcard-details data)
      (om/build statcard/statcard-details-2 data)
      (om/build statcard/statcard-coverage data)
      (om/build statcard/statcard-deadcode data))))))

(defcomponent build-summary
  [{:keys [repo] :as data} owner]
  (render
   [_]
   (dom/div
    {:class "container-fluid container-fluid-spacious"}
    (dom/div
     {:class "dashhead m-t-md"}
     (dom/div
      {:class "dashhead-titles"}
      (dom/h6
       {:class "dashhead-subtitle"}
       "Shrike")
       (js/JSON.stringify (clj->js (:current-build (:repo data))))
      (dom/h2
       {:class "dashhead-title"}
       (str (:org repo) "/" (:name repo)))))
    (om/build build-statcards data))))
