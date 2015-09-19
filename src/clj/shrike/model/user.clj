(ns shrike.model.user
  "Core user namespace."
  (:refer-clojure :exclude [update])
  (:require [korma.core :refer :all]
            [schema.core :as s]
            [shrike.model :as db]
            [shrike.model.github.user :as gh-user]
            [titan.model :refer [defmodel]]))

(defmodel db/user
  {(s/optional-key :id) s/Int
   (s/optional-key :repo_build_id) s/Int
   (s/optional-key :github_repo_id) s/Int
   (s/optional-key :github_commit_it) s/Int
   (s/optional-key :lines_of_code) s/Int
   (s/optional-key :definitions) s/Int})

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
      (create-user!
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
