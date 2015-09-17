(ns shrike.service.github.source
  "Functions for working with GitHub source.

  SECURITY ALERT:
  NO CLIENT SOURCE CODE SHOULD EVER BE STORED BY US IN A DATABASE, EVER. IF
  FOR SOME REASON THIS IS NOT UNAMBIGUOUS ENOUGH FOR YOU, TALK TO DAVID
  (DAVID@URSACORP.IO)"
  (:require [shrike.service.github :refer [auth-map]]
            [tentacles.repos :as repos]))

(defn get-contents
  "Retrieve up to 1MB worth of a file's contents."
  [owner-name repo-name filepath user]
  (repos/contents
   owner-name
   repo-name
   filepath
   (merge (auth-map user)
          {:accept "application/vnd.github.v3.raw"})))
