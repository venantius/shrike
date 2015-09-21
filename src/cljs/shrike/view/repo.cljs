(ns shrike.view.repo
  "The repository listing page."
  (:require [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]
            [shrike.nav :as nav]))

(defcomponent followed-repo-list
  [data owner]
  (render
    [_]
    (dom/div
      {:class "container-fluid container-fluid-spacious"}
      (dom/h2 "Followed Repositories")
      (dom/div
        {:class "hr-divider m-t m-b-md"})
      (dom/div
        {:class "row"}
        (for [i (:followed-repos (:user data))]
          (dom/div
            {:class "col-xs-3"}
            (dom/div
              {:class "statcard statcard-primary p-a-md"
               :role "button"

               :on-click #(nav/go-to-repo-dashboard! (:login i) (:name i))
               }
              (dom/h3
                {:class "statcard-number"}
                (:name i))
              (dom/span
                {:class "statcard-desc"}
                (:login i))
              )))))))

(defcomponent add-repo-view
  [data owner]
  (render
    [_]
    (dom/div
      {:class "container-fluid container-fluid-spacious"}
      (dom/h2 "Follow Repository")
      (dom/ul
        {:class "list-group"}
        (for [i (:repo-list (:user data))]
          (dom/li
            {:class "list-group-item"}
            i
            (dom/button
              {:class "btn btn-xs btn-primary-outline pull-right"}
              "Follow"))))
      #_(.stringify js/JSON (clj->js (:repo-list  (:user data)))))))
