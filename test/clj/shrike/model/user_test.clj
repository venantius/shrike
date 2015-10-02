(ns shrike.model.user-test
  (:require [clojure.test :refer :all]
            [shrike.model.user :as user]
            [titan.test.fixtures :refer [with-db-fixtures]]))

(deftest create-or-update-from-access-token!-works
  (is (= 0 1)))

(deftest fetch-one-user-with-access-token-works
  (is (= 0 1)))
