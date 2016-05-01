(ns ponting-dynamics.views.circles
  (:require [hiccup.page :refer [html5]]))

(defn circles-page []
  (html5
    [:head
     [:title "Ponting Dynamics | The Possibilities are Endless"]
     [:meta {:name "description" :content "Home of the Ponting Dynamics Variable-Radius Circle Collider."}]
     [:meta {:name "author" :content "Alex J. Ponting"}]
     [:meta {:name "keywords" :content "Quil, HTML, CSS, Clojure, Clojurescript, JavaScript, jQuery, Bootstrap, Internet, Consulting"}]
     [:link {:rel "stylesheet" :type "text/css" :href "css/circles.css"}]]
    [:body
     [:div.wrapper
      [:canvas#quil-circles]]
     [:script {:src "js/processing-1.4.8.js"}]
     [:script {:src "js/circles.js"}]]))
