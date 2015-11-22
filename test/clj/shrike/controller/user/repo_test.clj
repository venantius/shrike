(ns shrike.controller.user.repo-test
  (:require [clojure.test :refer :all]
            [shrike.controller.user.repo :as repo]
            [titan.test.fixtures :refer [with-db-fixtures]]))

(with-db-fixtures)

(deftest we-can-fetch-the-users-repos
  (let [request {:user {:id 2}}]
    (is (= (repo/list request)
           {:body [{:full_name "ursacorp/test-repo"
                    :id 42705074
                    :name "test-repo"
                    :owner "ursacorp"}]
            :status 200}))))

(deftest we-can-follow-a-new-repo
  (let [request {:user {:id 1}
                 :params {:id 42705074
                          :full_name "ursacorp/test-repo"
                          :name "test-repo"
                          :owner {:id 7268171
                                  :login "ursacorp"
                                  :type "Organization"}
                          :private false
                          :fork false}}]
    (is (= (repo/create! request)
           {:body {:name "test-repo"
                   :full_name "ursacorp/test-repo"
                   :owner "ursacorp"
                   :id 42705074}
            :status 200}))))

(deftest we-cant-follow-a-repo-twice
  (let [request {:user {:id 2}
                 :params {:id 42705074
                          :full_name "ursacorp/test-repo"
                          :name "test-repo"
                          :owner {:id 7268171
                                  :login "ursacorp"
                                  :type "Organization"}
                          :private false
                          :fork false}}]
    (is (= (repo/create! request)
           {:body {:message "You are already following that repository"}
            :status 409}))))

; TODO below this
(deftest following-creates-gh-user-when-it-needs-to)

(deftest following-creates-gh-repo-when-it-needs-to)

(deftest we-can-unfollow-a-repo)
