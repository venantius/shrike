(ns shrike.service.github.repo.git
  "Functions for working with git objects (e.g. commits, references, etc.)"
  (:require [shrike.service.github :refer [auth-map]]
            [tentacles.data :as git]))

(defn commit
  "Get a GitHub commit object. Takes a github username (the owner), the github
  repo name, a sha, and the authenticated user."
  [owner repo sha user]
  (git/commit owner repo sha (auth-map user)))
