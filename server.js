/* eslint-disable semi */

const express = require("express")
const app = express()
const port = 3000
var path = require('path')

app.set("view engine", "ejs")

var mime = {
  '.html': 'text/html',
  '.css': 'text/css'
}

app.get("/", (req, res) => {
  var type = mime|| 'text/plain'
  res.setHeader('Content-Type', type)
  res.render("index")
})

app.get("/filter", (req, res) => {
  var type = mime || 'text/plain'
  res.setHeader('Content-Type', type)
  res.render("filter.ejs")
})

app.get("/login", (req, res) => {
  var type = mime || 'text/plain'
  res.setHeader('Content-Type', type)
  res.render("login.ejs")
})

app.use(notFound)

function notFound (req, res) {
  res.statusCode = 404
  res.end("Not found\n")
}

app.use(express.static("public"))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))