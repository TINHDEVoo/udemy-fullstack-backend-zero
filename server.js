const express = require('express') //commonjs
// import express from 'express' //es modules

const app = express() // app express
const port = 8080 //port

//khai baao route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/abc', (req, res) => {
    res.send('check abc')
})

app.get('/hoidanit', (req, res) => {
    res.send('<h1>hoidanit voi eric</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})