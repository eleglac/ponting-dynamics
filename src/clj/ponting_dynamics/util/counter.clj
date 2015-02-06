(ns ponting-dynamics.util.counter
  (:require [clojure.java.io :refer [file]]
            [clojure.string :as s]))

;; Define what we're interested in: .clj, .cljs, .html, and .css files in the respective folders.

(def code-dirs ["resources/" "src/"])

(def code-re #".*\.(clj|cljs|html|css|js)")

(def code-res {:CSS #".*\.css" :Clojurescript #".*\.cljs" :HTML #".*\.html" :Clojure #".*\.clj" :Javascript #"dynamic.js"})

;; Then, generate a list of the files (not strings of file names!) that pique our interest

(defn walk [root pattern]
  (doall (filter #(re-matches pattern (.getName %))
                 (file-seq (file root)))))

(defn code-files [re dirs]
  (flatten (map #(walk % re) dirs)))

;; Once we have the list of interesting files, sort them and pull out the relevant data (currently, LOC for each type)

(defn sort-files [re files]
  (filter #(not (empty? (re-matches re (str %)))) files))

(defn file-loc [file]
  (->> (slurp file) (s/split-lines) (count)))

(defn total-loc [files]
  (reduce + (map file-loc files)))

;; Package the data into a convenient map - {:file-type loc-for-that-type... }

(defn gen-data [files type-map]
  (into {} 
    (map 
      (fn [k] {k (total-loc (sort-files (type-map k) files))})
      (keys type-map))))

;; And finally, a nice function to wrap it all up and make it easy to grab the code stats

(defn get-code-stats []
  (gen-data (code-files code-re code-dirs) code-res))
