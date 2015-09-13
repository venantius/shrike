(ns shrike.routes
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [put! <! chan]]
            [secretary.core :as secretary :refer-macros [defroute]]
            [goog.events :as events]
            [goog.history.EventType :as EventType]

            )
  (:import goog.history.Html5History
           goog.Uri
           ))

(def application
    (js/document.getElementById "my-app"))

(defn set-html!  [el content]
    (aset el "innerHTML" content))

(defroute "/fluid" {:as params}
  (js/console.log (str "User: " (:id params))))

(defn get-current-path
  []
  (str js/window.location.pathname)
  )

;; LEARN HOW NAVIGATION WORKS. using "#" is unsatisfactory. REAGENT seems to
;; have an answer?

#_(defn navigate
  [event]
  (js/console.log (get-current-path) event)
  (. event preventDefault)
  )

;; Quick and dirty history configuration.
#_(let [h (History.)]
  (goog.events/listen h EventType/NAVIGATE #(js/console.log (get-current-path)))
  (doto h (.setEnabled true)))

(defn listen [el type]
  (let [out (chan)]
    (events/listen el type
      (fn [e] (put! out e)))
    out))

(def history (Html5History.))
(.setUseFragment history false)
(.setPathPrefix history "")
(.setEnabled history true)

(let [navigation (listen history EventType/NAVIGATE)]
  (go
     (while true
       (let [token (.-token (<! navigation))]
         (secretary/dispatch! token)))))

(events/listen js/document "click" (fn [e]
                                     (let [path (.getPath (.parse Uri (.-href (.-target e))))
                                           title (.-title (.-target e))]
                                       (when (secretary/locate-route path)
                                         (. history (setToken path title))
                                         (.preventDefault e)))))
