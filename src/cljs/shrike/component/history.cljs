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
  [{:keys [build_id name owner sha started_at status] :as build} owner]
  (render
   [_]
   (dom/tr
    (dom/td
     {:class "col-md-2"}
     (dom/a
      {:href (str "/gh/" owner "/" name "/" build_id)}
      (str "#" build_id)))
    (dom/td
     {:class "col-md-2"}
     (dom/a
      {:href (str "https://github.com/" owner "/" name "/commit/" sha)}
      (subs sha 0 10)))
    (dom/td
     {:class "col-md-2"}
     "master")
    (dom/td
     {:class "col-md-2"}
     started_at)
    (dom/td
     {:class "col-md-2"}
     status))))

(defcomponent history
  [{:keys [repo] :as data} owner]
  (render
   [_]
   (dom/div
    (dom/div
     {:class "well table-full"
      :style {:background-color "#252830"}}
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
        (om/build-all build-row (:builds repo))))))
    (dom/div
     {:class "row"
      :style {:display "block"
              :margin-left "auto"
              :margin-right "auto"
              :text-align "center"}}
     (dom/nav
      (dom/ul
       {:class "pagination pagination-lg"}
       (dom/li
        (dom/a
         {:href "#"}
         "«"))
       (dom/li
        (dom/a
         {:href "#"}
         "1"))
       (dom/li
        (dom/a
         {:href "#"}
         "2"))
       (dom/li
        (dom/a
         {:href "#"}
         "3"))
       (dom/li
        (dom/a
         {:href "#"}
         "4"))
       (dom/li
        (dom/a
         {:href "#"}
         "5"))
       (dom/li
        (dom/a
         {:href "#"}
         "»"))))))))
