require('dotenv').config();
const express = require('express')
const massive = require('massive')
const ctrl = require('./controller')
const app = express();
const {SERVER_PORT, CONNECTION_STRING} = process.env;
app.use(express.json())

massive(CONNECTION_STRING)
.then(db => {
    app.set("db", db)
    console.log('Db is on Point!')
})



app.listen(SERVER_PORT, () => console.log(`server jumping on port ${SERVER_PORT}`));