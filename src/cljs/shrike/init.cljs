(ns shrike.init
  "Initialization of application state"
  (:require [shrike.api.auth :as auth]
            [shrike.api.user.repo :as repo]
            [shrike.user :as user]))

(defn init
  []
  (when (user/logged-in?)
    (auth/get-csrf-token)
    (repo/get-followed-repos)))
