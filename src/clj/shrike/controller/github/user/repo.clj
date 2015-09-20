(ns shrike.controller.github.user.repo
  (:refer-clojure :exclude [list]))

(defn list
  [{:keys [params] :as request}]
  {:status 200
   :body "Here's a list of stuff"
   }
  )
