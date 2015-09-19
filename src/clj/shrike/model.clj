(ns shrike.model
  "Database entities."
  (:refer-clojure :exclude [update])
  (:require [korma.core :refer :all]))

(defentity github-oauth-state
  (table :github.oauth_state :github-oauth-state))

(defentity github-access-token
  (table :github.access_token :github-access-token))

(defentity github-user
  (table :github.user :github-user)
  (belongs-to github-access-token))

(defentity github-repo
  (table :github.repo :github-repo))

(defentity github-commit
  (table :github.commit :github-commit))

(defentity build
  (table :shrike.build :build))

(defentity user
  (table :shrike.user :user)
  (belongs-to github-access-token {:fk :github_access_token_id}))
