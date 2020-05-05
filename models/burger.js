
const queries = require("../config/orm")

var burger = {
  
  //call selectAll function from ORM
  getBurgers: async function(){
    let burgers= await queries.selectAll()
    return burgers;
  },
  //call insertOne function from ORM
  insertBurger: async function(burger){
    var burgers= await queries.insertOne(burger)
    return burgers;
  },
  //call updateBurger function from ORM
  updateBurger: async function(id){
    var burger = await queries.updateBurger(id)
    return burger;
  },
  //call getBurgerById function from ORM
  getBurgerById: async function(id){
    var burger = await queries.getBurgerById(id);
    return burger;
  }

};

// Export the database functions for the controller
module.exports = burger;