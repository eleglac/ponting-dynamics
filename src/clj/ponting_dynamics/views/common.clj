(ns ponting-dynamics.views.common
  (:require [hiccup.page :refer [html5]]
            ))

(defn boilerplate [& content]
  (html5
    [:head 
      [:title "Ponting Dynamics | What You Need, When I Want To Do It"]
      [:link {:rel "stylesheet" :type "text/css" :href="css/layout.css"}]
      [:link {:rel "stylesheet" :type "text/css" :href="css/styles.css"}]]
    [:body 
      [:div.wrapper content]
      ;[:script {:src "js/generic.js"}]
      ]))

(defn page-subject [title & title-id]
  [:div.pane.top
    [:div.content
      [:div.subject
        [:p [:span {:id (or title-id "my-name")} title]]]]])

(defn page-content [content]
  [:div.pane.bottom
    [:div.content
      [:div.material content]]])

(defn standard-page [title content]
  (boilerplate 
    (page-subject title)
    (page-content content)))
