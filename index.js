const express = require('express')
const app = express()
// const port = 
const {MongoClient} = require('mongodb');

const client = new MongoClient(uri)

function DatabaseConnect(){
    try {
        client.connect()
        console.log('db is connected')
    
    } catch (error) {
        console.log(error);
    }

}
DatabaseConnect()
app.get('/', (req , res)=>{
    res.send('hello')
})

app.listen(  ()=>{
    console.log('server is running at ' )
})