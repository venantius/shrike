(ns shrike.controller.github.user.repo.build
  (:refer-clojure :exclude [get list])
  (:require [clojure.tools.logging :as log]
            [shrike.model.build :as build]
            [titan.http.response :as response]))

(defn get
  [{:keys [params] :as req}]
  (let [{:keys [username repo build_id]} params
        build_id (read-string build_id)]
  (log/info username repo build_id)
  (response/ok
    (build/fetch-one-by-username-and-repo username repo build_id))))

(defn list
  [{:keys [params] :as req}]
  (let [{:keys [username repo]} params]
  (log/info username repo)
  (response/ok
    (build/fetch-by-username-and-repo username repo))))
