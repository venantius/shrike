(ns shrike.controller.repo.build
  (:require [shrike.model.build :as build]))

(defn get-build
  [req]
  (build/fetch-build))
