(ns shrike.oauth.github
  "For details on the Github OAuth flow, refer to documentation here:

   https://developer.github.com/v3/oauth/#web-application-flow.

   This namespace includes the callback function and other utility functions
   for creating github auth-tokens and ensuring we store the user in our db."
  (:require [cemerick.url :as url]
            [cheshire.core :as json]
            [environ.core :as env]
            [clj-http.client :as http]
            [ring.util.response :as response]))


(def client-id (env/env :gh-basic-client-id))
(def client-secret (env/env :gh-basic-secret-id))

(def github-login-url (url/url "https://github.com/login/oauth/authorize"))

(defn github-redirect-url
  "Returns a redirect response to the GitHub access page."
  [state]
  (let [url (assoc
             github-login-url
             :query {:client_id client-id
                     :redirect-uri "http://localhost:8080/oauth/github"
                     :scope "user,repo,read:org"
                     :state state})]
    (assoc-in
      (response/redirect (str url))
      [:headers "Access-Control-Allow-Origin"]
      "*")))

;; Parses Github OAuth response and updates tables

(defn access-token-exchange
  "POST to GitHub with the code from the callback."
  [code]
  (let [response (http/post "https://github.com/login/oauth/access_token"
                            {:headers  {"Accept" "application/json"}
                             :query-params {:code code
                                            :client_id client-id
                                            :client_secret client-secret}})]
    (-> response :body (json/parse-string true))))
