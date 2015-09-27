(ns shrike.core
  (:gen-class)
  (:require [clojure.tools.logging :as log]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [environ.core :as env]
            [ring.middleware.defaults :refer :all]
            [ring.middleware.json :refer [wrap-json-body wrap-json-response]]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.middleware.session.cookie :refer [cookie-store]]
            [ring.util.response :as response]
            [shrike.auth :refer [auth-fn]]
            [shrike.controller.auth :refer [csrf-token]]
            [shrike.controller.oauth.github :as gh-oauth]
            [shrike.controller.github.user.repo.build :as build]
            [shrike.controller.github.user.repo :as gh-repo]
            [shrike.controller.user.repo :as repo]
            [titan.middleware.auth :as auth]
            [titan.server :as server]))

(defn spa
  []
  (response/header
   (response/resource-response "index.html" {:root "public"})
   "Content-Type" "text/html; charset=utf-8"))

(def site-paths
  ["/"
   "/user/repos"
   "/user/repos/add"

   "/gh/:username/:repo"
   "/gh/:username/:repo/:build_id"])

;; TODO: Move me into a controller
(defn logout
  [req]
  {:body ""
   :headers {"Content-Type" "text/html; charset: utf-8"}
   :status 200
   :session nil
   :cookies {"id" {:value "" :max-age 0 :path "/"}}})

(defn debug [request]
  (log/info (str request))
  {:status 200
   :headers {"Content-Type" "application/json"}
   :body (dissoc request :body)})

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

     (= path "/logout")
     (= path "/oauth/github/login")
     (= path "/oauth/github/callback")

     (= path "/debug"))
    true
    :else false))

(defroutes api-routes
  (GET    "/api/:username/:repo/build/:build_id" [] build/get)
  (GET    "/api/:username/:repo/build"           [] build/list)

  (GET    "/api/github/user/repo"                [] gh-repo/list)
  (GET    "/api/user/repo"                       [] repo/list)
  (POST   "/api/user/repo"                       [] repo/create!)
  (DELETE "/api/user/repo/:id"                   [] repo/delete!))

(defroutes site-routes
  (rfn request
    (when (auth/matches-any-path? site-paths request)
      (spa))))

(defroutes app-routes
  (wrap-defaults (wrap-json-body (wrap-json-response api-routes) {:keywords? true}) api-defaults)
  site-routes

  (GET    "/debug" [] (wrap-json-response debug))

  ;; not whitelisted
  (GET    "/secure-debug" [] (wrap-json-response debug))

  (GET    "/user/csrf-token" [] csrf-token)

  (GET    "/logout" [] logout)
  (GET    "/oauth/github/login" [] gh-oauth/redirect)
  (GET    "/oauth/github/callback" [] gh-oauth/callback)

  (route/resources "/")
  (route/not-found "Whoops! Y'all found some shit that don't exist!"))

(def app
  (wrap-reload
   (wrap-defaults
    (auth/wrap-authentication
     #'app-routes
     auth-fn
     :whitelist route-whitelist-fn)
    (assoc
     site-defaults
     :session
     {:store (cookie-store {:key (env/env :session-key)})}))))

(defn -main
  []
  (server/run-server #'app nil))
