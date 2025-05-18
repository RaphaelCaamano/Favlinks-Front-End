const express = require('express') //importing the express function from the express
const app = express() // we're setting a new variable called app to be an express

const port = 3000 // defining the port we want our app to run on

// add some middleware to allow us to work with JSON data
app.use(express.json())  

// example route for the server
app.get("/", (req, res)=>{

    res.send("Node / Express server is operational!")
})

app.get("/something/different", (req, res)=>{-
}) 

let favLinks = [ 
]

// CRUD API 
// API function 1 create something 
app.post("/favlink", (req, res){-
}) 

// API function 2 read something 
app.get("/favlinks", (req, res)>(-
}) 

// API function 3 - update something 
app.put("/favlink", (req, res)=>{ 
    res.send("Updating something!") 
})
