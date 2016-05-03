(ns shrike.model.github.repo
  (:require [korma.core :as k]
            [schema.core :as s]
            [shrike.model :as db]
            [shrike.model.plan :as plan]
            [shrike.service.github.repo :as repo]
            [titan.model :refer [defmodel]]))

(def github-repo-schema
  {(s/optional-key :id) s/Int
   (s/optional-key :owner_id) s/Int
   (s/optional-key :name) s/Str
   (s/optional-key :private) s/Bool
   (s/optional-key :fork) s/Bool})

(defmodel db/github-repo)

(defn fetch-one-with-owner
  [repo]
  (first
   (k/select
    db/github-repo
    (k/with
     db/github-user
     (k/fields :login [:type :owner_type])))))

(defn enqueue-webhook
  [repo]
  (let [plan (plan/fetch-best-plan-for-repo repo)]))

;; How to find a plan?
;; a repo is followed by at least one user who has a paid plan
;; A plan is its own object that is stored in the database.

;; how does circle do this? Do they have you add a list of organizations you follow?
