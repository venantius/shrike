(ns shrike.presenter.user.repo
  (:refer-clojure :exclude [list])
  (:require [shrike.model.followed-repo :as followed-repo]))

(defn list
  [user]
  (let [results (followed-repo/fetch-with-full-repo-info {:user_id (:id user)})]
    results))
