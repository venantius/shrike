(ns shrike.controller.auth)

(defn csrf-token
  [{:keys [session user] :as request}]
  (when user
    {:status 200
     :content-type "text/plain"
     :body (:ring.middleware.anti-forgery/anti-forgery-token session)}))
