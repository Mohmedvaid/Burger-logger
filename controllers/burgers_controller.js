
const burgers = require('../models/burger')

module.exports = function(app) {
  app.get("/index", async (req, res) => {
    try {
      res.render('../views/index.handlebars', {
      burgers: await burgers.getBurgers()
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


      res.render('../views/index.handlebars')
    }
    catch(err) {
      throw err;
    }
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
