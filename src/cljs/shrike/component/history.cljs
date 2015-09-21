(ns shrike.component.history
  (:require [ajax.core :refer [GET]]
            [goog.string :as string]
            [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]))

(defn get-history
  [data]
  (GET "/api/ursacorp/test-repo/build"
       {:handler #(.log js/console "Yay!" (str %))
        :error-handler #(.log js/console "Boo!")}))

(defcomponent build-row
  [build owner]
  (render
    [_]
    (dom/tr
      (dom/td
        {:class "col-md-2"}
        (dom/a
          {:href "#"}
          (str "#" (:build_id build))))
      (dom/td
        {:class "col-md-2"}
        (subs (:sha build) 0 10))
      (dom/td
        {:class "col-md-2"}
        "master")
      (dom/td
        {:class "col-md-2"}
        (:started_at build))
      (dom/td
        {:class "col-md-2"}
        (:status build)))))

(defcomponent history
  [{:keys [repo] :as data} owner]
  (render
    [_]
    (dom/div
      {:class "well well-lg"
       :style {:background-color "#252830"}
       } (dom/div
      {:class "table-full"}
      (dom/div
        {:class "table-responsive"}
        (dom/table
          {:class "table"
           :data-sort "table"}
          (dom/thead
            (dom/tr
              (dom/th
                {:class "col-md-2"}
                "Build")
              (dom/th
                {:class "col-md-2"}
                "Commit")
              (dom/th
                {:class "col-md-2"}
                "Branch")
              (dom/th
                {:class "col-md-2"}
                "Started at")
              (dom/th
                {:class "col-md-2"}
                "Status")))
          (dom/tbody
            (om/build-all build-row (:builds repo)))))))))
