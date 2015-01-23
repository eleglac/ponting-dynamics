(ns ponting-dynamics.views
  (:require [hiccup.core :refer [html]]
            ;[ponting-dynamics.core.counter :refer [stats]]
            ))

(defn boilerplate [content]
  (html
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

(defn make-stat-htmls 
  "Assumes stats come in the form {'filetype-str' loc-int...}
   Will produce a series of <p> elements with the info in them.
   I think."

  [raw-stats]

  (let [filetypes (keys raw-stats)]
    (map 
      (fn [k]
        [:p (str k ": " (k raw-stats) " lines of code")])
      filetypes)))

(def stats-page
  (boilerplate
    (page-subject "Statistics")
    (page-content )
    )
  )
