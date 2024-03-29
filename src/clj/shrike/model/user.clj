(ns shrike.model.user
  "Core user namespace."
  (:refer-clojure :exclude [update])
  (:require [clojure.tools.logging :as log]
            [korma.core :refer :all]
            [schema.core :as s]
            [shrike.model :as db]
            [shrike.model.github.user :as gh-user]
            [shrike.model.plan :as plan]
            [titan.model :refer [defmodel]]))

(def user-schema
  {(s/optional-key :id) s/Int
   (s/optional-key :repo_build_id) s/Int
   (s/optional-key :github_repo_id) s/Int
   (s/optional-key :github_commit_it) s/Int
   (s/optional-key :lines_of_code) s/Int
   (s/optional-key :definitions) s/Int})

(defmodel db/user)

(defn create-user-with-default-plan!
  [user]
  (let [user (create-user! user)]
    (plan/create-plan-with-sqs-queue! {:user_id (:id user)})
    user))

(defn fetch-user-with-show
  [user]
  (first
   (select db/user
           (where user)
           (limit 1)
           (with db/plan
                 (fields :queue_url :plan_type)))))

(defn create-or-update-from-access-token!
  "First, figure out which GitHub user this access token corresponds to. That
  user may need to be created in our database, or they may already exist.

  NOTE:
  Just because a GitHub user exists in our database does not mean there is a
  Shrike user for that account. This is because we keep track of the GitHub
  owners of the repositories."
  [at]
  (let [gh-user (gh-user/fetch-or-create-from-access-token! at)]
    (if-let [user (fetch-one-user {:github_user_id (:id gh-user)})]
      (update-user! (:id user)
                    {:github_access_token_id (:id at)})
      (create-user-with-default-plan!
       {:github_user_id (:id gh-user)
        :github_access_token_id (:id at)
        :name (:login gh-user)}))))

(defn fetch-one-user-with-access-token
  [user]
  (first
   (select db/user
           (with db/github-access-token
                 (fields [:token]))
           (where user))))
