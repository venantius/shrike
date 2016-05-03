(ns shrike.view.inner.owner.repo.build
  "/gh/:owner/:repo/build/:build_id"
  (:require [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]
            [shrike.component.statcard :as statcard]
            [shrike.nav :as nav]
            [shrike.view.inner.owner.repo.build.coverage :as coverage]
            [shrike.view.inner.owner.repo.build.style :as style]))

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

(defcomponent build-summary
  [data owner]
  (render
   [_]
   (dom/div
    {:class "row statcards"}
    (om/build statcard/statcard-details data)
    (om/build statcard/statcard-details-2 data)
    (om/build statcard/statcard-coverage data)
    (om/build statcard/statcard-deadcode data))))

(def menu-tab
  {:role "button"
   :aria-controls "support"
   :aria-expanded false})

(defcomponent build-statcards
  [{:keys [repo view] :as data} owner]
  (render
   [_]
   (let [{:keys [build_id coverage owner name]} (:current-build repo)]
     (dom/div
      (om/build build-details data)
      (dom/ul
       {:class "nav nav-bordered m-t m-b-0"
        :role "tablist"}
       (dom/li
        {:class (when (= view "build-summary") "active")
         :role "presentation"}
        (dom/a
         (merge menu-tab
                {:href (nav/build-summary-page owner name build_id)})
         "Build Summary"))
       (when coverage
         (dom/li
          {:class (when (= view "build-coverage") "active")
           :role "presentation"}
          (dom/a
           (merge menu-tab
                  {:href (nav/build-coverage-page owner name build_id)})
           "Code Coverage")))
       (dom/li
        {:class (when (= view "build-style") "active")
         :role "presentation"}
        (dom/a
         (merge menu-tab
                {:href (nav/build-style-page owner name build_id)})
         "Style")))
      (dom/hr
       {:class "m-t-0"})
      (condp = view
        "build-summary"  (om/build build-summary data)
        "build-coverage" (om/build coverage/build-coverage data)
        "build-style"    (om/build style/build-style data))))))

(defcomponent build
  [{:keys [repo] :as data} owner]
  (render
   [_]
   (dom/div
    {:class "container-fluid container-fluid-spacious"}
    (dom/div
     {:class "row"}
     (dom/div
      {:class "col-xs-6"}

      (dom/div
       {:class "dashhead m-t-md"}
       (dom/div
        {:class "dashhead-titles"}
        (dom/h6
         {:class "dashhead-subtitle"}
         "Shrike")
        (dom/h2
         {:class "dashhead-title"}
         (str (:owner repo) "/" (:name repo) " ")))))
     (dom/div
      {:class "col-xs-6"}
      (dom/div
       {:class "dashhead m-t-md"}
       (dom/div
        {:class "dashhead-titles m-t"
         :style {:float "right"}}
        (dom/h2
         {:class "dashhead-title"
          :style {:color "#1997c6"}}
         "settings "
         (dom/span
          {:class "icon icon-cog"
           :style {:font-size "22"}}))))))
    (om/build build-statcards data))))
