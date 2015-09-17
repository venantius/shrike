(ns shrike.service.github
  "All sorts of non-model GitHub functions."
  (:require [tentacles.users :as users]))

(defn auth-map
  "Format the access token the way Tentacles expects"
  [{:keys [token] :as user}]
  {:pre [(some? token)]}
  {:oauth-token token})

(defn me
  "Retrieve info on the current user."
  [user]
  (users/me (auth-map user)))
