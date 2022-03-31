// Imports
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const app = express()
const port = 5000

// Static Files
app.use(express.static('public'))
//app.use(express.static('node_modules'))
//app.use('/css', express.static(__dirname + 'public/css'))
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + 'node_modules/bootstrap/dist/js'))
app.use('/js', express.static(__dirname + 'node_modules/jquery/dist'))

// Set Templating Engine
app.use(expressLayouts)
app.set('layout', './layouts/full-width')
app.set('view engine', 'ejs')

// Routes
app.get('', (req, res) => {
    res.render('index', { title: 'Home Page'})
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Page'})
})
app.get('/contact',(req, res)=>{
   res.render('contact',{title:'Contact Page'})
})
// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`))