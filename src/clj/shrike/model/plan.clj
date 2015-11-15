(ns shrike.model.plan
  "Shrike payment plans/accounts."
  (:refer-clojure :exclude [update])
  (:require [korma.core :as sql]
            [schema.core :as s]
            [shrike.model :as db]
            [shrike.service.aws.sqs :as sqs]
            [titan.model :refer [defmodel]]))

(defmodel db/plan
  {(s/optional-key :id) s/Int
   (s/optional-key :user_id) s/Int})

(defn fetch-best-plan-for-repo
  [repo]
  (sql/select
    db/plan
    (sql/with db/user
      (sql/with db/followed-repo
        (sql/with db/github-repo
          (sql/where repo))))))
