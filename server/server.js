// bring express into your project
const express = require('express');

const bodyParser = require('body-parser')


const app = express();

app.use(express.static('server/public'))
app.use(bodyParser.urlencoded({extended:true}))


// identify which port we'll run on
const port = 5000;
let history = [];
let solution = 0;


app.listen(port, () => {
    console.log('listening on port', port);
  })
  