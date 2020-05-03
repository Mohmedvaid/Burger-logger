
const burgers = require('../models/burger')

module.exports = function(app) {
  app.get("/index", async (req, res) => {
    try {
      res.render('../views/index.handlebars', {
      burgers: await burgers.getBurgers()
      })
      console.log(burgers);
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
