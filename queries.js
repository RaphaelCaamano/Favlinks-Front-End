require('dotenv').config() // this exposes our env variables to our app!

// Step 1) Establish a connection to our Postgres database 

const Pool = require('pg'). Pool // a connection object to Postgres 

const pool = new Pool({

    user: process.env.DB_USERNAME, 
    host: process.env.DB_HOST, 
    database: process.env.DB_NAME, 
    password: process.env.DB_PASSWORD, 
    port: process.env.DB_HOST  
})
