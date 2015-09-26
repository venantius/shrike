(ns shrike.init
  "Initialization of application state"
  (:require [shrike.api.auth :as auth]
            [shrike.api.user.repo :as repo]))

(defn init
  []
  (auth/get-csrf-token)
  (repo/get-followed-repos))
