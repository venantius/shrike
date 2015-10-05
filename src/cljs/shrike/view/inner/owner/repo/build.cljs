(ns shrike.view.inner.owner.repo.build
  "/gh/:owner/:repo/build/:build_id"
  (:require [goog.string :refer [format]]
            [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]
            [shrike.component.statcard :as statcard]
            [shrike.nav :as nav]))

(defcomponent build-details
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
       (statcard/build-details-statcard "Push ref." (subs (or sha "") 0 10))
       (statcard/build-details-statcard "Author" "David Jarvis")
       (statcard/build-details-statcard "Started" "5 mins ago")
       (statcard/build-details-statcard "Duration" "5m 20s")
       (statcard/build-details-statcard "Status" "Running"))))))

(defcomponent build-statcards
  [{:keys [repo view] :as data} owner]
  (render
   [_]
    (let [{:keys [build_id owner name]} (:current-build repo)]
   (dom/div
    (om/build build-details data)
    (dom/ul
     {:class "nav nav-bordered m-t m-b-0"
      :role "tablist"}
     (dom/li
       {:class (when (= view "build-summary") "active")
        :role "presentation"}
      (dom/a
       {:on-click #(nav/go-to-build-summary-page! owner name build_id)
        :role "button"
        :data-toggle "tab"
        :aria-controls "support"
        :aria-expanded false}
       "Build Summary"))
     (dom/li
       {:class (when (= view "build-coverage") "active")
        :role "presentation"}
      (dom/a
       {:on-click #(nav/go-to-build-coverage-page! owner name build_id)
        :role "button"
        :data-toggle "tab"
        :aria-controls "support"
        :aria-expanded false}
       "Code Coverage"))
     (dom/li
       {:class (when (= view "build-style") "active")
        :role "presentation"}
      (dom/a
       {:on-click #(nav/go-to-build-style-page! owner name build_id)
        :role "button"
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
      (om/build statcard/statcard-deadcode data)))))))

(defcomponent build
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
      (dom/h2
       {:class "dashhead-title"}
       (str (:owner repo) "/" (:name repo)))))
    (om/build build-statcards data))))
