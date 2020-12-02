const express = require('express')
require('./db/mongoose')
const detailsRouter = require('./router/router')


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(detailsRouter)

app.listen(port, ()=> {
    console.log("Server is up on port " + port)
})
console.log("hi")