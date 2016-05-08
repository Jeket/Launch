'use strict'

/*
  dev server
*/

const express = require ('express')
const path = require('path')
const app = express()

// middleware
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.get('/', (req, res, next) => {
  res.send('Hello')
})

// port
app.listen(8080, () => console.log('listening on 8080'))
