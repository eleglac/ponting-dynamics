(ns ponting-dynamics.views.js-test
  (:require [ponting-dynamics.views.common :refer [boilerplate]]))

(defn js-page []
  (boilerplate [:script {:src "js/generic.js"}]))
