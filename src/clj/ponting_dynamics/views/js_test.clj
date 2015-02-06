(ns ponting-dynamics.views.js-test
  (:require [ponting-dynamics.views.common :refer [define-page]]))

(def js-page
  (define-page {:head-data {:title "Ponting Dynamics | Javascript Example Page"}
                :body-data {:topic "Javascript Test" :material-id "add-text-here"} 
                :scripts ["js/generic.js"]}))
