require('dotenv').config()
const express = require('express')
const app = express()
require('./database')



app.listen(process.env.PORT , console.log(`server running on port ${process.env.PORT}`))