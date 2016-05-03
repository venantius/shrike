(ns shrike.core
  (:gen-class)
  (:require [clojure.tools.logging :as log]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [environ.core :as env]
            [ring.middleware.defaults :refer [api-defaults
                                              site-defaults
                                              wrap-defaults]]
            [ring.middleware.session.cookie :refer [cookie-store]]
            [ring.middleware.reload :refer [wrap-reload]]
            [shrike.auth :refer [auth-fn]]
            [shrike.routes :as routes]
            [titan.app :refer [defapp]]
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
      ;; TODO: Move this later
     (.startsWith path "/theme-dashboard")

     (= path "/about")
     (= path "/pricing")

     (= path "/login")
     (= path "/logout")
     (= path "/oauth/github/login")
     (= path "/oauth/github/callback")

     (= path "/debug"))
    true
    :else false))

(def shrike-app
  (-> #'routes/app-routes
      (auth/wrap-authentication
       auth-fn
       :whitelist route-whitelist-fn)
      (wrap-defaults
       (assoc site-defaults
              :session
              {:store (cookie-store {:key (env/env :session-key)})}))
      (wrap-reload)))

(defapp
  (routes
   routes/webhook-routes
   shrike-app))

(defn -main
  []
  (server/start-server!))
