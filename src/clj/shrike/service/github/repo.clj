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

;; TODO - finish this
(defn create-webhook
  "Register a new webhook."
  [{:keys [login name] :as repo} user]
  (repos/create-hook
    login
    name
    "web"
    {:url "http://shrike-env.elasticbeanstalk.com/debug"
     :content_type :json
     :secret "alfalfa"}
    (auth-map user)))
