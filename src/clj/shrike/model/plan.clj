(ns shrike.model.plan
  "Shrike payment plans/accounts."
  (:require [korma.core :as sql]
            [schema.core :as s]
            [shrike.model :as db]
            [shrike.service.aws.sqs :as sqs]
            [titan.model :refer [defmodel]]))

(defmodel db/plan
  {(s/optional-key :id) s/Int
   (s/optional-key :user_id) s/Int})

(defn create-plan-with-sqs-queue!
  [plan]
  (let [plan (create-plan! plan)]
    (sqs/create-queue (format "plan-" (:id plan)))
    (update-plan! (:id plan) plan)))

(defn fetch-best-plan
  [repo]
  (sql/select
   db/plan
   (sql/with db/user)))

(defn fetch-best-plan-for-repo
  "Note: pre-condition is because this query fails on empty maps"
  [repo]
  {:pre [(not-empty repo)]}
  (sql/select
   db/plan
   (sql/with db/user
             (sql/with db/followed-repo
                       (sql/with db/github-repo
                                 (sql/where repo))))))
