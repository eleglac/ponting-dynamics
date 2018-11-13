(ns ponting-dynamics.views.stocks
  (:require [ponting-dynamics.util.financial-data :refer [get-quote]]
            [ponting-dynamics.views.common :refer [define-page]]
            ))

(defn stocks-page 
  "Takes a ticker symbol from the URL and presents the current quote
  for that stock."

  [ticker]

  (let [quote-data (first (vals (get-quote ticker)))]
    (define-page 
      {:head-data 
       {:title "Ponting Dynamics | Surreal-Time Stock Price Indicator"}
       :body-data 
       {:topic (str "Quote Data for: " ticker) 
        :material 
        [:div.stock-quote
         [:table
          (map (fn [[k v]] [:tr [:td k] [:td v]]) quote-data)]]

        }})))
