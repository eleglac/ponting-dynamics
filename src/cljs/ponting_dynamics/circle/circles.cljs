(ns ponting-dynamics.circles
  (:require [ponting-dynamics.collision :as pd-c]
            [quil.core :refer [stroke stroke-weight fill ellipse-mode ellipse
                               smooth frame-rate background defsketch width height] 
                       :include-macros true]))

(def wide  (.-innerWidth js/window))
(def high  (.-innerHeight js/window))
(def popl 150)
(def rate 60)

(defn make-agent
  "Creates an agent, which is a map containing the included params and a few others."
  
  [x y rad shell core]
  
  {:id    (gensym)
   :x     x
   :y     y
   :rad   rad
   :shell shell
   :core  core
   :d-x   0 
   :d-y   0
   :colliding?  false
   :stationary? false})

(defn draw-agent
  "Draws an agent.  The agent is visualized as an circle, with a 'shell' and a 'core.'"
  
  [agent]
  
  (let [[rgb f]   (:shell agent)
        [r g b l] (:core  agent)
        rad       (:rad   agent)
        x         (:x     agent)
        y         (:y     agent)]
    
    (stroke rgb f)
    (stroke-weight 2)
    (fill r g b l)
    (ellipse-mode :radius)
    (ellipse x y rad rad)))

(defn populate
  "Creates a list of entities of either type :agent or :food.  If neither of those is
   the type given as *type, will create a list of nil, I think."
  
  [pop-count]
  
  (repeatedly pop-count
    (fn []
      (let [x     (rand-int wide)
            y     (rand-int high)
            rad   5 
            shell [200 255]
            core  [(rand-int 255) (rand-int 255) (rand-int 255) 255]] 

        (make-agent x y rad shell core)))))

(defn flow-back 
  "If coord is negative, adjust it to flow to other side of screen.  Otherwise pass through."

  [limit coord]

  (if (pos? coord)
    coord
    (- limit coord)))

(defn wrap-around
  "Attempts to allow agents to travel across the edges of the screen.  Top wraps to bottom,
   left wraps to right, and vice-versa for each."

  [agent]

  (let 
    [x  (if (pos? (:d-x agent))
          (rem (+ (:d-x agent) (:x agent)) (width))
          (flow-back (width) (+ (:d-x agent) (:x agent))))
     y  (if (pos? (:d-y agent))
          (rem (+ (:d-y agent) (:y agent)) (height))
          (flow-back (height) (+ (:d-y agent) (:y agent))))]

    (assoc agent :x x :y y)))

(defn change-movement [agent]
  (assoc agent :d-x (- 2 (rand-int 5))
               :d-y (- 2 (rand-int 5))
               :stationary? false
               :colliding? false
               :rad (min (inc (:rad agent)) 20)))

(defn stationary? 
  "Attempts to allow for changing of agent direction when it is clear that the agent
   has become stationary, either because it never moved or because it is stuck in a 
   corner."
  
  [agent]

  (let [d-agent (wrap-around agent)]
    (if (= agent d-agent) 
      (assoc d-agent :stationary? true)
      (assoc d-agent :stationary? false
                     :rad (max (dec (:rad agent)) 5)))))

(defn update-agents
  "Take a list of agents and return a new list, very similar to the old one except that
   what needs changing has been changed.  I'm on a horse."
  
  [agents]

  (let [d-agents (map stationary? (pd-c/collision-detect agents))]
    (map
      (fn [agent]
        (if (or (:stationary? agent) (:colliding? agent))
          (change-movement agent)
          agent))
      d-agents)))

(defn setup []
  (smooth)
  (frame-rate rate)
  (def agent-list (atom (populate popl))))

(defn draw []
  (background 32)
  (doall (map draw-agent (swap! agent-list update-agents))))

(defsketch circles
  :title "An animation of circular antagonism."
  :host "quil-circles"
  :setup setup
  :draw draw
  :renderer :p2d
  :size [wide high])
