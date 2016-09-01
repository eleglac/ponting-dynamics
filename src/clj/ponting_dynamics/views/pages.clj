(ns ponting-dynamics.views.pages
  (:require [ponting-dynamics.views.common :refer [define-page]]))

(def about-page 
  (define-page {:head-data {:title "Ponting Dynamics | About Us"}
                :body-data {:topic "About Us" :material "This... is Ponting Dynamics Dot Org."}}))

(def cljs-page
  (define-page {:head-data {:title "Ponting Dynamics | Clojurescript Example Page"}
                :body-data {:topic "Clojurescript Example" :material-id "add-text-here"}
                :scripts ["https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js" 
                          "https://code.jquery.com/color/jquery.color-2.1.0.min.js" 
                          "js/dynamic.js" 
                          "js/generic.js"]}))

(def contact
  (define-page {:head-data {:title "Ponting Dynamics | Contact Us"}
                :body-data {:topic "Contact Information"
                            :material [:div.contact 
                                       [:p "The Ponting Dynamics team looks forward to hearing from you!"]
                                       [:p "Email: " [:a {:href "mailto:info@pontingdynamics.org"} "info@pontingdynamics.org"]]
                                       [:p "Phone: +1.323.510.6473"]]}}))

(def samples
  (define-page {:head-data {:title "Ponting Dynamics | Some Interesting Experiments"}
                :body-data {:topic "Fun Stuff"
                            :material [:div.fun-stuff
                                       [:p "Here there be stuff of potential amusement."]
                                       [:p [:a {:href "/cljs"} "The Clojurescript Battleship Game"]]
                                       [:p [:a {:href "/statistics"} "Code Investment Report"]]
                                       [:p [:a {:href "/circles"} "The Ponting Dynamics Low-Velocity Circle Collider"]]
                                       [:p [:a {:href "/tri"}] "Cool Visualization"]]}}))

(def jobs
  (define-page {:head-data {:title "Ponting Dynamics | Employment Opportunities"}
                :body-data {:topic "Careers"
                            :material [:div.careers
                                       [:p "We're not hiring right now."]
                                       [:p "Wait.  Wait!  There is ONE position available."]
                                       [:p "It's an entry level position requiring ten years of experience."]
                                       [:p "Please direct your resume, cover letter, and SSN to " [:a {:href "mailto:jobs@pontingdynamics.org"} "jobs@pontingdynamics.org"]]
                                       [:p "We promise to get back to you in 1-3 business cycles."]]}}))
