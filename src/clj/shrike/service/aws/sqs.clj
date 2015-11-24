(ns shrike.service.aws.sqs
  "Simple Queue Service Stuff"
  (:require [amazonica.aws.sqs :as sqs]
            [environ.core :as env]))

(def credentials
  {:access-key (env/env :aws-access-key)
   :secret-key (env/env :aws-secret-key)
   :endpoint "us-west-2"})

(defn create-queue
  "Create an SQS queue."
  [queue-name]
  (sqs/create-queue
   credentials
   :queue-name queue-name
   :attributes
   {:ReceiveMessageWaitTimeSeconds 10
    :VisibilityTimeout 30}))

(defn list-queues
  "List all of the available SQS queues."
  []
  (sqs/list-queues credentials))

(defn delete-queue
  "Delete a SQS queue."
  [url]
  (sqs/delete-queue
   credentials
   url))

(defn send-message
  "Enqueue a message."
  [queue-name content]
  (sqs/send-message
   credentials
   queue-name
   content))

(defn receive-message
  [queue-name]
  (sqs/receive-message
   credentials
   :queue-url queue-name
   :wait-time-seconds 6))
