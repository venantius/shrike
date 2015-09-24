(ns shrike.api.build
  (:require [ajax.core :refer [GET]]
            [goog.string :refer [format]]
            [shrike.state :refer [app-state]]))

(defn get-build
  [username repo]
  (GET
    (format "/api/%s/%s/build" username repo)
    {:response-format :json
     :keywords? true
     :handler (fn [r] (swap! app-state assoc-in [:repo :builds] r))}))
