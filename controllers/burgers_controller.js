const express = require('express')
const burger = require('../models/burger')

var express = require("express");


// setup app and port
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.static("public"));



//TODO
module.exports = function(app) {
  app.get("/index", async (req, res) => {
    try {
      res.send('IT WORKS')
      // res.render('product/allproducts', {
      //   products: await Product.findAll({}).map(product => product.dataValues)
      // })
    }
    catch(err) {
      res.render('product/error', {
        code: 500,
        msg: 'Something went wrong getting the products!',
      })
    }
  })
  app.get("/products/:id", async (req, res) => {
    try {
      const product = await Product.findOne({
        where: {
          id: req.params.id
        }
      })
      res.render('product/singleproduct', { ...product.dataValues })
    }
    catch(err) {
      res.render('product/error', {
        code: 404,
        msg: `Product #${ req.params.id } not found!`,
      })
    }
  })
}
