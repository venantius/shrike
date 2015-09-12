(ns shrike.model.github.oauth-state
  "The 'state' field for the GitHub OAuth flow. Keeping track of this both
   lets us make sure that the OAuth flow isn't being spoofed."
  (:refer-clojure :exclude [update])
  (:require [shrike.model :as db]
            [titan.model :refer [defmodel]]
            [schema.core :as s]))

(defmodel db/github-oauth-state
  {(s/optional-key :id) s/Int
   (s/optional-key :state) s/Str})
