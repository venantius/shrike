(ns shrike.core
  (:require [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]
            [shrike.component.navbar :as navbar]
            [shrike.event :as event]
            [shrike.init :as init]
            [shrike.routes]
            [shrike.state :refer [app-state]]
            [shrike.view.inner.dashboard :as dashboard]
            [shrike.view.outer.landing :as landing]
            [shrike.view.inner.owner.repo :as repo-view]
            [shrike.view.inner.owner.repo.build :as build-view]
            [shrike.view.inner.repo :as repo]
            [shrike.view.inner.user.repo.add :as add-repo-view]))

(.log js/console "Successfully loaded shrike Frontend")

(defcomponent app-body
  [{:keys [view] :as data} owner]
  (render
   [_]
    ;; Don't let this be a body tag! Otherwise BAD THINGS happen.
   (dom/div
    (om/build navbar/navbar data)
    (condp = view
      ;; outer
      "landing"         (om/build landing/outer data)

      ;; inner
      "dashboard"       (om/build dashboard/dashboard data)
      "add-repo"        (om/build add-repo-view/add-repo-view data)
      "repo-list"       (om/build repo/followed-repo-list data)
      "build-summary"   (om/build build-view/build-summary data)
      (dom/h1 "nomatch"))))
  ;; Need these for the Chart.js charts. Former in dev, latter in prod.
  (did-mount
   [_]
   (event/trigger-chart-redraw))
  (did-update
   [_ _ _]
   (event/trigger-chart-redraw)))

(om/root
 app-body
 app-state
 {:target (. js/document (getElementById "my-app"))})

(init/init)
