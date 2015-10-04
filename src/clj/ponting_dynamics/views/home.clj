(ns ponting-dynamics.views.home
  (:require [hiccup.page :refer [html5]]))

(defn main-page []
  (html5
    [:head
     [:title "Ponting Dynamics | The World Is Right Behind You"]
     [:meta {:name "description" :content "Ponting Dynamics is an internet content development consultancy located in Los Angeles, CA."}]
     [:meta {:name "author" :content "Alex J. Ponting"}]
     [:meta {:name "keywords" :content "HTML, CSS, Clojure, Clojurescript, JavaScript, jQuery, Bootstrap, Internet, Consulting"}]
     [:link {:rel "stylesheet" :type "text/css" :href "css/styles.css"}]]
    [:body
     [:div.preload]
     [:div.wrapper {:id "base"}]
     [:div.wrapper {:id "splash"}]
     [:div.wrapper
      [:div.banner.pane
       [:div.row
        [:p#pdyn-title "PONTING DYNAMICS"]]
       [:div.row
        [:p#pdyn-slogan "&raquo; THE WORLD IS RIGHT BEHIND YOU &laquo;"]]
       [:div.row
        [:a#feeder {:href "/about"} "Take The Tour"]]]] 
     [:div.hideable-container.foot
      [:div.hideable.navigation.pane
       [:div.item [:a {:href "/cljs"} "JS Example"]]
       [:div.item [:a {:href "/statistics"} "Code Counts"]]
       [:div.item [:a {:href "/about"} "About Us"]]
       [:div.item {:style "border: none"} [:a {:href "mailto:info@pontingdynamics.org"} "info@pontingdynamics.org"]]]]
     [:script {:src "https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"}]
     [:script {:src "https://code.jquery.com/color/jquery.color-2.1.0.min.js"}]
     [:script {:src "js/dynamic.js"}]]))
