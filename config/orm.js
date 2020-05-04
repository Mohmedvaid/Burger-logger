let connection = require('./connection')

async function selectAll(){
    let burgers = await connection.query(`SELECT * FROM burgers`)
    return burgers;
}


module.exports  = {
    selectAll: async function (){
        let burgers = await connection.query(`SELECT * FROM burgers`)
        return burgers;
    },
    insertOne: async function (burger){
                 console.log(`hitting ORM`);
                 var insertburger= await connection.query(`INSERT INTO burgers (burger_name, devoured)
                 VALUES ('${burger}', false)`)
                 console.log(`Burger Inserted`);
                return insertburger;
    
    },
    updateBurger: async function (id){
                let updateburger = await connection.query(`
                UPDATE burgers
                SET devoured = true
                WHERE id = ${id};
                `)
                console.log(`Burger Updates`);
    },
    getBurgerById: async function(id){
        let burger = await connection.query(`
            Select burger_name from burgers where id = ${id};
        `)
        return burger;
    }
}
