const express = require('express');
const cors = require('cors');
const router = require('./routes/transactions.js');
const app = express();


require('dotenv').config();
const { db } = require('./db/db.js');
const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors())

app.use("/api/v1",router);

// app.get('/',(req,res)=>{
//     res.send("response sent");
// })
const server = ()=> {
    db();
    app.listen(PORT,()=>{
        console.log("listening to port",PORT);
    })
}



server();