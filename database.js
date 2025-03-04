const {Client} = require('pg')

const client = new Client({ 
host: "localhost",
user:"postgres",
port: 5432,
password: "0000",
database: "giu_register"
})

module.exports= client