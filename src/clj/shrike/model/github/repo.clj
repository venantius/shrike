(ns shrike.model.github.repo
  (:require [schema.core :as s]
            [shrike.model :as db]
            [titan.model :refer [defmodel]]))

(defmodel db/github-repo
  {(s/optional-key :id) s/Int
   (s/optional-key :owner_id) s/Int
   (s/optional-key :name) s/Str
   (s/optional-key :private) s/Bool
   (s/optional-key :fork) s/Bool})
