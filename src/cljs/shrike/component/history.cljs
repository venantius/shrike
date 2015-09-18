(ns shrike.component.history
  (:require [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]))

(defcomponent history
  [data owner]
  (render
    [_]
    (dom/div
      {:class "table-full"}
      (dom/div
        {:class "table-responsive"}
        (dom/table
          {:class "table"
           :data-sort "table"}
          (dom/thead
            (dom/tr
              (dom/th
                "Thing")))
          (dom/tbody
            (dom/tr
              (dom/td
                "Conent"))))
        ()
        )
      )))
