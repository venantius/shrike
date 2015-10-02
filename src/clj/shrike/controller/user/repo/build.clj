(ns shrike.controller.user.repo.build
  (:refer-clojure :exclude [get list])
  (:require [clojure.tools.logging :as log]
            [shrike.model.build :as build]
            [titan.http.response :as response]))

;; TODO: Auth; can this user actually view details for this GH repo?
(defn get
  [{:keys [params] :as req}]
  (let [{:keys [username repo build_id]} params
        build_id (read-string build_id)]
    (cond
      (not (and username repo build_id))
      (response/bad-request
        "Request must include 'username', 'repo', and 'build_id'")
      :else
      (if-let [build (build/fetch-one-by-username-and-repo username repo build_id)]
        (response/ok build)
        (response/not-found "No such build exists.")))))

;; TODO: Auth: how does CircleCI handle this? Can I view the build page for a repo I'm authorized to see but not following? Are they just routing this call through the GitHub API?
(defn list
  [{:keys [params] :as req}]
  (let [{:keys [username repo]} params]
    (response/ok
     (build/fetch-by-username-and-repo username repo))))
