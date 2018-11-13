(ns ponting-dynamics.util.financial-data
  (:import (javax.net.ssl SNIHostName))
  (:require         
            [clojure.data.json :as json]

            [com.rpl.specter :as specter]
           
            [environ.core :refer [env]]

            [org.httpkit.client :as http]
            ))

;; from http-kit issue 334: SSL handshake failure requires... this:
;;;; NB: the type hints were removed, which may be a problem?? do not
;;;; understand well enough to say for sure

(defn sni-configure
  [ssl-engine uri]
  
  (let [ssl-params (.getSSLParameters ssl-engine)]
    (.setServerNames ssl-params [(SNIHostName. (.getHost uri))])
    (.setSSLParameters ssl-engine ssl-params)))

(def client (http/make-client {:ssl-configurer sni-configure}))

;; important options

(def options {:timeout 1000
              :user-agent "Ponting Dynamics Surreal-Time Stock Quoter"
              :method :get
              ;; Alpha Vantage root query URL
              :url "https://www.alphavantage.co/query"

              ;; query params
              :query-params {:function "GLOBAL_QUOTE"
                             ;;:symbol "AAPL"
                             :apikey (env :av-api-key)
                             }

              ;; from above, to fix issue 334?
              :client client
              })

(defn request-handler [{:keys [status headers body error]}]
  (if error
    {:error error}
    (json/read-str body)
    ))

(defn get-quote 
  "Given a ticker symbol, request the quote for that symbol.  Returns
  the error, if there is one; the response body (presumably a JSON string)
  otherwise."

  [ticker]
  
  @(http/request 
     (specter/setval [:query-params :symbol] ticker options) 
     request-handler))
