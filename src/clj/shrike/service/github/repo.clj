(ns shrike.service.github.repo
  (:require [shrike.service.github :refer [auth-map]]
            [tentacles.repos :as repos]))

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
