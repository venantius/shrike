(ns shrike.core
  (:require [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]
            [shrike.component.navbar :as navbar]
            [shrike.routes]
            [shrike.state :refer [app-state]]
            [shrike.view.dashboard :as dashboard]
            [shrike.view.repo :as repo]))

(.log js/console "Successfully loaded shrike Frontend")

(defcomponent app-body
  [{:keys [view] :as data} owner]
  (render
    [_]
    ;; Don't let this be a body tag! Otherwise BAD THINGS happen.
    (dom/div
      (om/build navbar/navbar data)
      (condp = view
        "add-repo"        (om/build repo/add-repo-view data)
        "repo-list"       (om/build repo/followed-repo-list data)
        "repo-dashboard"  (om/build dashboard/dashboard-view data)
        (dom/h1 "nomatch")))))

(om/root
  app-body
  app-state
  {:target (. js/document (getElementById "my-app"))})
