
    const togglePassword = document
            .querySelector('#togglePassword');
     const togglePassword2 = document.querySelector('#togglePassword2');
  
        const Password = document.querySelector('#password');
        const confirmPassword = document.querySelector('#confirmpassword')
  
        togglePassword.addEventListener('click', () => {
  
            // Toggle the type attribute using
            // getAttribure() method
            const type = Password
                .getAttribute('type') === 'password' ?
                'text' : 'password';
            
                  
            Password.setAttribute('type', type);
            // Toggle the eye and bi-eye icon
            this.classList.toggle('bi-eye');
        });

        togglePassword2.addEventListener('click', () => {

  const type = confirmPassword
      .getAttribute('type') === 'password' ?
      'text' : 'password';
  
        
  confirmPassword.setAttribute('type', type);
  
  this.classList.toggle('bi2');
});

// Nav
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks')

hamburger.addEventListener('click', () =>{
    navLinks.classList.toggle('show');
});

// Form validation
 

const form = document.getElementById('myform');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phonenumber');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');



form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {

   const usernameValue = username.value.trim();
   const emailValue = email.value.trim();
   const phoneValue = phone.value.trim();
   const passwordValue = password.value.trim();
   const confirmpasswordValue = confirmpassword.value.trim();


   if(usernameValue === ''){
       // show error
       // add error class
        setErrorFor(username, 'Username cannot be blank');
   }else {
    //    add success class
    setSuccessFor(username);
   }



   if(emailValue === ''){
     setErrorFor(email, 'Email cannot be blank');
}else if(!isEmail(emailValue)) {
 setErrorFor(email, 'Email is not valid');
}
else{
    setSuccessFor(email);
}



if(phoneValue === ''){
    setErrorFor(phone, 'Phone Number cannot be blank');
}
else{
    setSuccessFor(phone);
}



if(passwordValue === ''){
    setErrorFor(password, 'Password cannot be blank');
}else{
    setSuccessFor(password);
}



if(confirmpasswordValue === ''){
    setErrorFor(confirmpassword, 'Confirm your password');
}else if(passwordValue !== confirmpasswordValue){
    setErrorFor(confirmpassword, 'Passwords do not match');

}else{
    setSuccessFor(confirmpassword);
}
}


function setErrorFor(input, message){
    const formControl = input.parentElement; //form class
    const small = formControl.querySelector('small');

    // add error message inside small
    small.innerText = message;

    // add error class
    formControl.className = 'form error'
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form success';
}


function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}



