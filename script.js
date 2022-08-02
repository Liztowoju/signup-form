// function validateForm(event){
//     event.preventDefault();

//     var firstName = document.querySelector('#firstName');
//     console.log(firstName);

//     return false;
// }

// alert('sdsd');

const formElement = document.querySelector('#create-account-form');
formElement.addEventListener('submit', function(e){
    e.preventDefault();
    
    const firstName = document.querySelector('#firstName');
    const password = document.querySelector('#password');
    const confirmPassword = document.querySelector('#cpassword');

    if(firstName.value == ''){
        alert('You must enter a value');
    }

    if(password.value !== confirmPassword.value){
        alert('Password must be the same, buddy')
    }
    // console.log(firstName.value);

    // jhjhhhj




    // console.log(e)
});