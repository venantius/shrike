(ns shrike.state
  "Application state goeth here."
  (:require [shrike.cookies :as cookies]))

(defonce app-state (atom {:user {:id (cookies/get "id")}}))
