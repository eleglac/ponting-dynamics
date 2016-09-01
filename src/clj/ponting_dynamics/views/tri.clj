(ns ponting-dynamics.views.tri
  (:require [hiccup.page :refer [html5]]))

(defn tri-page []
  (html5
    [:head
     [:title "Ponting Dynamics | Computer Personality Visualizer"]
     [:meta {:name "description" :content "It's a cool visualizer, what more do you want?"}]
     [:meta {:name "author" :content "Alex J. Ponting"}]
     [:meta {:name "keywords" :content "Quil, HTML, CSS, Clojure, Clojurescript, JavaScript, jQuery, Bootstrap, Internet, Consulting"}]
     [:link {:rel "stylesheet" :type "text/css" :href "css/tri.css"}]]
    [:body
     [:div.wrapper
      [:canvas#quil-tri]]
     [:script {:src "js/processing-1.4.8.js"}]
     [:script {:src "js/tri.js"}]]))
