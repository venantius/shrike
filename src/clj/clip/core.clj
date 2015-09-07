(ns clip.core
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer :all]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.util.response :as resp]
            [titan.server :as server]))

(defroutes app-routes
  (GET "/" [] (resp/file-response "index.html" {:root "public"}))
  (route/resources "/" {:root "public"})
  (route/not-found "Whoops! Y'all found some shit that don't exist!"))

(def site
  (wrap-reload (wrap-defaults #'app-routes site-defaults)))

(defn -main
  []
  (server/run-server site nil))
