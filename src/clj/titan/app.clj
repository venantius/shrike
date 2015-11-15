(ns titan.app
  (:require [compojure.core :as compojure]))

(def app (atom {}))

(defn- intern-app
  [args]
  (reset! app args))

(defmacro defapp
  [& body]
  `(#'intern-app (compojure/routes ~@body)))
