$(document).ready(onReady);

 // listen for form submit event
function onReady() {
    console.log('jquery is working')

    $('#formValue').on('submit' ,sendCalculation)
 // listen for operator button click event
    $('.calculator').on('click', callOperator)
// listen for clear button click event
    $('#clear').on('click', clearinput)

  
// fetch the calculation history from the server
    getCal();
}

// defined a global variable to store the selected operator
let operator ;

// event handler for operator button click
function callOperator  (event) {
    event.preventDefault();
 // store the selected operator in the global variable
    operator = $(this).data().value
    console.log('See our posted', operator)
}
// event handler for clear button click
function clearinput() {
    $('#Number-One').val('')
    $('#Number-Two').val('')
}
// event handler for form submit
function sendCalculation (event) {
    event.preventDefault();
    console.log('sendcalt working');

    console.log('see our posted operator')
 // retrieve the user inputs
    let inputOne = $('#Number-One').val()
    let inputTwo = $('#Number-Two').val()
 // send a POST request to the server to save the calculation
    $.ajax({
        method: 'POST',
        url:'/history',
        data: {
            inputOne, 
            inputTwo,
            operator
        
        }

    }).then(function(response ) {
// fetch the updated calculation history from the server
        getCal();
    })
    
}

// fetches the calculation history from the server
function getCal() {
    console.log('getcalt working')
    $.ajax({
        method:'GET',
        url:'/history',
    }).then(function (response) {
        renderToDom(response);
        console.log('Our Get Works', response)

        
    })
}


// renders the calculation history to the DOM
function renderToDom(array) {
   let history = array[array.length -1]
    $('#solution').text(history.total)
    $('#history').append(`
    <li> ${history.inputOne} ${history.operator} ${history.inputTwo} = ${history.total} </li>

    `)

}


