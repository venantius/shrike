(ns shrike.view.dashboard
  "Dashboard - the main view for logged-in users."
  (:require [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]
            [shrike.nav :as nav]
            [shrike.view.owner.repo :as owner-repo]
            [shrike.view.repo :as repo]))

(defcomponent repo
  [{:keys [owner name] :as data} owner]
  (render
   [_]
   (dom/li
     (dom/a
     {:role "button"
      :on-click #(nav/go-to-repo-dashboard! owner name)}
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
         (first data)))
     (om/build-all repo (second data))
     (dom/li
       {:class "nav-divider"}))))

(defn yo
  [coll repo]
  (update coll  (:owner repo) conj repo))


(defcomponent dashboard
  [{:keys [user] :as data} owner]
  (render
   [_]
   (dom/div
     {:class "container-fluid container-fluid-spacious"}
     (dom/div
       {:class "dashhead m-t-md"}
       (dom/h6
         {:class "dashhead-subtitle"}
         "Shrike")
       (dom/h2
         "Dashboard"))
     (dom/div
       {:class "hr-divider m-b"}
       (dom/h3
         {:class "hr-divider-content hr-divider-heading"}
         "Build list"))
     (dom/div
       {:class "row"}
       (dom/div
         {:class "col-md-3"}
         (dom/div
           {:class "p-l-0 well p-r-md"
            :style {:background-color "#252830"}}
           (om/build-all repo-sidebar (reduce yo {} (:followed-repos user)))
           (dom/ul
             {:class "nav nav-bordered nav-stacked"}
            (dom/li
              (dom/a
                {:href "/user/repos/add"}
                "Add new repo "
                (dom/span
                  {:class "icon icon-circle-with-plus"}))))))
      (dom/div
        {:class "col-md-9"}
        (om/build owner-repo/repo-build-history data))))))
