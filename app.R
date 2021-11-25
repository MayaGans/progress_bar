library(shiny)


ui <- fluidPage(
    progress_bar(3, c("Text1", "Text2", "Text3"))
)


server <- function(input, output) {
    
}

shinyApp(ui = ui, server = server)
