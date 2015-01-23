(ns ponting-dynamics.application
  (:gen-class) ;; because otherwise I have to run -cp {jarfile} clojure.main -m {this class} and I don't know if that's advantageous
  (:require [compojure.core :refer :all]
            [compojure.handler :refer [site]]
            [compojure.route :as route]

            [ponting-dynamics.views.stats :refer [stats-page]]

            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.adapter.jetty :as jetty]))

(defroutes app-routes
  ;; Gotta have the index
  (GET "/" [] (slurp "resources/public/html/index.html"))

  ;; Test
  (GET "/wut" [] "What the fu...")

  ;; How many lines of code were used to make this site?
  (GET "/statistics" [] (stats-page))

  ;; Doesn't matter where you're trying to go, I got you covered
  ;(GET TODO figure out compojure routes so I can make a generic page for any route... [] (generic-page title content))

  ;; Did you done goof?
  (ANY "*" [] (route/not-found (slurp "resources/public/html/404.html"))))

;; NOTES TO SELF RE: ACTUALLY RUNNING THIS SERVER
;;
;; If I understand correctly, lein ring server looks at project.clj to find the
;; main handler function defined by :ring {:handler whatever} whereas lein run
;; will look for -main in this file.  When the uberjar is compiled it will go to
;; target/ and thus the Procfile should run it from there.  Hopefully this will
;; keep me within my memory limit which is the whole point of this exercise.

(def app
  (wrap-defaults app-routes site-defaults))

(defn -main [& [port]]
  (let [port (Integer. (or port 5000))]
    (jetty/run-jetty (site #'app) {:port port :join? false})))
