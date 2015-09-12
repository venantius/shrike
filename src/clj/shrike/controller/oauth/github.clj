(ns shrike.controller.oauth.github
  (:require [shrike.model.github.access-token :as access-token]
            [shrike.model.github.oauth-state :as oauth-state]
            [shrike.model.github.user :as gh-user]
            [shrike.oauth.github :as oauth]
            [titan.util.token :as token]
            [ring.util.response :as response]))

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
  [{:keys [user params] :as request}]
  (let [{:keys [code state]} params
        user-id (:id user)
        at (oauth/access-token-exchange code)
        access-token (access-token/create-or-update-github-access-token!
                      (access-token/map->github-access-token
                       {:darg_user_id user-id
                        :token (:access_token at)
                        :scope (:scope at)}))
        state (oauth-state/fetch-one-github-oauth-state {:state state})]
    (when-not (gh-user/fetch-one-github-user {:darg_user_id user-id})
      (gh-user/create-from-access-token!))
    (assoc
     (response/redirect
      (str "/team/" (:darg_team_id state) "/services/github?"))
     :cookies {"github" {:value true :path "/"}})))
