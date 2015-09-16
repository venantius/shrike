(ns shrike.routes
  (:require [secretary.core :as secretary :refer-macros [defroute]]
            [accountant.core :as accountant]
            [shrike.state :refer [app-state]]))

(defroute "/" {}
  (swap! app-state assoc :view "/")
  (js/console.log "Dashboard view"))

(defroute "/repos" {:as params}
  (swap! app-state assoc :view "/repos")
  (js/console.log (str "User: " (:id params))))

(defroute "/code" {:as params}
  (swap! app-state assoc :view "/code")
  (js/console.log (str "User: " (:id params))))

(secretary/dispatch! (.-pathname (.-location js/window)))

(accountant/configure-navigation!)
