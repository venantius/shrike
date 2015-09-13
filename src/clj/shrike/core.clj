(ns shrike.core
  (:gen-class)
  (:require [clojure.tools.logging :as log]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer :all]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.util.response :as resp]
            [shrike.controller.oauth.github :as gh-oauth]
            [titan.middleware.auth :as auth]
            [titan.server :as server]))

(defn spa
  []
  (resp/header
   (resp/resource-response "index.html" {:root "public"})
   "Content-Type" "text/html; charset=utf-8"))

(def site-paths
  ["/"
   "/about"
   "/order-history"
   "/fluid"
   "/pricing"])

(defroutes site-routes
  (rfn request
    (when (auth/matches-any-path? site-paths request)
      (spa))))

(defroutes app-routes
  ; api-routes
  site-routes

  (GET    "/oauth/github/login" [] gh-oauth/redirect)
  (GET    "/oauth/github/callback" [] gh-oauth/callback)

  (route/resources "/")
  (route/not-found "Whoops! Y'all found some shit that don't exist!"))

(def app
  (wrap-reload (wrap-defaults #'app-routes site-defaults)))

(defn -main
  []
  (server/run-server app nil))
