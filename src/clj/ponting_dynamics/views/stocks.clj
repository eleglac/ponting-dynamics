(ns ponting-dynamics.views.stocks
  (:require [hiccup.page :refer [html5]]
            [pl.danieljanus.tagsoup :refer [parse]]
            
            [ponting-dynamics.views.common :refer [define-page]]
            ))


(defn stocks-page
  (define-page {:head-data {:title "Ponting Dynamics | Surreal-Time Stock Price Indicator"}
                :body-data {:topic "Stock Quote Engine"
                            :material [:div.stock-quote
                                       [:p "Stock quotes will be forthcoming."]]}}))
