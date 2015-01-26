(ns ponting-dynamics.generic)


(def ship-start (rand-int 8))

(def ship {(str ship-start) false (str (+ ship-start 1)) false (str (+ ship-start 2)) false})

(defn and-fn [& bools] (empty? (filter #(= false %) bools))) ;; hacky hacky hack, wanted to just do (apply and [seq of bools]) but can only do apply on fns? Over my head...

(defn hit? [ship target]
  (.log js/console (str ship))
  (if (and (contains? ship target) (not (ship target)))
    (do
      (js/alert "A hit!  Dozens die in agony.")
      (assoc ship target true))
    (do
      (js/alert "A miss.  The sailors thank their lucky stars.")
      ship)))

(defn fire-shot [ship target]
  (if (and (contains? ship target) (ship target))
    (do
      (js/alert "You already hit that section, Queeg :/")
      ship)
    (hit? ship target)))

(defn is-sunk? [ship]
  (apply and-fn (vals ship)))

(defn game [ship]
  (loop [shots 0
         ship ship]
    (if (is-sunk? ship)
      (do
        (js/alert (str "You won with " shots " shots.  Were the sailor's lives worth it, you monster?")))
      (do
        (let [target (js/prompt "Yo, fire a shot whereever.  Make it a number 0-9 or you will surely miss.")]
          (recur (inc shots) (fire-shot ship target)))))))
(do
  (.write js/document "<h1>A Very Clojurescripty Test Page<h2><p>The game is battleship!  In one dimension!</p><p>The ship is three units long, and the search space is ten units wide. glhf!</p><p>If you want to play again you can refresh the page.  I'll add a button or something later.</p>")
  (game ship))
