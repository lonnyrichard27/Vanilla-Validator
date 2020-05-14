const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// show error message
function showError(input, message) {
    // getting the parent element of the form-control
    const formControl = input.parentElement;
    // changing the classname if it meets certain conditions
    formControl.className = 'form-control error';
    // getting the value of the small tag (querySelector can take the tag or classname)
    const small = formControl.querySelector('small')
    small.innerText = message
}

// show success message
function showSuccess(input) {
    // getting the parent element of the form-control
    const formControl = input.parentElement;
    // changing the classname if it meets certain conditions
    formControl.className = 'form-control success';
}

// Check if  email is valid
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// check required fields
function checkRequired(inputArr) {
    // loop through all the input content 
    // note the trim() function trims out all whitespaces
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`)
        } else {
            showSuccess(input)
        }
    });    
}

// check passwords match
function checkPassword(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    } else {
        
    }
}
// check input length
function checkLength(input, min, max) {
    if (input.value < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

// get field name
function getFieldName(input) {
    // changing the first letter to uppercase and concatenating the remaining error messages
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}
// Event Listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkPassword(password, password2)
})

// THE CODE BELOW HAS BEEN REFACTORED FOR CLEAN CODE AND OPTIMIZATION PURPOSES IN THE EVENT LISTENERS FUNCTION 

// checking username value and validating
// if (username.value === '') {
//     showError(username, 'Username is required')
// } else {
//     showSuccess(username);
// }

// checking username value and validating
// if (email.value === '') {
//     showError(email, 'Email is required');
// } else if(!validateEmail(email.value)){
//     showError(email, 'Email is not valid')
// }else {
//     showSuccess(email);
// }

// checking username value and validating
// if (password.value === '') {
//     showError(password, 'Password is required')
// } else {
//     showSuccess(password);
// }

// checking username value and validating
// if (password2.value === '') {
//     showError(password2, 'password2 is required')
// } else {
//     showSuccess(password2 );
// }