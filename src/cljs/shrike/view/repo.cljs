(ns shrike.view.repo
  "The repository listing page."
  (:require [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]
            [shrike.nav :as nav]))

(defcomponent repo-statcard
  [{:keys [login name] :as data} owner]
  (render
    [_]
    (dom/div
     {:class "col-xs-12 col-md-3"}
     (dom/div
      {:class "statcard statcard-primary text-center p-a-md "
       :role "button"
       :on-click #(nav/go-to-repo-dashboard! login name)}
      (dom/h3
       {:class "statcard-number"}
       name)
      (dom/span
       {:class "statcard-desc"}
       login)))))

(defcomponent repo-owner-section
  [data owner]
   (render
    [_]
    (dom/div
      (let [org-name (first data)]
      (dom/div
       {:class "hr-divider m-t-md m-b"}
       (dom/h3
        {:class "hr-divider-content hr-divider-heading"}
        (clj->js org-name))))
      (dom/div
       {:class "row"}
       (om/build-all repo-statcard (second data))))))

(defcomponent followed-repo-list
  [{:keys [user] :as data} owner]
  (render
   [_]
   (dom/div
    {:class "container-fluid container-fluid-spacious"}
    (dom/div
     {:class "dashhead m-t-md"}
     (dom/h6
       {:class "dashhead-subtitle"}
       "Repositories")
     (dom/h2 "Followed Repos")
     (om/build-all repo-owner-section (:followed-repos user))))))

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
