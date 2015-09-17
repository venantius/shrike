(ns shrike.model.build
  (:refer-clojure :exclude [update])
  (:require [schema.core :as s]
            [shrike.model :as db]
            [titan.model :refer [defmodel]]))

(defmodel db/build
  {(s/optional-key :id) s/Int
   (s/optional-key :repo_build_id) s/Int
   (s/optional-key :github_repo_id) s/Int
   (s/optional-key :github_commit_id) s/Int
   (s/optional-key :lines_of_code) s/Int
   (s/optional-key :definitions) s/Int})
