(ns shrike.model
  "Database entities."
  (:refer-clojure :exclude [update])
  (:require [korma.core :refer :all]))

(declare followed-repo)

(defentity github-oauth-state
  (table :github.oauth_state :github-oauth-state))

(defentity github-access-token
  (table :github.access_token :github-access-token))

(defentity github-user
  (table :github.user :github-user)
  (belongs-to github-access-token))

(defentity github-repo
  (table :github.repo :github-repo)
  (belongs-to github-user {:fk :owner_id}))

(defentity github-commit
  (table :github.commit :github-commit))

(defentity build
  (table :shrike.build :build)
  (belongs-to github-repo {:fk :github_repo_id})
  (belongs-to github-commit {:fk :github_head_commit_id}))

(defentity user
  (table :shrike.user :user)
  (belongs-to github-access-token {:fk :github_access_token_id}))

(defentity followed-repo
  (table :shrike.followed_repo)
  (belongs-to user)
  (belongs-to github-repo {:fk :github_repo_id}))

(defentity plan
  (table :shrike.plan :plan)
  (belongs-to user {:fk :user_id}))
