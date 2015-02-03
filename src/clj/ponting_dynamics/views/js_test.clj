(ns ponting-dynamics.views.js-test
  (:require [ponting-dynamics.views.common :refer [boilerplate]]))

(defn js-page []
  (boilerplate [:script {:src "https://code.jquery.com/jquery-1.11.2.min.js"}] 
               [:script {:src "https://code.jquery.com/color/jquery.color-2.1.0.min.js"}]
               [:script {:src "js/generic.js"}]))

