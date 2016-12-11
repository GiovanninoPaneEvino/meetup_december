library(mybar)
library(shiny)
data <- read.delim("test/data.tsv")

ui <- fluidPage(
  sliderInput("slider_test","move the first bar",min=0,max=1,value=0.1),
  mybarOutput("my_bar_test")
)
server <- function(session,input,output){
  output$my_bar_test <- renderMybar({
    data[data$letter=="A",]$frequency <- input$slider_test
    mybar(data)})
}

shinyApp(ui,server)
