(ns shrike.auth
  (:require [shrike.state :refer [app-state]]))

(defn csrf-token
  []
  (-> @app-state :user :security :csrf-token))
