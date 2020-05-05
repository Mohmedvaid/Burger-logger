const express = require("express")
const exphbs = require("express-handlebars")

const app = express()
const PORT = process.env.PORT || 8080

 app.use(express.static("public"))



// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars");


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// Controllers (route handling)
require("../burger/controllers/burgers_controller.js")(app)

//app listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT)
})


