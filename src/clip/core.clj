(ns clip.core
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer :all]
            [ring.middleware.reload :refer [wrap-reload]]
            [titan.server :as server]))

(defroutes app-routes
  (GET "/" [] {:status 200 :body "Butts." :headers {"content-type" "text/plain"}})
  (route/resources "/" {:root "public"})
  (route/not-found "Whoops! Y'all found some shit that don't exist!"))

(def site
  (wrap-reload (wrap-defaults #'app-routes site-defaults)))

(defn -main
  []
  (server/run-server site nil))
