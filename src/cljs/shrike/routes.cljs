(ns shrike.routes
  (:require [secretary.core :as secretary :refer-macros [defroute]]
            [accountant.core :as accountant]
            [om.core :as om]
            [shrike.api.build :as build]
            [shrike.api.user.repo :as repo]
            [shrike.event :as event]
            [shrike.state :refer [app-state]]
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
  (swap! app-state assoc :repo {:org username :name repo})
  (swap! app-state assoc :view "dashboard"))

(defroute build-summary "/gh/:username/:repo/:build_id"
  {:keys [repo username build_id] :as params}
  (build/get-build username repo build_id)
  (swap! app-state assoc :repo {:org username :name repo})
  (swap! app-state assoc :view "build-summary"))

(secretary/dispatch! (.-pathname (.-location js/window)))

(accountant/configure-navigation!)
