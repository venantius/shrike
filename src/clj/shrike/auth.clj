(ns shrike.auth
  (:require [clojure.tools.logging :as log]
            [shrike.controller.auth :as auth]
            [shrike.model.user :as user]
            [titan.http.response :as resp]))

(defn auth-fn
  "The Shrike authentication function."
  [{:keys [session] :as request}]
  (if-let [id (:id session)]
    (user/fetch-one-user-with-access-token {:id id})))
