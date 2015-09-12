(ns shrike.model
  "Database entities."
  (:require [korma.core :refer [defentity
                                table]]))

(defentity user
  (table :shrike.user :user))

(defentity github-access-token)
