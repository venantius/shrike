(ns shrike.view.user.repo.add
  (:require [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]
            [shrike.api.user.repo :as repo-api]))

(defcomponent add-repo-view
  [data owner]
  (render
   [_]
   (dom/div
    {:class "container-fluid container-fluid-spacious"}
    (dom/h2 "Follow Repository")
    (dom/ul
     {:class "list-group"}
     (for [repo (:repo-list (:user data))]
       (dom/li
        {:class "list-group-item"}
        (:full_name repo)
        (if (:followed? repo)
          (dom/button
           {:class "btn btn-xs btn-danger-outline pull-right"}
           "Stop following")
          (dom/button
           {:class "btn btn-xs btn-primary-outline pull-right"
            :on-click #(repo-api/follow-new-repo (clj->js repo))}
           "Follow"))))))))
