(ns titan.controller
  (:require [schema.macros :as schema-macros]))

(defmacro controller
  [args body {:keys [query-params
                     path-params
                     body-params] :as opts}]
  (println opts)
  `(let [f# (fn ~args ~@body)]
     f#))

(defn- take-if
  [func form]
  (if (and (func (first form))
           (next form))
    [(first form) (next form)]
    [nil form]))

(defmacro defcontroller
  "Define a new controller.

  Controllers take additional arguments as metadata, which constructs
  parameter and output validation around them. For example:

  ```
  (defcontroller create!
    \"Description of the controller\"
    {:query-params 1
     :path-params 2}
    [request]
    {:status 200
     :body \"Okay!\"})
  ```"
  [name & body]
  (let [[docstring? body] (take-if string? body)
        [metadata body] (take-if map? body)
        [arglist body] [(first body) (next body)]]
    `(def ~(with-meta name (merge (meta name) (if docstring?
                                                (assoc metadata :doc docstring?)
                                                metadata)))
       (controller ~arglist ~body ~metadata))))
