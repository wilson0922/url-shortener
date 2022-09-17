const express = require('express')
const mongoose = require('mongoose')
const exphbs =require('express-handlebars')
require('./config/mongoose')

const URL = require('./models/URL')
const shortURL = require('./utils/shortURL')
const app = express()
const port = 3000

app.engine('hbs',exphbs({defaultLayout:'main', extname:'.hbs'}))
app.set('view engine','hbs')
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
res.render('index')
})

app.post('/', (req, res) => {
    const host = req.get('host')
    const fullURL = req.body.fullURL
    // 重複網址尋找資料庫並回傳
    URL.findOne({ fullURL })
      .lean()
      .then(data =>
        // 建立新網址
        data ? data : URL.create({ fullURL, shortURL: shortURL(5) })
      )
      .then(data =>
        res.render('index', { fullURL, shortURL: data.shortURL, host })
      )
      .catch(error => {
        console.log(error)
        res.render('error', { error: error.message })
      })
  })
  
  app.get('/:shortURL', (req, res) => {
    const host = req.get('host')
    const shortURL = req.params.shortURL
    const errorMsg = `${host}/${shortURL} is not exist`
    URL.findOne(req.params)
      .then(data =>
        data ? res.redirect(data.fullURL) : res.render('error', { errorMsg })
      )
      .catch(error => console.log(error))
  })
  

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})