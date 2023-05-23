// bring express into your project
const express = require('express');

const bodyParser = require('body-parser')

// identify which port we'll run on
const port = process.env.PORT||5000;
// bring express into your project
let history = [];
let solution = 0;

const app = express();
// serve static files from the "public" directory
app.use(express.static('server/public'))
// parse URL-encoded form data and store it in req.body
app.use(bodyParser.urlencoded({extended:true}))


// app post that will store my client post
app.post('/history',function(req, res) {
 // extract input values from the request body
let inputs = req.body

  console.log('got the history', inputs)
// calculate the total using the input values and operator
  let total = Solution((inputs.inputOne*1), (inputs.inputTwo*1), inputs.operator)
  console.log('got the history', total)
// push a new object with input values, operator, and total to the history array
  history.push({inputOne:inputs.inputOne, inputTwo:inputs.inputTwo, operator:inputs.operator, total})
  res.sendStatus(201)
})  
// app get that will get my client history data.
app.get('/history', function(req, res){
  res.send(history)
})

// function that that calculates the my inputs and return total.
function Solution(inputOne, inputTwo, output) {
  let total = 0;
if('+' === output) {
  total = inputOne +inputTwo
} else if ('-' === output) {
  total =  inputOne - inputTwo
} else if ('*' === output) {
  total = inputOne * inputTwo
} else if ('/' === output) {
  total = inputOne / inputTwo
}
  return total
    }
  
 // start listening for incoming requests on the specified port
app.listen(port, () => {
    console.log('listening on port', port);
  })
