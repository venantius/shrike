(ns shrike.presenter.user.repo
  (:refer-clojure :exclude [list])
  (:require [shrike.model.followed-repo :as followed-repo]))

(defn yo
  [coll repo]
  (update coll (:login repo) conj repo))

(defn to-map
  [[owner repos]]
  {:login owner
   :repos repos})

(defn list
  [user]
  (let [results (followed-repo/fetch-with-full-repo-info {:user_id (:id user)})]
    (map to-map (reduce yo {} results))))
