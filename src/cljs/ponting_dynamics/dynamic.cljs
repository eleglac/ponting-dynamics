(ns ponting-dynamics.dynamic
  (:require [jayq.core :refer [$ css html animate hover load]]))

(def backgrounds ["../img/wood-water.jpg"
                  "../img/blurry-city-traffic.jpg"
                  "../img/library-books.jpg"
                  "../img/orange-tree.jpg"
                  "../img/old-tools.jpg"
                  "../img/designer-desk.jpg"
                  "../img/desk-and-chair.jpg"])

(defn make-highlightable [element, highlight-color]
  (let [default-color (css element :background-color)
        default-html  (html element)]
    
    (hover element
      (fn [] (html element (str default-html " &raquo;")))
      (fn [] (html element default-html)))))

;(load ($ :window) (make-highlightable ($ :body) "rgba(0,0,0,0.0)"))
