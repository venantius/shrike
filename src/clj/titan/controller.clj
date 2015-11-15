(ns titan.controller
  (:require [schema.core :as s]))

(defn coerce
  [req opt]
  (println opt)
  req)

(defn wrap-type-coersion
  [f opts]
  (fn [req]
    (let [req (reduce coerce req opts)]
      (f req))))

(def controller-keys
  [:body
   :form-params
   :params
   :route-params
   :query-params])

(defmacro controller
  [args body opts]
  `(let [f# (fn ~args ~@body)
         opts# (select-keys ~opts controller-keys)]
     (wrap-type-coersion f# opts#)))

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
