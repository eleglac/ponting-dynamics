(ns ponting-dynamics.application
  (:gen-class) 
  (:require [compojure.core :refer :all]
            [compojure.handler :refer [site]]
            [compojure.route :as route]
            
            [ponting-dynamics.views.common    :refer [not-found-page]]
            [ponting-dynamics.views.thefuture :refer [future-page]]
            [ponting-dynamics.views.home      :refer [main-page]]
            [ponting-dynamics.views.pages     :refer [about-page contact samples cljs-page jobs]]
            [ponting-dynamics.views.stats     :refer [stats-page]]
            [ponting-dynamics.views.circles   :refer [circles-page]]

            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.adapter.jetty :as jetty]))

(defroutes app-routes
  ;;Now this is some bullshit here... I don't know why, but in routes that go more than one level (i.e. /l1/l2) the root is set to /l1
  ;;and so when the browser looks for the file it looks in the wrong folder.  So, workaround: manually construct the response to guarantee
  ;;that no matter what stupid route the browser tries to use, it's going to get redirected to the actual content.
  ;;
  ;;Likely the same thing will happen if I have Javascript on deep pages, but that's a future worry.
  ;; UPDATE 10/3/15 - it totally did happen with the javascript!  Way to go, past Alex

  (context "*/css" []
    (GET "/:file" [file] {:status 200 :headers {"Content-Type" "text/css; charset=utf-8"} :body (slurp (str "resources/public/css/" file))}))
  (context "*/js" []
    (GET "/:file" [file] {:status 200 :headers {"Content-Type" "text/javascript; charset=utf-8"} :body (slurp (str "resources/public/js/" file))}))

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
  (GET "/circles" [] (circles))
  ;; Doesn't matter where you're trying to go, I got you covered
  ;(context "/:title" [title]
    ;(GET "/"  [title] (default-page title [:p "If you sought " title " then you have found it."]))
    ;(GET "/*" [title] (default-page title [:p "Why do you seek to transcend " title "?"])))
  
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
