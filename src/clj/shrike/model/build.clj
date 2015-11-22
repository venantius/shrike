(ns shrike.model.build
  (:refer-clojure :exclude [update])
  (:require [clojure.tools.logging :as log]
            [korma.core :as k]
            [korma.db :as database]
            [schema.core :as s]
            [shrike.model :as db]
            [titan.model :refer [defmodel]]))

(defmodel db/build
  {(s/optional-key :id) s/Int
   (s/optional-key :repo_build_id) s/Int
   (s/optional-key :github_repo_id) s/Int
   (s/optional-key :github_head_commit_id) s/Int
   (s/optional-key :started_at) s/Inst
   (s/optional-key :finished_at) s/Inst
   (s/optional-key :status) s/Str
   (s/optional-key :lines_of_code) s/Int
   (s/optional-key :definitions) s/Int
   (s/optional-key :coverage) s/Num})

(defn fetch-one-by-username-and-repo
  [user repo build_id]
  (first
   (k/select
    db/build
    (k/fields [:repo_build_id :build_id] :started_at :status :coverage :lines_of_code)
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

;; TODO -- is this even used? how is this ordered? `:build_id` isn't real.
(defn fetch-by-username-and-repo
  [user repo]
  (k/select
   db/build
   (k/order :build_id :DESC)
   (k/fields [:repo_build_id :build_id] :started_at :status :coverage :lines_of_code)
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

(defn fetch-latest
  "Grab the latest build for a given repo."
  [repo-id]
  (first
   (k/select
    db/build
    (k/order :repo_build_id :DESC)
    (k/where {:github_repo_id repo-id})
    (k/limit 1))))

(defn create-from-push-hook
  "Create a build record from a GitHub webhook"
  [{:keys [repository] :as params}
   head-commit]
  (database/transaction
   (let [{:keys [repo_build_id] :as latest} (fetch-latest (:id repository))]
     (create-build! {:repo_build_id (if repo_build_id
                                      (inc repo_build_id)
                                      1)
                     :github_repo_id (:id repository)
                     :github_head_commit_id (:id head-commit)}))))
