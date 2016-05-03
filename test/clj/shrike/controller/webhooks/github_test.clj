(ns shrike.controller.webhooks.github-test
  (:require [clojure.test :refer :all]
            [shrike.controller.webhooks.github :as gh]
            [shrike.fixtures.webhooks :as hooks]
            [shrike.model.build :as build]
            [titan.test.fixtures :refer [use-db-fixtures]]))

(use-db-fixtures)

(deftest push-event-handler-works
  (is (= (gh/push-event-handler hooks/push-hook)
         {:status 200
          :headers {"Content-Type" "application/json"}
          :body {:message "Webhook correctly parsed."}})))
