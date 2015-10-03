(ns shrike.core
  (:gen-class)
  (:require [clojure.tools.logging :as log]
            [environ.core :as env]
            [ring.middleware.defaults :refer :all]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.middleware.session.cookie :refer [cookie-store]]
            [shrike.auth :refer [auth-fn]]
            [shrike.routes :as routes]
            [titan.middleware.auth :as auth]
            [titan.server :as server]))

(defn route-whitelist-fn
  "A function for whitelisting particular routes.

  Whitelists our major resource routes first, then some API routes."
  [path]
  (cond
    (or
     (= path "/")
     (.startsWith path "/css")
     (.startsWith path "/fonts")
     (.startsWith path "/images")
     (.startsWith path "/js")

     (= path "/about")
     (= path "/pricing")

     (= path "/login")
     (= path "/logout")
     (= path "/oauth/github/login")
     (= path "/oauth/github/callback")

     (= path "/debug"))
    true
    :else false))

(def app
  (wrap-reload
   (wrap-defaults
    (auth/wrap-authentication
     #'routes/app-routes
     auth-fn
     :whitelist route-whitelist-fn)
    (assoc
     site-defaults
     :session
     {:store (cookie-store {:key (env/env :session-key)})}))))

(defn -main
  []
  (server/run-server #'app nil))
