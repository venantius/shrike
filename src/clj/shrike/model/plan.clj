(ns shrike.model.plan
  "Shrike payment plans/accounts."
  (:require [korma.core :as sql]
            [schema.core :as s]
            [shrike.model :as db]
            [shrike.service.aws.sqs :as sqs]
            [titan.model :refer [defmodel]]))

(def plan-schema
  {(s/optional-key :id) s/Int
   (s/optional-key :user_id) s/Int
   :plan_type s/Str
   :queue_url s/Str})

(defmodel db/plan)

(defn create-plan-with-sqs-queue!
  [plan]
  (let [plan (create-plan! plan)
        queue (sqs/create-queue (format "plan-%s" (:id plan)))]
    (update-plan! (:id plan) (assoc plan :queue_url (:queue-url queue)))))

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
