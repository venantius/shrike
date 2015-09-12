(ns titan.server.nrepl
  "Logic for starting an nREPL server if we're in development mode."
  (:require [clojure.tools.logging :as log]
            [clojure.tools.nrepl.middleware.render-values :refer [render-values]]
            [clojure.tools.nrepl.server :as nrepl]))

(defn start-server
  ([]
   (start-server {}))
  ([{:keys [port]
    :or {port 7002}
    :as opts}]
    (log/infof "Starting nREPL server on port %s..." port)
    #_(nrepl/start-server :port port)))
