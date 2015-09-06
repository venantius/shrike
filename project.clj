(defproject clip "0.1.0-SNAPSHOT"
  :description "Hosted Code Quality Analysis for Clojure"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/tools.logging "0.3.1"]
                 [org.slf4j/slf4j-log4j12 "1.7.12"]


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

  :plugins [[lein-environ "1.0.0"]
            [lein-figwheel "0.3.9"]]

  :main clip.core

  :profiles {:dev
             {:env {:environment "dev"
                    :database-url "postgres://localhost:5432/clip"
                    :reload-db-on-run true
                    :port "8080"
                    :session-key "california--bear"
                    :email-password "huxtables"}
              :plugins [[jonase/eastwood "0.1.4"]]
              :eastwood {:exclude-linters [:deprecations]}}

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

             }

  )
