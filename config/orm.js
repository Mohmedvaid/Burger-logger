let connection = require('./connection')

async function selectAll(){
    let burgers = await connection.query(`SELECT * FROM burgers`)
    //console.log(burgers);
    return burgers;
}

// async function insertOne(burger){
//     let insertburger = await connection.query(`INSERT INTO burgers (burger_name, devoured)
//     VALUES (${burger}, false)`)
//     console.log(`Burger Inserted`);
// }

// async function updateOne(id){
//     let updateburger = await connection.query(`
//     UPDATE burgers
//     SET devoured = true
//     WHERE id = ${id};
//     `)
//     console.log(`Burger Updates`);
// }

module.exports  = {
    selectAll: selectAll(),
    //insertburger: insertOne(),
    //updateburger: updateOne()
}
