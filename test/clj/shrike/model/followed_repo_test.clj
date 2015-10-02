(ns shrike.model.followed-repo-test
  (:require [clojure.test :refer :all]
            [shrike.model.followed-repo :as followed-repo]
            [titan.test.fixtures :refer [with-db-fixtures]]))

(deftest fetch-with-full-repo-info-works
  (is (= 0 1)))
