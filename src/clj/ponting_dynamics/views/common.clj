(ns ponting-dynamics.views.common
  (:require [hiccup.page :refer [html5]]))

(def default-links {"Home"       "/"
                    "Fun Stuff"  "/samples"
                    "About Us"   "/about" 
                    "Employment" "/jobs" 
                    "Contact Us" "/contact"})

(def default-scripts ["https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"
                      "https://code.jquery.com/color/jquery.color-2.1.0.min.js"
                      "js/dynamic.js"])

(defn page-head 
  "Head-info defines the <head> data for a page.  Can take a map - defineable parameters are:
   :title       str - sets <title> str </title
   :description str - sets <meta name=description content=str
   :keywords    str - similar to :description
   :stylesheets []  - assumes a list of links and will add a <link rel=stylesheet...> for each in that list"

  [{:keys [title description keywords stylesheets]}]
  
  [:head
   [:title (or title "Ponting Dynamics | Solutions You Need")]
   [:meta {:name "description" :content (or description "Ponting Dynamics is an internet content development consultancy located in Los Angeles, CA.")}]
   [:meta {:name "keywords"    :content (or keywords "HTML, CSS, Javascript, jQuery, Clojure, Clojurescript, Hiccup, Bootstrap, SASS, Internet, Consulting")}]
   [:meta {:name "author"      :content "Alex J. Ponting"}]
   (if stylesheets 
     (map (fn [link] [:link {:rel "stylesheet" :type "text/css" :href link}]) stylesheets)
     [:link {:rel "stylesheet" :type "text/css" :href "css/styles.css"}])])

(defn generate-link-html 
  "Generate a list of links, currently assumed to sit inside a hideable footer pane.
  Expects a map of {display-text link-target} pairs."
  
  [links]
  
  (map (fn [[k v]] [:div.item [:a {:href v} k]]) links))

(defn footer 
  "Produces a hideable footer containing whatever links are in {links}."
  
  [links]
  
  [:div.hideable-container.foot
   [:div.hideable.navigation.pane (generate-link-html links)]])

(defn generate-script-html
  "Similar to generate-link-html, but expects a plain list instead of a map."

  [scripts]
  
  (map (fn [src] [:script {:src src}]) scripts))

(defn page-topic
  "Wraps a standard page topic in the appropriate presentation tags.  Can take a map with:
  :topic    str - The actual text to be displayed as the page topic, defaults to 404
  :topic-id str - An optional id, if the page topic needs to be uniquely hooked or styled or whatever"
  
  [{:keys [topic topic-id]}]
  
  [:div.presentation.topic
   [:p {:id (or topic-id "page-topic")} [:span (or topic "404 - Not Found")]]])

(defn page-material 
  "Similar to page-topic, provides appropriate wrapper for standard page material i.e. text/html to be displayed, and can take a similar map argument."
  
  [{:keys [material material-id]}]
  
  [:div.pane.presentation.material 
   [:div {:id (or material-id "page-material")} (or material "The content you have requested is not available at this time.")]])

(defn background-layer
  "Establishes <body> and provides hook divs for background animation."
  
  [& content]
  
  [:body
   [:div#preload]
   [:div.wrapper {:id "base"}]
   [:div.wrapper {:id "fadeable"}]
   content])

(defn content-layer 
  
  [{:keys [leading topic topic-id material material-id trailing]}]
  
  [:div.wrapper
    leading
    (page-topic {:topic topic :topic-id topic-id})
    (page-material {:material material :material-id material-id})
    trailing])

(defn define-page
  
  [{:keys [head-data body-data links scripts]}]
  
  (html5
    (page-head head-data)
    (background-layer 
      (content-layer body-data)
      (footer (or links default-links))
      (generate-script-html (or scripts default-scripts)))))

(def not-found-page
  (define-page {:head-data {:title "Ponting Dynamics | Not Found"}}))
