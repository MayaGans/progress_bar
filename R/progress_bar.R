progress_bar <- function(n = 3, args) {
  
  deps <- htmltools::htmlDependency(
    name = "progress_bar",
    version = "1.0",
    src = "inst",
    script = "js/progress_bar.js",
    stylesheet = "css/progress_bar.css"
  )
  
 progress_html <- div(class="container",
    div(class="progress__container",
    div(class="progress__bar js-bar"),
    div(class="progress__circle js-circle active", `data-index`=.1, 1),
    purrr::map(2:n, ~div(class="progress__circle js-circle", `data-index`=.x, .x))
    ),
    div(class="progress__body",
        purrr::pmap(list(1:n, args), ~div(class="progress_body_text", `data-show` = ..1, ..2))
    ),
    div(class="progress__wrapper",
      tags$button(class="progress__btn js-prev", disabled=TRUE, "Previous"),
      tags$button(class="progress__btn js-next", "Next")
    )
 )
 
  tagList(progress_html, deps)

}