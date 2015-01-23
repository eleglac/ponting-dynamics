(ns ponting-dynamics.core.counter
  (:require [clojure.java.io :refer [file]]
            [clojure.string :as s]))

(def code-dirs ["resources/" "src/"])

(def code-re #".*\.(clj|cljs|html|css)")

(defn walk [root pattern]
  (doall (filter #(re-matches pattern (.getName %))
                 (file-seq (file root)))))

(def type-map {"s" "css" "m" "html" "j" "cljs" "l" "clj"})

(def code-files
  (map #(walk % code-re) code-dirs))

(defn file-loc [file]
  (->> (slurp file) (split-lines) (count)))

(defn file-key [file]
  (str (nth (reverse file) 1)))

(defn file-counts [files]
  ;; TODO: Make it work
  nil)
