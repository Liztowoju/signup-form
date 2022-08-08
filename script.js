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
    const email = document.querySelector('#email');
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
    // if(!email.value.match(
    //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //   )){
    //     alert('Email not correct, buddy')
    //   }




    // console.log(e)
    return false;
});