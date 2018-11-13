(ns ponting-dynamics.application
  (:gen-class)
  (:require [compojure.core :refer :all]
            [compojure.handler :refer [site]]
            [compojure.route :as route]

            [ponting-dynamics.views.thefuture :refer [future-page]]
            [ponting-dynamics.views.home      :refer [main-page]]
            [ponting-dynamics.views.pages     :refer :all]
            [ponting-dynamics.views.stats     :refer [stats-page]]
            [ponting-dynamics.views.circles   :refer [circles-page]]
            [ponting-dynamics.views.tri       :refer [tri-page]]
            [ponting-dynamics.views.stocks    :refer [stocks-page]]

            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.adapter.jetty :as jetty]))

(defroutes app-routes
  
  ;; Gotta have the index
  (GET "/" [] (main-page))

  ;; What are Ponting Dynamics?
  (GET "/about" [] about-page)

  ;; How many lines of code were used to make this site?
  (GET "/statistics" [] stats-page)

  ;; The Clojurescript Battleship Game
  (GET "/cljs" [] cljs-page)

  ;; Landing page for all sorts of little things
  (GET "/samples" [] samples)

  ;; What's a consulting firm without a contact page?
  (GET "/contact" [] contact)

  ;; Oh, did you actually want to WORK for us? Well... lol.
  (GET "/jobs" [] jobs)

  ;; At Ponting Dynamics, the future is right around the bend.
  (GET "/future" [] (future-page))

  ;; The Ponting Dynamics Large Circle Collider is finally online here.
  (GET "/circles" [] (circles-page))

  ;; A cool visualization.  Doesn't need to be more than that.
  (GET "/tri" [] (tri-page))

  ;; Stock experiments
  (GET "/stocks" [] (stocks-page "WHZT"))
  (GET "/stocks/:ticker" [ticker] (stocks-page ticker))  
  
  ;; static resources
  (route/resources "/")
  
  ;; Did you done goof?
  (route/not-found not-found-page))

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
