
const burgers = require('../models/burger')

module.exports = function(app) {

//home
  app.get("/", async (req, res) => {
    try {
      //get everything from the database
      let temp = await burgers.getBurgers()
      console.log(temp);
      //render the response in the index.handlebars (eventually to main.handlebars)
      res.render('../views/index.handlebars', {
      burgers: temp,
      devoured: temp
      })
    }
    catch(err) {
      throw err;
    }

  })

  //post the data to the database
  app.post("/api/burgers", async (req, res) => {
    try {
      
      let temp;
      temp = await burgers.insertBurger(Object.keys(req.body)[0])
      res.send(temp)
     }
      catch(err) {
      throw err;
     }
  })

  //update the burger from False (not devoured) to True (devoured)
  app.put('/api/burgers/:id', async function (req, res) {
    try {
      console.log(req.params.id);
      let temp = await burgers.updateBurger(req.params.id)
      
    } catch (err) {
      throw err
    }

    res.send('Devoured success')
  })

}
