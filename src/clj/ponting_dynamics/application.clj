(ns ponting-dynamics.application
  (:gen-class) ;; because otherwise I have to run -cp {jarfile} clojure.main -m {this class} and I don't know if that's advantageous
  (:require [compojure.core :refer :all]
            [compojure.handler :refer [site]]
            [compojure.route :as route]
            
            [ponting-dynamics.views.common   :refer [default-page]]
            [ponting-dynamics.views.stats    :refer [stats-page]]
            [ponting-dynamics.views.js-test  :refer [js-page]]
            [ponting-dynamics.views.overflow :refer [overflow]]

            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.adapter.jetty :as jetty]))

(defroutes app-routes
  ;;Now this is some bullshit here... I don't know why, but in routes that go more than one level (i.e. /l1/l2) the root is set to /l1
  ;;and so when the browser looks for the file it looks in the wrong folder.  So, workaround: manually construct the response to guarantee
  ;;that no matter what stupid route the browser tries to use, it's going to get redirected to the actual content.
  (context "*/css" []
    (GET "/:file" [file] {:status 200 :headers {"Content-Type" "text/css; charset=utf-8"} :body (slurp (str "resources/public/css/" file))}))
  
  ;; Gotta have the index
  (GET "/" [] (slurp "resources/public/html/index.html"))

  ;; The page formerly known as Index.
  (GET "/about" [] (slurp "resources/public/html/about.html"))

  ;; Will become the main page soon.
  (GET "/bootstrap" [] (slurp "resources/public/html/jumbotron.html"))

  ;; How many lines of code were used to make this site?
  (GET "/statistics" [] (stats-page))

  ;; Added for Javascript testing
  (GET "/js" [] (js-page))

  ;; Added for CSS testing
  (GET "/overflow" [] (overflow))
  
  ;; Doesn't matter where you're trying to go, I got you covered
  (context "/:title" [title]
    (GET "/"  [title] (default-page title [:p "If you sought " title " then you have found it."]))
    (GET "/*" [title] (default-page title [:p "Why do you seek to transcend " title "?"])))
  
  ;; Did you done goof?
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
