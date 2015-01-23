(ns ponting-dynamics.util.counter
  (:require [clojure.java.io :refer [file]]
            [clojure.string :as s]))

(def code-dirs ["resources/" "src/"])

(def code-re #".*\.(clj|cljs|html|css)")

(defn walk [root pattern]
  (doall (filter #(re-matches pattern (.getName %))
                 (file-seq (file root)))))

(def type-map {"s" "CSS" "m" "HTML" "j" "Clojurescript" "l" "Clojure"})

(def code-files
  (map #(walk % code-re) code-dirs))

(defn file-loc [file]
  (->> (slurp file) (s/split-lines) (count)))

(defn file-type [file]
  ((str (nth (s/reverse file) 1)) type-map))

(defn assemble-file-data [files]
  (into {}
    (map
      (fn [file]
        {file {:kind (file-type file) :loc (file-loc file)}})
      files)))
