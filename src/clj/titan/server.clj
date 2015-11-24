(ns titan.server
  (:require [immutant.web :as web]
            [clojure.tools.logging :as log]
            [environ.core :as env]
            [ring.middleware.reload :refer [wrap-reload]]
            [titan.app :as app]
            [titan.db :as db]
            [titan.server.nrepl :as nrepl]))

(defonce server (atom nil))

(defn start-server
  "Start the Titan server."
  []
  (let [host (or (env/env :host) "127.0.0.1")
        port (or (env/env :port) 5000)]
    (db/set-korma-db)
    (nrepl/start-server)
    (if (nil? @server)
      (do
        (log/infof "Starting Titan server on %s:%s..." host port)
        (reset! server (web/run @app/app {:host host
                                          :port port})))
      (log/error "The Titan server is already running. To restart the server,"
                 "use `titan.server/restart`"))))

(defn stop-server
  "Stop the Titan server."
  []
  (if-let [server (web/server @server)]
    (do
      (log/info "Stopping Titan server...")
      (.stop server)
      (log/info "Stopped!"))
    (log/error "Titan server is not currently running!")))

(defn restart-server
  "Restart the Titan server."
  []
  (let [server (web/server @server)]
    (stop-server)
    (log/info "Restarting Titan server...")
    (.start server)
    (log/info "Titan server re-started!")))
