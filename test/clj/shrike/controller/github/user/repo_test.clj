(ns ^:integration shrike.controller.github.user.repo-test
  (:require [clojure.test :refer :all]
            [shrike.controller.github.user.repo :as repo]
            [titan.test.fixtures :refer [with-db-fixtures]]))

;; TODO
#_(deftest list-works
  (is (= 0 1)))
