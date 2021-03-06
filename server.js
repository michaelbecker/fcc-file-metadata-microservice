// server.js
// where your node app starts

// init project
const express = require('express')
const app = express()
let multer = require('multer');

// https://www.npmjs.com/package/multer
let upload = multer({"storage": multer.memoryStorage()});


// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
})


app.post('/get-file-size', upload.single('file'), (request, response) => {  

  var reply = {
    "size": request.file.size
  };
  
  response.send(JSON.stringify(reply));

});


// http://expressjs.com/en/guide/error-handling.html
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})


// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
