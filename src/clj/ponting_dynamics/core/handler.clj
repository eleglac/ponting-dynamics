(ns ponting-dynamics.core.handler
  (:gen-class) ;; because otherwise I have to run -cp {jarfile} clojure.main -m {this class} and I don't know if that's advantageous
  (:require [compojure.core :refer :all]
            [compojure.handler :refer [site]]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.adapter.jetty :as jetty]

            ;[ponting-dynamics.core.counter :refer [stats]]
            ))

(defroutes app-routes
  (GET "/" [] (slurp "resources/public/html/index.html"))
  ;(GET "/meta" [] (stats))
  (route/not-found (slurp "resources/public/html/404.html")))

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
