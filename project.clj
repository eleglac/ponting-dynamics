(defproject ponting-dynamics "0.4-alpha"
  :description "A personal website for Alex J. Ponting."
  :url "http://www.pontingdynamics.org"
  :min-lein-version "2.0.0"

  :dependencies [[compojure "1.3.1"]
                 [hiccup "1.0.5"]  
                 [jayq "2.5.2"]
                 [org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2069"]
                 [ring/ring-jetty-adapter "1.3.2"]
                 [ring/ring-defaults "0.1.2"]]

  :source-paths ["src/clj" "src/cljs"]

  :plugins [[lein-ring "0.8.13"]
            [lein-cljsbuild "1.0.0"]]
  
  :main ponting-dynamics.application
  :uberjar-name "ponting-dynamics-standalone.jar"

  :profiles
    {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                          [ring-mock "0.1.5"]]}
     :uberjar {:aot :all}} ;; otherwise Leiningen is concerned for my well-being

  :ring {:handler ponting-dynamics.application/app} 
  
  :cljsbuild {:builds
               [{:source-paths ["src/cljs"]
                 :compiler {:output-to "resources/public/js/generic.js"
                            :optimizations :simple
                            :pretty-print  true}}]})
