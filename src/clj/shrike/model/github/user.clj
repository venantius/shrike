(ns shrike.model.github.user
  "Functions for working with GitHub users"
  (:refer-clojure :exclude [update])
  (:require [clojure.tools.logging :as log]
            [korma.core :refer :all]
            [shrike.model :as db]
            [shrike.model.github.access-token :as access-token]
            [shrike.service.github :as github]
            [titan.model :refer [defmodel]]
            [schema.core :as s]))

(defmodel db/github-user
  {(s/optional-key :id) s/Int
   (s/optional-key :access_token_id) s/Int
   (s/optional-key :login) s/Str})

(defn fetch-or-create-from-access-token!
  [{:keys [token] :as at}]
  (let [{:keys [id login type] :as gh-user} (github/me {:token token})]
    (if-let [maybe-user (fetch-one-github-user {:id id})]
      maybe-user
      (create-github-user!
       {:id id
        :login login
        :type type}))))

(defn fetch-one-github-user-with-access-token
  [gh-user]
  (first
   (select db/github-user
           (with db/github-access-token
                 (fields [:token]))
           (where gh-user))))
