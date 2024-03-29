(ns shrike.auth-test
  (:require [clojure.test :refer :all]
            [shrike.auth :as auth]
            [titan.test.fixtures :refer [use-db-fixtures]]))

(use-db-fixtures)

(deftest authn-fn-works
  (let [req {:session {:id 1}}]
    (is (= (auth/auth-fn req)
           {:id 1
            :name "ursacorp-test-user"
            :token "a25e44d2a05e073dcb2db5f07089ea200dda9aba"
            :github_user_id 14307759
            :github_access_token_id 100001}))
    (is (= (auth/auth-fn {})
           nil))))
