// index.js
const express = require('express')
const router = express.Router()
const path = require('path')
const url = require ('url')
const cors = require ('cors')
const { response } = require('express')

const port = 8080;

const app = express()

app.use(express.static(path.join('.','/static/'))) // /static/index.html
// page1.html

app.get('/fruit', (req, resp) => {
    resp.writeHead(201);
    resp.end('Banan is my favorite fruit!')
})

app.get('/movie' , (req, resp) => {
    resp.writeHead(201);
    resp.end('_____ is my favorite movie!')
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})