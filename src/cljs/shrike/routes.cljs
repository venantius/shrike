(ns shrike.routes
  (:require [secretary.core :as secretary :refer-macros [defroute]]
            [accountant.core :as accountant]
            [om.core :as om]
            [shrike.api.build :as build]
            [shrike.api.user.repo :as repo]
            [shrike.event :as event]
            [shrike.state :refer [app-state update-repo]]
            [shrike.user :as user]))

(defroute root "/" {}
  (when (user/logged-in?)
    (swap! app-state assoc :view "dashboard")
    (repo/get-followed-repos))
  (when-not (user/logged-in?)
    (swap! app-state assoc :view "landing")))

(defroute repo-list "/user/repos" {:as params}
  (swap! app-state assoc :view "repo-list")
  (repo/get-followed-repos))

(defroute add-repos "/user/repos/add" {:as params}
  (swap! app-state assoc :view "add-repo")
  (repo/get-github-repos))

(defroute repo-dashboard "/gh/:username/:repo"
  {:keys [repo username] :as params}
  (build/get-builds username repo)
  (update-repo username repo)
  (swap! app-state assoc :view "dashboard"))

(defroute build-summary "/gh/:username/:repo/build/:build_id"
  {:keys [repo username build_id] :as params}
  (update-repo username repo)
  (build/get-build username repo build_id)
  (swap! app-state assoc :view "build-summary"))

(defroute build-coverage "/gh/:username/:repo/build/:build_id/coverage"
  {:keys [repo username build_id] :as params}
  (update-repo username repo)
  (build/get-build username repo build_id)
  (swap! app-state assoc :view "build-coverage"))

(defroute build-style "/gh/:username/:repo/build/:build_id/style"
  {:keys [repo username build_id] :as params}
  (update-repo username repo)
  (build/get-build username repo build_id)
  (swap! app-state assoc :view "build-style"))

(accountant/configure-navigation!)

(accountant/dispatch-current!)
