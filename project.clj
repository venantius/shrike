(defproject shrike "0.1.0-SNAPSHOT"
  :description "Hosted Code Quality Analysis for Clojure"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.48"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]

                 ;; ClojureScript
                 [cljs-ajax "0.3.14"]
                 [jayq "2.5.4"]
                 [org.omcljs/om "0.9.0"]
                 [prismatic/om-tools "0.3.12"]
                 [secretary "1.2.3"]
                 [venantius/accountant "0.1.2"]

                 ;; This section is for shrike
                 [tentacles "0.3.0"]

                 ;; Everything below here is needed for Titan
                 [org.clojure/tools.logging "0.3.1"]
                 [org.clojure/tools.nrepl "0.2.10"]
                 [org.slf4j/slf4j-log4j12 "1.7.12"]
                 [korma "0.4.2"]
                 [ragtime "0.5.2"]
                 [ring "1.4.0"]
                 [aleph "0.4.0"] ;; let's try Aleph
                 [ring/ring-defaults "0.1.5"]
                 [ring/ring-jetty-adapter "1.4.0"]
                 [ring/ring-json "0.4.0"]
                 [compojure "1.4.0"]
                 [prismatic/schema "1.0.1"]
                 [environ "1.0.0"]
                 [clj-time "0.11.0"]
                 [cheshire "5.5.0"]

                 ;; Additional JDBC drivers may be required.
                 [org.postgresql/postgresql "9.4-1202-jdbc4"]

                 ;; This may not stick around
                 [mvxcvi/whidbey "1.0.0"]]

  :plugins [[lein-cljsbuild "1.0.5"]
            [lein-environ "1.0.0"]]

  :main shrike.core
  :source-paths ["src/clj", "src/cljs"]
  :test-paths ["test/clj"]
  :min-lein-version "2.5.0"

  :cljsbuild {:builds {:app {:source-paths ["src/cljs"]
                             :compiler {:output-to     "resources/public/js/app.js"
                                        :output-dir    "resources/public/js/out"
                                        :source-map    "resources/public/js/out.js.map"
                                        :preamble      ["react/react.min.js"]
                                        :optimizations :none
                                        :main "shrike.core"
                                        :asset-path "/js/out"
                                        :pretty-print  true}}}}

  :test-selectors {:default (complement :integration)
                   :all (constantly true)
                   :integration :integration}

  :profiles {:dev
             {:env {:environment "dev"
                    :database-url "postgres://localhost:5432/shrike"
                    :reload-db-on-run true
                    :port "8080"
                    :session-key "california--bear"}

              :repl-options {:port 7002}

              :plugins [[jonase/eastwood "0.1.4"]
                        [lein-figwheel "0.4.0"]
                        [mvxcvi/whidbey "1.0.0"]
                        ]

              :eastwood {:exclude-linters [:deprecations]}

              :figwheel {:http-server-root "public"
                         :css-dirs ["resources/public/css"]
                         :ring-handler shrike.core/app}

              :cljsbuild {:test-commands {"test"
                                          ["phantomjs"
                                           "env/test/js/unit-test.js"
                                           "env/test/unit-test.html"]}
                          :builds {:app {:figwheel true}
                                   :test {:source-paths ["src/cljs" "test/cljs"]
                                          :compiler {:output-to     "resources/public/js/app_test.js"
                                                     :output-dir    "resources/public/js/test"
                                                     :source-map    "resources/public/js/test.js.map"
                                                     :preamble      ["react/react.min.js"]
                                                     :optimizations :whitespace
                                                     :pretty-print  false}}}}}

             :test
             {:env {:environment "test"
                    :database-url "postgres://localhost:5432/shrike_test"
                    :port "8080"
                    :session-key "antarctica--bear"}
              :plugins [[jonase/eastwood "0.1.4"]]}

             :staging
             {:env {:environment "staging"}}

             :production
             {:env {:environment "production"}}

             :uberjar {:hooks [leiningen.cljsbuild]
                       :env {:production true}
                       :omit-source true
                       :aot :all
                       :prep-tasks ["compile" ["cljsbuild" "once"]]
                       :cljsbuild {:builds {:app
                                            {:jar true
                                             :compiler
                                             {:optimizations :advanced
                                              :pretty-print false}}}}}}
  :uberjar-name "shrike.jar"
  )
