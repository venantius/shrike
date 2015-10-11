(ns shrike.model.github.repo
  (:require [korma.core :as k]
            [schema.core :as s]
            [shrike.model :as db]
            [shrike.service.github.repo :as repo]
            [titan.model :refer [defmodel]]))

(defmodel db/github-repo
  {(s/optional-key :id) s/Int
   (s/optional-key :owner_id) s/Int
   (s/optional-key :name) s/Str
   (s/optional-key :private) s/Bool
   (s/optional-key :fork) s/Bool})

(defn fetch-one-with-owner
  [repo]
  (k/select
    db/github-repo
    (k/with
      db/github-user
      (k/fields :login [:type :owner_type]))))
