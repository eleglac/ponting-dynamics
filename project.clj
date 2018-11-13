(defproject ponting-dynamics "0.6.2-alpha"
  :description "A personal website for Alex J. Ponting."
  :url "http://www.pontingdynamics.org"
  :min-lein-version "2.1.2"

  :dependencies [[com.rpl/specter "1.1.2"]
                 
                 [compojure "1.5.0"]

                 [environ "1.1.0"]

                 [hiccup "1.0.5"]
                 
                 [http-kit "2.3.0"]

                 [org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.227"]
                 [org.clojure/data.json "0.2.6"]

                 [ring/ring-jetty-adapter "1.4.0"]
                 [ring/ring-defaults "0.2.0"]

                 [quil "2.4.0"]]

  :source-paths ["src/clj" "src/cljs"]

  :plugins [[lein-ring "0.9.7"]
            [lein-cljsbuild "1.1.4"]]

  :hooks [leiningen.cljsbuild]

  :main ponting-dynamics.application
  :uberjar-name "ponting-dynamics-standalone.jar"

  :profiles
    {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                          [ring-mock "0.1.5"]
                          [org.clojure/clojurescript "1.9.227"]
                          [quil "2.4.0"]]}

     :uberjar {:aot :all}}

  :ring {:handler ponting-dynamics.application/app}

  :cljsbuild {:builds {
               :main
                 {:source-paths ["src/cljs/ponting_dynamics/page"]
                  :compiler {:output-to "resources/public/js/generic.js"
                             :optimizations :advanced}}
               :circles
                 {:source-paths ["src/cljs/ponting_dynamics/circle"]
                  :compiler {:output-to "resources/public/js/circles.js"
                             :optimizations :advanced
                             :pretty-print true}}
               :tri
                 {:source-paths ["src/cljs/ponting_dynamics/tri"]
                  :compiler {:output-to "resources/public/js/tri.js"
                             :optimizations :advanced
                             :pretty-print true}}}})
