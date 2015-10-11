(ns shrike.model.github.user-test
  (:require [clojure.test :refer :all]
            [shrike.model.github.user :as user]
            [titan.test.fixtures :refer [with-db-fixtures]]))

;; TODO
#_(deftest fetch-or-create-from-access-token!-works
  (is (= 0 1)))
