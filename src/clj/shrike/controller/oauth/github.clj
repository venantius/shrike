(ns shrike.controller.oauth.github
  (:require [clojure.tools.logging :as log]
            [shrike.model.github.access-token :as access-token]
            [shrike.model.github.oauth-state :as oauth-state]
            [shrike.model.github.user :as gh-user]
            [shrike.oauth.github :as oauth]
            [titan.http.response :as resp]
            [titan.util.token :as token]))

(defn redirect
  "This handler is called to redirect the user to the GitHub OAuth login and
   authentication page."
  [{:keys [params]}]
  (let [state (oauth-state/create-github-oauth-state!
               (oauth-state/map->github-oauth-state
                {:state (token/generate-token)}))]
    (oauth/github-redirect-url (:state state))))

(defn callback
  "This handler is called after a user is redirected back to Shrike from
   https://github.com/login/oauth/authorize.

   It takes the github request as an input, parses out the access code from
   the params, and then makes a call to
   https://github.com/login/oauth/access_token to generate an OAuth token."
  [{:keys [params] :as request}]
  (log/info request)
  (let [{:keys [code state]} params
        at (oauth/access-token-exchange code)]
    (if (nil? (oauth-state/fetch-one-github-oauth-state {:state state}))
      (resp/unauthorized "Provided state did not match OAuth state.")
      (let [access-token (access-token/create-or-update-github-access-token!
                          (access-token/map->github-access-token
                           {:token (:access_token at)
                            :scope (:scope at)}))
            {:keys [id] :as user} (gh-user/create-or-update-from-access-token! access-token)]
        (assoc
         (resp/redirect "/")
         :session {"id" {:value id :path "/"}}
         :cookies {"id" {:value id :path "/"}
                   "logged-in" {:value true :path "/"}})))))
