(ns shrike.model.github.access-token
  (:require [shrike.model :as db]
            [titan.model :refer [defmodel]]
            [korma.core :refer :all]
            [schema.core :as s]))

(defmodel db/github-access-token
  {(s/optional-key :id) s/Int
   (s/optional-key :gh_user_id) s/Int
   (s/optional-key :token) s/Str
   (s/optional-key :scope) s/Str})

(defn create-or-update-github-access-token!
  "Like it says on the tin. This sort of function is a little sloppy but it's
   helpful for keeping our GitHub OAuth controller clean."
  [{:keys [gh_user_id] :as at}]
  (if-let [maybe-at (fetch-one-github-access-token {:gh_user_id gh_user_id})]
    (update-github-access-token!
      (:id maybe-at)
      at)
    (create-github-access-token! at)))

