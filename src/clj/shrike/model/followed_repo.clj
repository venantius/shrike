(ns shrike.model.followed-repo
  (:require [korma.core :as k]
            [schema.core :as s]
            [shrike.model :as db]
            [titan.model :refer [defmodel]]))

(defmodel db/followed-repo
  {(s/optional-key :user_id) s/Int
   (s/optional-key :github_repo_id) s/Int})

(defn fetch-with-full-repo-info
  [fr]
  (k/select
    db/followed-repo
    (k/where fr)
    (k/with db/github-repo
      (k/fields :name)
      (k/with
        db/github-user
        (k/fields :login)))))
