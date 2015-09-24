(ns shrike.view.owner.repo.build
  "High level template for the Shrike dashboard view."
  (:require [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]
            [shrike.component.statcard :as statcard]))


(defcomponent build-blurb
  [data owner]
  (render
   [_]
   (dom/div
     (dom/div
      {:class "hr-divider"}
      (dom/ul
       {:class "hr-divider-content hr-divider-heading"}
       "Build Details"))
     (dom/div
       {:class "row statcards"}
       (dom/div
         {:class "col-sm-6 col-md-2"}
         (dom/div
           {:class "statcard"}
           (dom/div
             {:class "p-a"}
             (dom/span
               {:class "statcard-desc"}
               "Build ID")
             (dom/h4
               {:class "statcard-number"}
               "100001"))))
       (dom/div
         {:class "col-sm-6 col-md-2"}
         (dom/div
           {:class "statcard"}
           (dom/div
             {:class "p-a"}
             (dom/span
               {:class "statcard-desc"}
               "Status")
             (dom/h4
               {:class "statcard-number"}
               "Running"))))
       (dom/div
         {:class "col-sm-6 col-md-2"}
         (dom/div
           {:class "statcard"}
           (dom/div
             {:class "p-a"}
             (dom/span
               {:class "statcard-desc"}
               "Push Ref")
             (dom/a
               {:href "#"}
               (dom/h4
                 {:class "statcard-number"}
                 "394717ffc3")))))
       (dom/div
         {:class "col-sm-6 col-md-2"}
         (dom/div
           {:class "statcard"}
           (dom/div
             {:class "p-a"}
             (dom/span
               {:class "statcard-desc"}
               "Author")
             (dom/h4
               {:class "statcard-number"}
               "David Jarvis"))))
       (dom/div
         {:class "col-sm-6 col-md-2"}
         (dom/div
           {:class "statcard"}
           (dom/div
             {:class "p-a"}
             (dom/span
               {:class "statcard-desc"}
               "Started")
             (dom/h4
               {:class "statcard-number"}
               "5 mins ago"))))
       (dom/div
         {:class "col-sm-6 col-md-2"}
         (dom/div
           {:class "statcard"}
           (dom/div
             {:class "p-a"}
             (dom/span
               {:class "statcard-desc"}
               "Duration")
             (dom/h4
               {:class "statcard-number"}
               "5m 20s"))))))))

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
       "Dashboard")
      (dom/h2
       {:class "dashhead-title"}
       (str (:org repo) "/" (:name repo)))))
    (om/build build-statcards data))))
