
const queries = require("../config/orm")

var burger = {
  // The variables cols and vals are arrays.
  getBurgers: async function(){
    let burgers= await queries.selectAll
    return burgers;
  },
  insertBurger: async function(burger){
    var burgers= await queries.insertOne(burger)
    return burgers;
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;