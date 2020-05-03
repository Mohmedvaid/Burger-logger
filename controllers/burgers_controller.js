
const burgers = require('../models/burger')

module.exports = function(app) {
  app.get("/index", async (req, res) => {
    try {
      let temp = await burgers.getBurgers()
      res.render('../views/index.handlebars', {
      burgers: temp,
      devoured: temp
      })
    }
    catch(err) {
      throw err;
    }
  })

  app.post("/api/burgers", async (req, res) => {
    try {
      console.log(Object.keys(req.body)[0]);
      let temp = await burgers.insertBurger(Object.keys(req.body)[0])

       temp = await burgers.getBurgers()
        res.render('../views/index.handlebars', {
        burgers: temp,
        devoured: temp
        })
     }
      catch(err) {
      throw err;
     }
  })

  app.put('/api/burgers/:id', async function (req, res) {
    try {
      console.log(req.params.id);
      let temp = await burgers.updateBurger(req.params.id)
      
    } catch (err) {
      throw err
    }

    res.send('Got a PUT request at /user')
  })


  // app.get("/products/:id", async (req, res) => {
  //   try {
   
  //     res.render('product/singleproduct', { ...product.dataValues })
  //   }
  //   catch(err) {
  //     throw err;
  //   }
  // })
}
