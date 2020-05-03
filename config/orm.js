let connection = require('./connection')

async function selectAll(){
    let burgers = await connection.query(`SELECT * FROM burgers`)
    return burgers;
}

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
    insertOne: async function (burger){
                 console.log(`hitting ORM`);
                 var insertburger = await connection.query(`INSERT INTO burgers (burger_name, devoured)
                 VALUES ('${burger}', false)`)
                 console.log(`Burger Inserted`);
    
    }
    //updateburger: updateOne()
}
