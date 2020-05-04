
const burgers = require('../models/burger')

module.exports = function(app) {


  app.get("/", async (req, res) => {
    try {
      console.log(`/ rout was hit`);
      let temp = await burgers.getBurgers()
      console.log(temp);
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
      let temp;
      temp = await burgers.insertBurger(Object.keys(req.body)[0])
      console.log(temp.insertId);
      //temp.insertId
      res.send(temp)
     }
      catch(err) {
      throw err;
     }
  })

//   app.post('/employees', function (req, res) {
//     var postData  = req.body;
//     connection.query('INSERT INTO employee SET ?', postData, function (error, results, fields) {
//      if (error) throw error;
//      res.end(JSON.stringify(results));
//    });
//  });

  app.put('/api/burgers/:id', async function (req, res) {
    try {
      console.log(req.params.id);
      let temp = await burgers.updateBurger(req.params.id)
      
    } catch (err) {
      throw err
    }

    res.send('Devoured success')
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
