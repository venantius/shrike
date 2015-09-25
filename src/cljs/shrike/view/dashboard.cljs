(ns shrike.view.dashboard
  "Dashboard - the main view for logged-in users."
  (:require [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]
            [shrike.nav :as nav]
            [shrike.view.owner.repo :as owner-repo]
            [shrike.view.repo :as repo]))

(defcomponent repo
  [{:keys [login name] :as data} owner]
  (render
   [_]
   (dom/li
     (dom/a
     {:role "button"
      :on-click #(nav/go-to-repo-dashboard! login name)}
     name))))

(defcomponent repo-sidebar
  [data owner]
  (render
   [_]
   (dom/ul
     {:class "nav nav-bordered nav-stacked"}
     (let [org-name (first data)]
       (dom/li
         {:class "nav-header"}
         (clj->js org-name)))
     (om/build-all repo (second data))
     (dom/li
       {:class "nav-divider"})
     (dom/li
       (dom/a
         {:href "/repos/add"}
         "Add new repo "
         (dom/span
           {:class "icon icon-circle-with-plus"}))))))

(defcomponent dashboard
  [{:keys [user] :as data} owner]
  (render
   [_]
   (dom/div
     {:class "container-fluid container-fluid-spacious"}
     (dom/div
       {:class "dashhead m-t-md m-l-md"})
    (dom/div
      {:class "col-md-2 p-l-0 well p-r-md"
       :style {:background-color "#252830"}}
      (om/build-all repo-sidebar (:followed-repos user)))
    (dom/div
      {:class "col-md-10"}
      (om/build owner-repo/repo-dashboard-statcards data)))))
