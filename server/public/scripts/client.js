
$(document).ready(onReady);

function onReady() {
    console.log('jquery is workin')
    $('.when-Press').on('click', result)
    $('#formValue').on('submit', SendCalculation)
    

   
    getData();
}

// // set the Global Operator
// let opperator;

// function pluButton() {
//     opperator = '+'  
//     console.log('hello',pluButton)
// }

// function minusButton() {
//     opperator = '-'  
//     console.log('hello',minusButton)
// }

// function timesButton() {
//     opperator = '*'  
//     console.log('hello',timesButton)
// }

// function divideButton() {
//     opperator = '/'  
//     console.log('hello',divideButton)
// }

// // //Onclick Handler.
// function result () {

//   const number1Input =  $('#Number1').val();
//   const input2Input=  $('#Number2').val();
  

//   console.log('is running' , result)



//   $.ajax({
//     method: 'POST',
//     url:'/input',
//     data:{
//         input1: number1Input,
//         input2: input2Input,
//         opperator: opperator,
//         solution:''
//     }
// }).then(function(response) {
//     getData();
//   }).catch(function(error){
//     alert('Request Failed)',);
//     console.log('There is ', error);
//   })
// }


// function getData(){

//     $.ajax({
//         method: 'GET',
//         url: '/input',
//     }).then(function(response){
//         renderToDom(response)
//     }).catch(function(error){
//         alert('Request Failed');
//         console.log('There is ', error)
//     }) 

// }


// function renderToDom(response) {

//   $('#history').empty()

//     for(let number of response) {
//         $('#history').append(`<li>${number.input1}</li>`)
//         $('#history').append(`<li>${number.input2}</li>`)
//     }
// }