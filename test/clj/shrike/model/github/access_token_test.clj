(ns shrike.model.github.access-token-test
  (:require [clojure.test :refer :all]
            [shrike.model.github.access-token :as access-token]
            [titan.test.fixtures :refer [with-db-fixtures]]))

(deftest create-or-update-github-access-token-works
  (is (= 0 1)))
