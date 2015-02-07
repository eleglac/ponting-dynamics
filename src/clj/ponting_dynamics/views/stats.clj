(ns ponting-dynamics.views.stats
  (:require [ponting-dynamics.util.counter :refer [get-code-stats]]
            [ponting-dynamics.views.common :refer [define-page]]))

(defn stat-content []
  (let [data (get-code-stats)]
    [:div#statistics
      [:p "My personal code expenditure for this site has been: "]
      (map
        (fn [k]
          [:p (str "- " (data k) " lines of " (name k))])
        (keys data))
      [:p (str "for a total of " (reduce + (vals data)) " lines of code overall.")]]))

(def stats-page 
  (define-page {:head-data {:title "Ponting Dynamics | Code Expenditure"}
                :body-data {:topic "Code Expenditure" :material (stat-content)}}))
