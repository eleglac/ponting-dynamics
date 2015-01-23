(ns ponting-dynamics.views.stats
  (:require [ponting-dynamics.util.counter :refer [get-code-stats]]
            [ponting-dynamics.views.common :refer [standard-page]]))

(defn stat-content []
  (let [data (get-code-stats)]
    [:div#statistics
      [:p "This site has been built from the following resources: "]
      (map
        (fn [k]
          [:p (str (name k) ": " (data k) " lines of code")])
        (keys data))]))

(defn stats-page []
  (standard-page "Statistics" (stat-content)))
