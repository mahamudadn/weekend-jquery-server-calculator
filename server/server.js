// bring express into your project
const express = require('express');

const bodyParser = require('body-parser')

// identify which port we'll run on
const port = 5000;
let history = [];
// let solution = 0;

const app = express();

app.use(express.static('server/public'))
app.use(bodyParser.urlencoded({extended:true}))


// app post that will store my client post

app.post('/history',function(req, res) {
 

  console.log('got the history', req.body)

  history.push(req.body)
})  






app.listen(port, () => {
    console.log('listening on port', port);
  })
  