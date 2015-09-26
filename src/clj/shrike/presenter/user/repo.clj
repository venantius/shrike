(ns shrike.presenter.user.repo
  (:refer-clojure :exclude [list])
  (:require [shrike.model.followed-repo :as followed-repo]))

#_(defn make-login-the-key
    [coll repo]
    (update coll (:login repo) conj repo))

(defn list
  [user]
  (let [results (followed-repo/fetch-with-full-repo-info {:user_id (:id user)})]
    results))
