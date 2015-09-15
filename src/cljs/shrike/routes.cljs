(ns shrike.routes
  (:require [secretary.core :as secretary :refer-macros [defroute]]
            [accountant.core :as accountant]))

(defroute "/fluid" {:as params}
  (js/console.log (str "User: " (:id params))))

(defroute "/order-history" {:as params}
  (js/console.log (str "User: " (:id params))))

(accountant/configure-navigation!)
