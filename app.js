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

app.get('/my_page', (req, resp) => {
    resp.sendFile(path.join(__dirname, '/static/page1.html'))
})

app.get('/movie' , (req, resp) => {
    resp.writeHead(201);
    resp.end('_____ is my favorite movie!')
})

app.get('/random', (req, resp) => {
    resp.writeHead(201);
    resp.end(`random number = ${Math.random() * 100}`)
})

// parameters -
// 1. query params  <url> ? x = 1 & y = 2
// 2. path params   <url> / 1 
// 3. body 
// 4. headers
app.get('/add', (req, resp) => {
    // http://localhost:8080/ add ? x = 3 & y = 4

    console.log(req.url);
    console.log(req.query);

    const x = Number(req.query.x)
    const y = Number(req.query.y)    

    if (isNaN(x)) {
        resp.writeHead(400)
        resp.end(`${req.query.x} is not a number`)
        return
    }
    if (isNaN(y)) {
        resp.writeHead(400)
        resp.end(`${req.query.y} is not a number`)
        return
    }    

    resp.writeHead(200)
    resp.end(`<h1>${x} + ${y} = ${x + y}</h1>`)
    //resp.end(`${JSON.stringify(req.query.x)}`)
})

app.get('/minus', (req, resp) => {
    // http://localhost:8080/ add ? a = 3 & b = 4

    console.log(req.url);
    console.log(req.query);
    
    // TODO
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})