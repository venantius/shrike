(ns shrike.service.github
  "All sorts of non-model GitHub functions.

   Most functions take a Darg user that should have a :github_access_token
   key."
  (:require [tentacles.core :as t]
            [tentacles.repos :as repos]
            [tentacles.users :as users]))

(defn- auth-map
  "Format the access token the way Tentacles expects"
  [{:keys [github_access_token] :as user}]
  {:pre [(some? github_access_token)]}
  {:oauth-token github_access_token})

(defn user-repos
  "Retrieve this user's repositories."
  [user]
  (repos/repos (auth-map user)))

(defn repos
  "Retrieve all repos this user is involved with, including org repos they
   have access to."
  [user]
  (repos/repos
   (merge (auth-map user)
          {:accept "application/vnd.github.moondragon+json"
           :per-page 100
           :all-pages true})))

(defn me
  "Retrieve info on the current user."
  [user]
  (users/me (auth-map user)))
