(ns shrike.auth
  (:require [clojure.tools.logging :as log]
            [shrike.model.user :as user]))

(defn auth-fn
  "The Shrike authentication function."
  [{:keys [session] :as request}]
  (if-let [id (:id session)]
    (user/fetch-one-user-with-access-token {:id id})))
