(ns shrike.routes
  (:require [secretary.core :as secretary :refer-macros [defroute]]
            [accountant.core :as accountant]
            [om.core :as om]
            [shrike.api.build :as build]
            [shrike.api.repo :as repo]
            [shrike.event :as event]
            [shrike.state :refer [app-state]]))

(defroute "/" {}
  (swap! app-state assoc :view "/")
  (js/console.log "Dashboard view"))

(defroute repo-list "/repos" {:as params}
  (swap! app-state assoc :view "repo-list")
  (repo/get-followed-repos))

(defroute add-repos "/repos/add" {:as params}
  (swap! app-state assoc :view "add-repo")
  (repo/get-github-repos))

(defroute repo-dashboard "/gh/:username/:repo"
  {:keys [repo username] :as params}
  (build/get-build username repo)
  (swap! app-state assoc :view "repo-dashboard"))

(defroute build-summary "/gh/:username/:repo/:build_id"
  {:keys [repo username] :as params}
  (build/get-build username repo)
  (swap! app-state assoc :view "build-summary"))

(defroute "/code" {:as params}
  (swap! app-state assoc :view "/code")
  (js/console.log (str "User: " (:id params))))

(secretary/dispatch! (.-pathname (.-location js/window)))

(accountant/configure-navigation!)
