(ns shrike.api.build
  (:require [ajax.core :refer [GET]]
            [goog.string :refer [format]]
            [shrike.state :refer [app-state]]))

(defn get-builds
  [username repo]
  (GET
    (format "/api/%s/%s/build" username repo)
    {:response-format :json
     :keywords? true
     :handler (fn [r] (swap! app-state assoc-in [:repo :builds] r))}))

(defn force-get-build
  [username repo build-id]
  (GET
    (format "/api/%s/%s/build/%s" username repo build-id)
    {:response-format :json
     :keywords? true
     :handler (fn [r] (swap! app-state assoc-in [:repo :current-build] r))}))

(defn get-build
  [username repo build-id]
  (when-not
    (and
      (= (get-in @app-state [:repo :current-build :build_id]) (int build-id))
      (= (get-in @app-state [:repo :owner]) username)
      (= (get-in @app-state [:repo :name]) repo))
    (force-get-build username repo build-id)))
