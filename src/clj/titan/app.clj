(ns titan.app
  (:require [compojure.core :as compojure]))

(defonce app (atom {}))

(defmacro defapp
  [& body]
  `(reset! app (compojure/routes ~@body)))
