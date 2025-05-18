// Step 1) Establish a connection to our Postgres database 

const Pool = require('pg'). Pool // a connection object to Postgres 

const pool = new Pool({

    user: 'me',
    host: 'losthost',
    database: 'favlinksapi',
    password: '', 
    port: 5432 
})
