(ns shrike.controller.user.repo.build-test
  (:require [clojure.test :refer :all]
            [shrike.controller.user.repo.build :as build]
            [titan.http.response :as response]
            [titan.test.fixtures :refer [use-db-fixtures]]))

(use-db-fixtures)

#_(deftest get-works
    (let [request {:params {:username "ursacorp"
                            :repo "test-repo"
                            :build_id "100001"}}]
      (is (= (build/get request)
             {:status 200
              :body {:build_id 100001
                     :message "Initial commit"
                     :name "test-repo"
                     :owner "ursacorp"
                     :sha "394717ffc3fc54ffefac2ebba5a92470f904383a"
                     :started_at #inst "2015-10-02T20:14:16.454-00:00"
                     :status "Starting"}}))))

(deftest get-returns-404-correctly
  (let [request {:params {:username "derp"
                          :repo "herp"
                          :build_id "10001"}}]
    (is (= (build/get request)
           {:status 404
            :body {:message "No such build exists."}}))))

;; TODO beneatht his
(deftest list-works)
