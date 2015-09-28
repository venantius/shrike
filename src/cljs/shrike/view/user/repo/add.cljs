(ns shrike.view.user.repo.add
  (:require [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]
            [shrike.api.user.repo :as repo-api]
            [shrike.state :refer [app-state]]))

(defn followed-repo-ids
  [r]
  (into #{} (map :id (:followed-repos (:user r)))))

(defn followed?
  [frids r]
  (frids (:id r)))

(defcomponent add-repo-view
  [data owner]
  (render
   [_]
   (dom/div
    {:class "container-fluid container-fluid-spacious"}
    (dom/div
     {:class "dashhead m-t-md"}
     (dom/h6
      {:class "dashhead-subtitle"}
      "Shrike")
     (dom/h2 "Add New Repo")
     (dom/div
      {:class "hr-divider m-b"}
      (dom/h3
       {:class "hr-divider-content hr-divider-heading"}
       "Repositories"))
     (dom/ul
      {:class "list-group"}
      (let [followed-repo-ids (followed-repo-ids data)]
        (if-not (:repo-list (:user data))
          (dom/h3 "Fetching repositories from GitHub...")
          (for [repo (:repo-list (:user data))]
            (dom/li
             {:class "list-group-item"}
             (:full_name repo)
             (if (followed? followed-repo-ids repo)
               (dom/button
                {:class "btn btn-xs btn-danger-outline pull-right"
                 :on-click #(repo-api/unfollow-repo repo)}
                "Stop following")
               (dom/button
                {:class "btn btn-xs btn-primary-outline pull-right"
                 :on-click #(repo-api/follow-new-repo repo)}
                "Follow")))))))))))
