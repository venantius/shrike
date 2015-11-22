(ns shrike.controller.webhooks.github
  "GitHub event webhook controller."
  (:require [clojure.tools.logging :as log]
            [shrike.model.github.commit :as commit]
            [shrike.model.github.repo :as repo]
            [shrike.model.build :as build]
            [shrike.service.aws.sqs :as queue]))

(defn ping-event-handler
  [{:keys [params] :as request}]
  (log/info request)
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body "Ping event received"})

(defn push-event-handler
  [{:keys [params] :as request}]
  (let [{:keys [head_commit repository]} params
        head-commit (commit/create-or-fetch-from-push-event!
                     repository head_commit)]
    (build/create-from-push-hook params head-commit)
    {:status 200
     :headers {"Content-Type" "application/json"}
     :body {:message "Webhook correctly parsed."}}))

(defn listen
  "Master webhook listener. Routes requests based on the event type."
  [{:keys [headers] :as request}]
  (let [event-type (get headers "x-github-event")]
    (condp = event-type
      "ping" (ping-event-handler request)
      "push" (push-event-handler request)
      (log/error "Failed to deal with webhook"))))
