library(shiny)

ui <- fluidPage(stepper(c("Text 1", "Text 2", "Text 3")))
server <- function(input, output) { }

shinyApp(ui = ui, server = server)
