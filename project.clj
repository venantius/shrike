(defproject clip "0.1.0-SNAPSHOT"
  :description "Hosted Code Quality Analysis for Clojure"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]

                 [org.clojure/tools.logging "0.3.1"]

                 [org.slf4j/slf4j-log4j12 "1.7.12"]

                 ;; ClojureScript
                 [org.clojure/clojurescript "1.7.48"]
                 [org.omcljs/om "0.9.0"]


                 ;; This upper section is for Clip

                 ;; Everything below here is needed for Titan
                 [korma "0.4.2"]
                 [ragtime "0.5.2"]

                 [ring "1.4.0"]
                 [aleph "0.4.0"] ;; let's try Aleph
                 [ring/ring-defaults "0.1.5"]
                 [compojure "1.4.0"]

                 [prismatic/schema "1.0.1"]
                 [environ "1.0.0"]
                 [clj-time "0.11.0"]

                 ;; Additional JDBC drivers may be required.
                 [org.postgresql/postgresql "9.4-1202-jdbc4"]


                 ]

  :plugins [[lein-cljsbuild "1.0.5"]
            [lein-environ "1.0.0"]]

  :main clip.core
  :source-paths ["src/clj"]
  :test-paths ["test/clj"]
  :min-lein-version "2.5.0"

  :cljsbuild {:builds {:app {:source-paths ["src/cljs"]
                             :compiler {:output-to     "resources/public/js/app.js"
                                        :output-dir    "resources/public/js/out"
                                        :source-map    "resources/public/js/out.js.map"
                                        :preamble      ["react/react.min.js"]
                                        :optimizations :none
                                        :pretty-print  true}}}}


  :profiles {:dev
             {:env {:environment "dev"
                    :database-url "postgres://localhost:5432/clip"
                    :reload-db-on-run true
                    :port "8080"
                    :session-key "california--bear"
                    :email-password "huxtables"
                    :is-dev true}
              :plugins [[jonase/eastwood "0.1.4"]
                        [lein-figwheel "0.2.5"]]
              :eastwood {:exclude-linters [:deprecations]}

              :dependencies [[figwheel "0.2.5"]
                             [figwheel-sidecar "0.2.5"]
                             [com.cemerick/piggieback "0.1.5"]
                             [weasel "0.6.0"]]

              :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}

              :figwheel {:http-server-root "public"
                         :server-port 3449
                         :css-dirs ["resources/public/css"]
                         :ring-handler derp.server/http-handler}

              :cljsbuild {:test-commands { "test" ["phantomjs" "env/test/js/unit-test.js" "env/test/unit-test.html"] }
                          :builds {:app {:source-paths ["env/dev/cljs"]}
                                   :test {:source-paths ["src/cljs" "test/cljs"]
                                          :compiler {:output-to     "resources/public/js/app_test.js"
                                                     :output-dir    "resources/public/js/test"
                                                     :source-map    "resources/public/js/test.js.map"
                                                     :preamble      ["react/react.min.js"]
                                                     :optimizations :whitespace
                                                     :pretty-print  false}}}}



              }

             :test
             {:env {:environment "test"
                    :database-url "postgres://localhost:5432/clip_test"
                    :port "8080"
                    :session-key "antarctica--bear"
                    :email-password "huxtables"}
              :plugins [[jonase/eastwood "0.1.4"]]
              :jvm-opts ["-Dlog4j.configuration=log4j-test.properties"]}

             :staging
             {:env {:environment "staging"}}

             :production
             {:env {:environment "production"}}

             :uberjar {:source-paths ["env/prod/clj"]
                       :hooks [leiningen.cljsbuild]
                       :env {:production true}
                       :omit-source true
                       :aot :all
                       :main derp.server
                       :cljsbuild {:builds {:app
                                            {:source-paths ["env/prod/cljs"]
                                             :compiler
                                             {:optimizations :advanced
                                              :pretty-print false}}}}}}




  )
