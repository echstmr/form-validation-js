const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const userLocation = document.getElementById('location');


const fnError = document.getElementById('fnError');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');




form.addEventListener('submit', (e) => {
    let isValid = true;

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^[0-9]+$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // At least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character




    if(fullname.value === "" || fullname.value === null){
        e.preventDefault(); 
        fnError.innerHTML = "full name is required!";
        fnError.style.color = "red"
        isValid = false

        
               
    } else if(fullname.value.length <= 6){

        fnError.innerHTML = "full name must be 7 to 16 characters!";
        e.preventDefault();
        isValid = false
 

    }else if(fullname.value.length > 16){
        fnError.innerHTML = "to many characters!";
        e.preventDefault();
        isValid = false
 
    }
    
    else{
        fnError.innerHTML = "";

    }


    if(email.value.trim() === "" || email.value.trim() === null){
        e.preventDefault(); 
        emailError.innerHTML = "Email is required!";
        emailError.style.color = "red"
        isValid = false
    }else if(!email.value.match(emailPattern)){
        e.preventDefault();
        emailError.innerHTML = "Please enter a valid email address.";
        isValid = false


    }else{
        emailError.innerHTML = "";

    }
    
    if(phone.value.trim() <= 10 ){
        e.preventDefault();
        phoneError.innerHTML = "phone number is required";
        phoneError.style.color = "red"
        isValid = false
       
    }else if(!phone.value.match(phonePattern)){
        e.preventDefault();
        phoneError.innerHTML = "letter isn't phone numbers";
        phoneError.style.color = "red"
        isValid = false

    }

    if(password.value === "" || password.value == null){
        e.preventDefault();
        passError.innerHTML = "password is required!";
        passError.style.color ="red";

    }else if(!password.value.trim().match(passwordPattern)){

        e.preventDefault();
        passError.innerHTML = "Password must be at least 8 characters";
        passError.style.color ="red";

    }
    
    else{
        passError.innerHTML = "";

    }

    
    if(isValid){
        form.submit()
    }

})