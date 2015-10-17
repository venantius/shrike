(ns shrike.routes
  (:require [clojure.tools.logging :as log]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [environ.core :as env]
            [ring.middleware.json :refer [wrap-json-body wrap-json-response]]
            [ring.util.response :as response]
            [shrike.controller.auth :refer [csrf-token logout]]
            [shrike.controller.github.user.repo :as gh-repo]
            [shrike.controller.oauth.github :as gh-oauth]
            [shrike.controller.user.repo :as repo]
            [shrike.controller.user.repo.build :as build]
            [titan.middleware.auth :as auth]))

(defn debug [request]
  (log/info (str request))
  {:status 200
   :headers {"Content-Type" "application/json"}
   :body (dissoc request :body :server-exchange)})

(defn spa
  []
  (response/header
   (response/resource-response "index.html" {:root "public"})
   "Content-Type" "text/html; charset=utf-8"))

(defroutes site-routes
  (GET    "/logout" [] logout)
  (GET    "/oauth/github/login" [] gh-oauth/redirect)
  (GET    "/oauth/github/callback" [] gh-oauth/callback)
  (rfn request
    (when (auth/matches-any-path?
           ["/"
            "/user/repos"
            "/user/repos/add"

            "/gh/:username/:repo"
            "/gh/:username/:repo/build/:build_id"
            "/gh/:username/:repo/build/:build_id/coverage"
            "/gh/:username/:repo/build/:build_id/style"]
           request)
      (spa))))

(defroutes api-routes
  (context "/api/:username/:repo/build" []
    (GET    "/:build_id"  [] build/get)
    (GET    "/"           [] build/list))

  (context "/api/user/repo" []
    (GET    "/"    [] repo/list)
    (POST   "/"    [] repo/create!)
    (DELETE "/:id" [] repo/delete!))

  (GET    "/api/github/user/repo"                [] gh-repo/list))

(defroutes app-routes
  (wrap-json-body
    (wrap-json-response api-routes)
    {:keywords? true})

  (GET    "/debug" [] (wrap-json-response debug))

  ;; not whitelisted
  (GET    "/secure-debug" [] (wrap-json-response debug))

  ;; needs
  (GET    "/user/csrf-token" [] csrf-token)

  site-routes
  (route/resources "/")
  (route/not-found "WHoops"))

;; Not protected by CSRF
(defroutes webhook-routes
  (POST "/webhooks/github" [] (wrap-json-response debug)))
