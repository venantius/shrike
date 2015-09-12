(ns shrike.core
  (:gen-class)
  (:require [clojure.tools.logging :as log]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer :all]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.util.response :as resp]
            [shrike.controller.oauth.github :as gh-oauth]
            [titan.server :as server]))

(defn spa
  [req]
  (log/warn "Index page requested")
  (resp/header
   (resp/resource-response "index.html" {:root "public"})
   "Content-Type" "text/html; charset=utf-8"))

(defroutes app-routes
  (GET "/" [] spa)

  (GET    "/oauth/github/login" req (gh-oauth/redirect req))
  (GET    "/oauth/github"                [] gh-oauth/callback)

  (route/resources "/")
  (route/not-found "Whoops! Y'all found some shit that don't exist!"))

(def app
  (wrap-reload (wrap-defaults #'app-routes site-defaults)))

(defn -main
  []
  (server/run-server app nil))
