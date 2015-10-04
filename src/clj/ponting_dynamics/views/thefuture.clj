(ns ponting-dynamics.views.thefuture
  (:require [hiccup.page :refer [html5]]))

(defn future-page []
  (html5
    [:head
     [:title "Ponting Dynamics | The Future Is Before You"]
     [:meta {:name "description" :content "Ponting Dynamics excels at navigating the fast-paced world of global rapid temporizing."}]
     [:meta {:name "author" :content "Alex J. Ponting"}]
     [:meta {:name "keywords" :content "The Future, HTML, CSS, Clojure, Clojurescript, JavaScript, jQuery, Bootstrap, Internet, Consulting"}]
     [:link {:rel "stylesheet" :type "text/css" :href "css/future.css"}]]
    [:body
     [:div.wrapper
      [:div.circle
       [:p "THE FUTURE!"]]]]))
