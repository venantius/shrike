(ns shrike.model.github.commit
  (:require [clojure.tools.logging :as log]
            [korma.core :as k]
            [shrike.model :as db]
            [schema.core :as s]
            [titan.model :refer [defmodel]]))

(defmodel db/github-commit
  {:id s/Int
   :repo_id s/Int
   :sha s/Str
   :message s/Str
   :author_name s/Str
   :author_login s/Str})

(defn create-or-fetch-from-push-event!
  "If this commit already exists, return it. Otherwise, create a new commit object."
  [repository
   {:keys [id message author] :as commit}]
  (if-let [found-commit (fetch-one-github-commit
                         {:repo_id (:id repository)
                          :sha id})]
    found-commit
    (create-github-commit! {:repo_id (:id repository)
                            :sha id
                            :message message
                            :author_name (:name author)
                            :author_login (:username author)})))
