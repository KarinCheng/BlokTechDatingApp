/* eslint-disable semi */

const express = require("express")
const server = express()
const port = 3000

server.set("view engine", "ejs")

var mime = {
  '.html': 'text/html',
  '.css': 'text/css'
}

server.get("/", (req, res) => {
  res.render("index")
})

server.get("/filter", (req, res) => {
  res.render("filter.ejs")
})

server.get("/login", (req, res) => {
  res.render("login.ejs")
})

express()
.use(notFound)

function notFound (req, res) {
  res.statusCode = 404
  res.end("Not found\n")
}

server.use(express.static("public"))

server.listen(port, () => console.log(`Example app listening on port ${port}!`))