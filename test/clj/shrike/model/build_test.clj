(ns shrike.model.build-test
  (:require [clojure.test :refer :all]
            [shrike.model.build :as build]
            [titan.test.fixtures :refer [with-db-fixtures]]))

(deftest fetch-one-by-username-and-repo-works
  (is (= 0 1)))

(deftest fetch-by-username-and-repo-works
  (is (= 0 1)))
