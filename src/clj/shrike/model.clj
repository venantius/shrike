(ns shrike.model
  "Database entities."
  (:require [korma.core :refer [defentity
                                table]]))

(defentity user
  (table :shrike.user :user))

(defentity github-oauth-state
  (table :github.oauth_state :github-oauth-state))

(defentity github-access-token
  (table :github.access_token :github-access-token))

(defentity github-user
  (table :github.user :github-user))
