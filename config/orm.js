let connection = require('./connection')

async function selectAll(){
    let burgers = await connection.query(`SELECT * FROM burgers`)
    return burgers;
}


module.exports  = {
    //query to db to get everything from the table
    selectAll: async function (){
        let burgers = await connection.query(`SELECT * FROM burgers`)
        return burgers;
    },
    //query to db to insert the new burger into table
    insertOne: async function (burger){
                 console.log(`hitting ORM`);
                 var insertburger= await connection.query(`INSERT INTO burgers (burger_name, devoured)
                 VALUES ('${burger}', false)`)
                 console.log(`Burger Inserted`);
                return insertburger;
    
    },
    //query to update the burger(Devoured)
    updateBurger: async function (id){
                let updateburger = await connection.query(`
                UPDATE burgers
                SET devoured = true
                WHERE id = ${id};
                `)
                console.log(`Burger Updates`);
    },
    //get burger by id
    getBurgerById: async function(id){
        let burger = await connection.query(`
            Select burger_name from burgers where id = ${id};
        `)
        return burger;
    }
}
