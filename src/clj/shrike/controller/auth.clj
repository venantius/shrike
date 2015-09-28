(ns shrike.controller.auth)

(defn csrf-token
  [{:keys [session user] :as request}]
  (when user
    {:status 200
     :content-type "text/plain"
     :body (:ring.middleware.anti-forgery/anti-forgery-token session)}))

(defn logout
  [req]
  {:body ""
   :headers {"Content-Type" "text/html; charset: utf-8"}
   :status 200
   :session nil
   :cookies {"id" {:value "" :max-age 0 :path "/"}}})
