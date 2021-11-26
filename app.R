library(shiny)


ui <- fluidPage(
    progress_bar(
        list("Text1", 
             "Text2", 
             "Text3", 
             "Text 4",
             "Text 5",
             "Text 6"
             )
    )
)


server <- function(input, output) {
    
}

shinyApp(ui = ui, server = server)
