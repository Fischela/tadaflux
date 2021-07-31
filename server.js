const express = require("express")
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const {readdirSync} = require('fs')
require('dotenv').config()



const app = express()
// mongoose.connect(process.env.DATABASE, {
//     useNewUrlParser:true,
//     useCreateIndex:true,
//     useFindAndModify:true,
//     useUnifiedTopology:true
// }).then(()=>console.log("DATABASE CONNECTED SUCCESSFULLY"))
// .catch((err)=>{
//     console.log(`ERR DETECTED ${err}`)
// })



app.use(morgan("dev"))
app.use(bodyParser.json({limit:"2mb"}))
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())
app.use(cors())

//auth routes

readdirSync("./routes").map((r)=>app.use('/api', require('./routes/'+r)))

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/build/"+"index.html")
})


app.get("/api", (req, res)=>{
    res.json({"res":"data was accessed succesfully"})
})

const port = process.env.PORT||8000

app.listen(port, ()=>{
    console.log("server just started at port: ", port)
})