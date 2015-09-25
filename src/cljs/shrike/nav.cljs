(ns shrike.nav
  (:require [accountant.core :as accountant]
            [goog.string :as string]))

;; preserved as an example for now
(defn go-to-repo-dashboard!
  [username repo]
  (accountant/navigate!
   (string/format "/gh/%s/%s" username repo)))
