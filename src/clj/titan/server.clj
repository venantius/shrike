(ns titan.server
  (:require [immutant.web :as web]
            [clojure.tools.logging :as log]
            [ring.middleware.reload :refer [wrap-reload]]
            [titan.db :as db]
            [titan.server.nrepl :as nrepl]))

(defonce server (atom nil))

(defn run-server
  "Start the Titan server."
  [app {:keys [host port] :or {host "localhost" port 5000} :as opts}]
  (db/set-korma-db)
  (nrepl/start-server)
  (if (nil? @server)
    (do
      (log/infof "Starting Titan server on port %s..." port)
      (reset! server (web/run app {:host host
                                   :port port})))
    (log/error "The Titan server is already running. To restart the server,"
               "use `titan.server/restart`")))

(defn restart-server
  "Restart the Titan server."
  []
  (let [server (web/server @server)]
    (log/info "Stopping Titan server...")
    (.stop server)
    (log/info "Stopped!")
    (log/info "Restarting Titan server...")
    (.start server)
    (log/info "Titan server re-started!")))
