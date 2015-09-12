(ns shrike.model.github.user
  "Functions for working with GitHub users"
  (:refer-clojure :exclude [update])
  (:require [shrike.model :as db]
            [shrike.model.github.access-token :as access-token]
            [shrike.service.github :as github]
            [titan.model :refer [defmodel]]
            [schema.core :as s]))

(defmodel db/github-user
  {(s/optional-key :id) s/Int
   (s/optional-key :access_token_id) s/Int
   (s/optional-key :login) s/Str})

(defn create-from-access-token!
  "Given a user with a valid GitHub access token, create a GitHub user
   record in our database."
  [{:keys [id token] :as at}]
  (let [me (github/me {:github_access_token token})]
    (create-github-user! {:access_token_id id
                          :login (:login me)})))
