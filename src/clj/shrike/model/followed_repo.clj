(ns shrike.model.followed-repo
  (:require [korma.core :as k]
            [schema.core :as s]
            [shrike.model :as db]
            [titan.model :refer [defmodel]]))

(def followed-repo-schema
  {(s/optional-key :user_id) s/Int
   (s/optional-key :github_repo_id) s/Int})

(defmodel db/followed-repo)

(defn fetch-with-full-repo-info
  [fr]
  (k/select
   db/followed-repo
   (k/fields [:github_repo_id :id])
   (k/where fr)
   (k/with db/github-repo
           (k/fields :name :full_name)
           (k/order :full_name :DESC)
           (k/with
            db/github-user
            (k/order :login :DESC)
            (k/fields [:login :owner])))))
