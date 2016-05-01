(ns ponting-dynamics.views.circles
  (:require [hiccup.page :refer [html5]]))

(defn circles-page []
  (html5
    [:head
     [:title "Ponting Dynamics | The Possibilities are Endless"]
     [:meta {:name "description" :content "Ponting Dynamics excels at navigating the fast-paced world of global rapid temporizing."}]
     [:meta {:name "author" :content "Alex J. Ponting"}]
     [:meta {:name "keywords" :content "Quil, HTML, CSS, Clojure, Clojurescript, JavaScript, jQuery, Bootstrap, Internet, Consulting"}]
     [:link {:rel "stylesheet" :type "text/css" :href "css/circles.css"}]]
    [:body
     [:div.wrapper
      [:canvas#quil-circles]]
     [:script {:src "js/processing-1.4.8.js"}]
     [:script {:src "js/circles.js"}]]))
