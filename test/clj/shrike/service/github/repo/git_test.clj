(ns ^:integration shrike.service.github.repo.git-test
  (:require [clojure.test :refer :all]
            [shrike.model.user :as user]
            [shrike.service.github.repo.git :as git]
            [titan.test.fixtures :refer [with-db-fixtures]]))

(with-db-fixtures)

(deftest we-can-get-a-commit
  (let [user (user/fetch-one-user-with-access-token {:github_user_id 14307759})]
    (is (some? (git/commit "ursacorp"
                           "test-repo"
                           "394717ffc3fc54ffefac2ebba5a92470f904383a"
                           user)))))
