(ns shrike.cookies
  (:refer-clojure :exclude [get set!])
  (:require [goog.net.cookies :as gcookies]
            [cljs.reader :as reader]))

(defn get
  "Returns the cookie after parsing it with cljs.reader/read-string."
  [k]
  (reader/read-string (or (.get goog.net.cookies (name k)) "nil")))

(defn set!
  "Stores the cookie value using pr-str."
  [k v]
  (.set goog.net.cookies (name k) (pr-str v)))

(defn remove!
  "Remove a given key from the cookie."
  [k]
  (.remove goog.net.cookies (name k)))
