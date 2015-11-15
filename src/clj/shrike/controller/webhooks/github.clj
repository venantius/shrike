(ns shrike.controller.webhooks.github
  "GitHub event webhook controller."
  (:require [clojure.tools.logging :as log]
            [shrike.model.github.repo :as repo]
            [shrike.service.aws.sqs :as queue]))

(defn ping-event-handler
  [{:keys [params] :as request}]
  (log/info request)
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body "Ping event received"})

(defn push-event-handler
  [{:keys [params] :as request}]
  (let [{:keys [repository hook]} params
        repo-id (:id repository)]
    (log/info (keys params))
    (log/warn (repo/fetch-one-github-repo {:id repo-id}))
    {:status 200
     :headers {"Content-Type" "application/json"}
     :body (dissoc request :body :server-exchange)}))

(defn listen
  "Master webhook listener. Routes requests based on the event type."
  [{:keys [headers] :as request}]
  (let [event-type (get headers "x-github-event")]
    (condp = event-type
      "ping" (ping-event-handler request)
      "push" (push-event-handler request)
      (log/error "Failed to deal with webhook"))))
