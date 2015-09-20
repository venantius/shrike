(ns shrike.model.build
  (:refer-clojure :exclude [update])
  (:require [korma.core :as k]
            [schema.core :as s]
            [shrike.model :as db]
            [titan.model :refer [defmodel]]))

(defmodel db/build
  {(s/optional-key :id) s/Int
   (s/optional-key :repo_build_id) s/Int
   (s/optional-key :github_repo_id) s/Int
   (s/optional-key :github_commit_id) s/Int
   (s/optional-key :started_at) s/Inst
   (s/optional-key :finished_at) s/Inst
   (s/optional-key :status) s/Str
   (s/optional-key :lines_of_code) s/Int
   (s/optional-key :definitions) s/Int})

(defn fetch-one-by-username-and-repo
  [user repo build_id]
  (first
   (k/select
    db/build
    (k/fields [:repo_build_id :build_id] :started_at :status)
    (k/where {:repo_build_id build_id})
    (k/with
     db/github-repo
     (k/fields [:name])
     (k/where {:name repo})
     (k/with
      db/github-user
      (k/fields [:login :owner])
      (k/where {:login user})))
    (k/with
     db/github-commit
     (k/fields :sha :message)))))

(defn fetch-by-username-and-repo
  [user repo]
  (k/select
   db/build
   (k/fields [:repo_build_id :build_id] :started_at :status)
   (k/with
    db/github-repo
    (k/fields [:name])
    (k/where {:name repo})
    (k/with
     db/github-user
     (k/fields [:login :owner])
     (k/where {:login user})))
   (k/with
    db/github-commit
    (k/fields :sha :message))))
