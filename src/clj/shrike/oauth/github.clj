(ns shrike.oauth.github
  "For details on the Github OAuth flow, refer to documentation here:

   https://developer.github.com/v3/oauth/#web-application-flow."
  (:require [cemerick.url :as url]
            [cheshire.core :as json]
            [environ.core :as env]
            [clj-http.client :as http]
            [ring.util.response :as response]))

(def ^:private client-id
  (env/env :gh-client-id))

(def ^:private client-secret
  (env/env :gh-client-secret))

(def ^:private github-login-url
  (url/url "https://github.com/login/oauth/authorize"))

(defn github-redirect-url
  "Returns a redirect response to Github for the user to give us authorization."
  [state]
  (let [url (assoc
             github-login-url
             :query {:client_id client-id
                     :redirect-uri "http://localhost:5000/oauth/github/callback"
                     :scope "user,repo,read:org"
                     :state state})]
    (assoc-in
     (response/redirect (str url))
     [:headers "Access-Control-Allow-Origin"]
     "*")))

(defn access-token-exchange
  "POST to GitHub with the code from the callback."
  [code]
  (let [response (http/post "https://github.com/login/oauth/access_token"
                            {:accept :json
                             :query-params {:code code
                                            :client_id client-id
                                            :client_secret client-secret}})]
    (-> response :body (json/parse-string true))))
