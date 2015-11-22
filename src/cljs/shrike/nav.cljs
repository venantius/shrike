(ns shrike.nav
  (:require [accountant.core :as accountant]
            [goog.string :as string]))

;; preserved as an example for now
(defn repo-dashboard
  [username repo]
  (string/format "/gh/%s/%s" username repo))

(defn build-summary-page
  [username repo build_id]
  (string/format "/gh/%s/%s/build/%s" username repo build_id))

(defn build-coverage-page
  [username repo build_id]
  (string/format "/gh/%s/%s/build/%s/coverage" username repo build_id))

(defn build-style-page
  [username repo build_id]
  (string/format "/gh/%s/%s/build/%s/style" username repo build_id))
