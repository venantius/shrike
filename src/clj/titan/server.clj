(ns titan.server
  (:require [aleph.http :as http]
            [clojure.tools.logging :as log]
            [ring.middleware.reload :refer [wrap-reload]]
            [titan.db :as db]))

(def server (atom nil))

(defn run-server
  [app {:keys [port] :as opts}]
  (titan.db/set-korma-db)
  (when (nil? @server)
    (log/info "Starting Titan server...")
    (reset! server (http/start-server app {:port 5000}))))
