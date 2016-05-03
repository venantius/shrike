(ns shrike.state
  "Application state goeth here."
  (:require [shrike.cookies :as cookies]))

(defonce app-state (atom {:user {:id (cookies/get "id")}}))

(defn update-repo
  "If the current repo is different from the below args, update the repo object."
  [owner repo]
  (when-not
   (and
    (= (get-in @app-state [:repo :owner]) owner)
    (= (get-in @app-state [:repo :name]) repo))
    (swap! app-state assoc :repo {:owner owner :name repo})))
