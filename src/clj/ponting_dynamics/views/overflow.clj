(ns ponting-dynamics.views.overflow
  (:require [ponting-dynamics.views.common :refer [standard-page]]))

(defn overflow []
  (standard-page "Testing CSS Failure"
    (repeat 20 [:p "Meant to overflow"])))
