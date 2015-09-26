(ns shrike.routes
  (:require [secretary.core :as secretary :refer-macros [defroute]]
            [accountant.core :as accountant]
            [om.core :as om]
            [shrike.api.build :as build]
            [shrike.api.user.repo :as repo]
            [shrike.event :as event]
            [shrike.state :refer [app-state]]))

(defroute dashboard "/" {}
  (swap! app-state assoc :view "dashboard")
  (repo/get-followed-repos))

(defroute repo-list "/user/repos" {:as params}
  (swap! app-state assoc :view "repo-list")
  (repo/get-followed-repos))

(defroute add-repos "/user/repos/add" {:as params}
  (swap! app-state assoc :view "add-repo")
  (repo/get-github-repos))

(defroute repo-dashboard "/gh/:username/:repo"
  {:keys [repo username] :as params}
  (build/get-build username repo)
  (swap! app-state assoc :view "dashboard"))

(defroute build-summary "/gh/:username/:repo/:build_id"
  {:keys [repo username] :as params}
  (build/get-build username repo)
  (swap! app-state assoc :view "build-summary"))

(secretary/dispatch! (.-pathname (.-location js/window)))

(accountant/configure-navigation!)
