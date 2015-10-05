(ns shrike.nav
  (:require [accountant.core :as accountant]
            [goog.string :as string]))

;; preserved as an example for now
(defn go-to-repo-dashboard!
  [username repo]
  (accountant/navigate!
   (string/format "/gh/%s/%s" username repo)))

(defn go-to-build-summary-page!
  [username repo build_id]
  (accountant/navigate!
    (string/format "/gh/%s/%s/build/%s" username repo build_id)))

(defn go-to-build-coverage-page!
  [username repo build_id]
  (accountant/navigate!
    (string/format "/gh/%s/%s/build/%s/coverage" username repo build_id)))

(defn go-to-build-style-page!
  [username repo build_id]
  (accountant/navigate!
    (string/format "/gh/%s/%s/build/%s/style" username repo build_id)))
