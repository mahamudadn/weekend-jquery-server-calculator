$(document).ready(onReady);

function onReady() {
    console.log('jquery is working')

    $('#formValue').on('submit', ".calculator" ,sendCalculation)
    $('.calculator').on('click', callOperator)
    $('#clear').on('click', clearinput)

  
    
    getCal();
}
// Defined a global Variable

let operator ;

function callOperator  (event) {
    event.preventDefault();
    operator = $(this).data().value
    console.log('See our posted', operator)
}


// created an on click handler for on our form inputs
function sendCalculation (event) {
    event.preventDefault();

    console.log('see our posted operator')

let inputOne = $('#Number-One').val()
let inputTwo = $('#Number-Two').val()

$.ajax({
    method: 'POST',
    url:'/history',
    data: {
        inputOne, 
        inputTwo,
        operator
    
    }

}).then(function(response ) {
    getCal();
})
}


function getCal() {
    $.ajax({
        method:'GET',
        url:'/history',
    }).then(function (reesponse) {
        renderToDom(response);
        console.log('Our Get Works', response)

        
    })
}



function renderToDom(array) {
   let history = array[array.length -1]
$('#solution').text(history.total)
$('#history').append(`
<li> ${history.inputOne} ${history.inputTwo} ${history.operator}</li>

`)

}




// function for input result.


//.then(function (response){
//     console.log('Succes', response)

// }).catch(function(error){
// console.log('post error', error)
// });












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