(ns shrike.routes
  (:require [clojure.tools.logging :as log]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [api-defaults
                                              wrap-defaults]]
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
   :body (dissoc request :body)})

(defn spa
  []
  (response/header
   (response/resource-response "index.html" {:root "public"})
   "Content-Type" "text/html; charset=utf-8"))

(defroutes site-routes
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
  (wrap-defaults
   (wrap-json-body
    (wrap-json-response api-routes)
    {:keywords? true})
   api-defaults)
  site-routes

  (GET    "/debug" [] (wrap-json-response debug))
  (GET    "/login" [] {:status 200
                       :session {:id 2}
                       :cookies {"id" {:value 2 :path "/"}}})

  ;; not whitelisted
  (GET    "/secure-debug" [] (wrap-json-response debug))

  (GET    "/user/csrf-token" [] csrf-token)

  (GET    "/logout" [] logout)
  (GET    "/oauth/github/login" [] gh-oauth/redirect)
  (GET    "/oauth/github/callback" [] gh-oauth/callback)

  (route/resources "/")
  (route/not-found "Whoops! Y'all found some shit that don't exist!"))
