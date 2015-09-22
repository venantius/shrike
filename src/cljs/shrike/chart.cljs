(ns shrike.chart
  "Functions for dealing with ChartJS")

(defn nuke-charts
  "Iterate through the known chart instances and destroy them."
  []
  (doseq [[k v] (js->clj (.-instances js/Chart))]
    (.destroy (clj->js v))))
