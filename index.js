require('dotenv').config()
const express = require('express')
const app = express()
var cors = require('cors')
const dbConnection = require('./lib/dbConfig')



const authRoutes = require('./routes/auth.routes')
const homeRoutes = require ('./routes/home.routes')
const productRoutes = require('./routes/product.routes');


const responder = require('./lib/baseResponse')

dbConnection.connect()

app.use(cors())

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))


app.use('/', authRoutes)
app.use('/', homeRoutes)
app.use('/', productRoutes)

// app.use('/', cartRoutes)
// app.use('/', orderRoutes)

app.use((error, req, res, next) => {
    res.json(responder.fail(error))
  })
  

app.listen(parseInt(process.env.PORT) || 3000)