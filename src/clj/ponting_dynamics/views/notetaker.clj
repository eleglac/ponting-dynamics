(ns ponting-dynamics.views.notetaker
  (:require [hiccup.page :refer [html5]]
            [pl.danieljanus.tagsoup :refer [parse]]))

(defn notetaker-page
  ([]
    (html5
      [:head
       [:title "Ponting Dynamics | Dynamic Article Summarizer"]
       [:meta {:name "description" :content "With Ponting Dynamics, getting the facts has never been easier."}]
       [:meta {:name "author" :content "Alex J. Ponting"}]
       [:meta {:name "keywords" :content "summary, article, HTML, CSS, Clojure, Clojurescript, JavaScript, jQuery, Bootstrap, Internet, Consulting"}]
       [:link {:rel "stylesheet" :type "text/css" :href "css/notetaker.css"}]]
      [:body
       [:div.wrapper
        [:div#entry-box
         [:table
          [:tr [:td [:p "Enter a link: "]]
               [:td [:form {:target "/notetaker" :method "POST"}
                     [:input.entry-field {:type "text" :name "link-text"}]]]]]]]]))
  ([req]
    (print req)
    (notetaker-page))
