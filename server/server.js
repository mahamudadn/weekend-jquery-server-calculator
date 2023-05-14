// bring express into your project
const express = require('express');

const bodyParser = require('body-parser')

// identify which port we'll run on
const port = 5000;
let history = [];
let solution = 0;

const app = express();

app.use(express.static('server/public'))
app.use(bodyParser.urlencoded({extended:true}))


// app post that will store my client post

app.post('/history',function(req, res) {
 
let inputs = req.body

  console.log('got the history', inputs)

  let total = Solution((inputs.inputOne*1), (inputs.inputTwo*1), inputs.operator)
  console.log('got the history', total)

  history.push({inputOne:inputs.inputOne, inputTwo:inputs.inputTwo, operator:inputs.operator, total})
  res.sendStatus(201)
})  
// 
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
  total = inputOne - inputTwo
} else if ('/' === output) {
  total = inputOne / inputTwo
}
   return total
    }
  
   
app.listen(port, () => {
    console.log('listening on port', port);
  })
