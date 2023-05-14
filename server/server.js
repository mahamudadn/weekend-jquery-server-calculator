// bring express into your project
const express = require('express');

const bodyParser = require('body-parser')


const app = express();

app.use(express.static('server/public'))
app.use(bodyParser.urlencoded({extended:true}))


  // start our server
app.listen(port, () => {
    console.log('listening on port', port);
  })
  