(ns titan.server
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [clojure.tools.logging :as log]
            [ring.middleware.reload :refer [wrap-reload]]
            [titan.db :as db]
            [titan.server.nrepl :as nrepl]))

(def server (atom nil))

(defn run-server
  [app {:keys [port] :or {port 5000} :as opts}]
  (db/set-korma-db)
  (nrepl/start-server)
  (when (nil? @server)
    (log/infof "Starting Titan server on port %s..." port)
    (reset! server (run-jetty app {:port port}))))
