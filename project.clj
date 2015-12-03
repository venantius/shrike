(defproject shrike "0.1.0"
  :description "Hosted Code Quality Analysis for Clojure"
  :url "http://www.codeshrike.com"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.145"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]

                 ;; ClojureScript
                 [cljs-ajax "0.3.14"]
                 [cljsjs/jquery "1.9.1-0"]
                 [org.omcljs/om "0.9.0"]
                 [prismatic/om-tools "0.3.12"]
                 [secretary "1.2.3"]
                 [venantius/accountant "0.1.6"]

                 ;; This section is for shrike
                 [amazonica "0.3.52"]
                 [tentacles "0.5.1"
                  :exclusions [cheshire]]
                 [venantius/titan "0.1.0-SNAPSHOT"]



                 ]

  :plugins [[lein-cljsbuild "1.1.0"]
            [lein-environ "1.0.0"]]

  :main shrike.core
  :aot [titan.commands.db.migrate]
  :source-paths ["src/clj", "src/cljs"]
  :test-paths ["test/clj", "test/cljc"]
  :min-lein-version "2.5.0"
  ;; maybe this will clean up our uberjar paths?
  :clean-targets ^{:protect false} ["resources/public/js/shrike"
                                    :target-path]

  :cljsbuild {:builds {:app {:source-paths ["src/cljs"]
                             :compiler {:output-to     "resources/public/js/shrike/app.js"
                                        :output-dir    "resources/public/js/shrike/out"
                                        :source-map    "resources/public/js/shrike/out.js.map"
                                        :preamble      ["react/react.min.js"]
                                        :optimizations :none
                                        :main "shrike.core"
                                        :asset-path "/js/shrike/out"
                                        :pretty-print  true}}}}

  :test-selectors {:default (complement :integration)
                   :all (constantly true)
                   :integration :integration}

  :profiles {:dev
             {:env {:environment "dev"
                    :database-url "postgres://localhost:5432/shrike"
                    :reload-db-on-run true
                    :session-key "california--bear"
                    :gh-client-id "0444be153780e496dbf5"
                    :gh-client-secret "b7e407141e8b9e152f297e01d37449e9c4d77b3c"}

              :repl-options {:port 7003}
              :dependencies [[bond "0.2.5"]]

              :plugins [[jonase/eastwood "0.1.4"]
                        [lein-figwheel "0.5.0"]
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
                                          :compiler {:output-to     "resources/public/js/shrike/app_test.js"
                                                     :output-dir    "resources/public/js/shrike/test"
                                                     :source-map    "resources/public/js/shrike/test.js.map"
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
                       :omit-source true
                       :aot :all
                       :prep-tasks [["cljsbuild" "once"] "compile"]
                       :cljsbuild {:builds {:app
                                            {:jar true
                                             :compiler
                                             {:optimizations :advanced
                                              :main "shrike.core"
                                              :asset-path "/js/shrike/out"
                                              :pretty-print false}}}}}}
  :uberjar-name "shrike.jar"
  )
