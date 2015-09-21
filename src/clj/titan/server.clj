(ns titan.server
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [clojure.tools.logging :as log]
            [ring.middleware.reload :refer [wrap-reload]]
            [titan.db :as db]
            [titan.server.nrepl :as nrepl]))

(defonce server (atom nil))

(defn run-server
  "Start the Titan server."
  [app {:keys [port] :or {port 5000} :as opts}]
  (db/set-korma-db)
  (nrepl/start-server)
  (if (nil? @server)
    (do
      (log/infof "Starting Titan server on port %s..." port)
      (reset! server (run-jetty app {:join? false
                                     :port port})))
    (log/error "The Titan server is already running. To restart the server,"
               "use `titan.server/restart`")))

(defn restart-server
  "Restart the Titan server."
  []
  (.stop @server)
  (.start @server))
