// Email Regex & validation

var email = document.getElementById("inputEmail");
var errorEmail = document.getElementById("errorEmail");

var password=document.getElementById("inputPassword");
var errorLogin = document.getElementById("errorLogin");

// var emailFlag;

// function validate() {
//     let emailexp=  /^([A-Za-z0-9\.\-]+)@([A-Za-z0-9\-]+)\.+([a-z]{2,3})(.[a-z]{2,3})?$/

//     if(emailexp.test(email.value)){
//         errorEmail.innerHTML = "Valid e-mail.";
//         errorEmail.style.color = "green";
//         emailFlag = true;
//     }
//     else{
//         errorEmail.innerHTML = "Invalid e-mail format."
//         errorEmail.style.color = "red" ;
//         emailFlag = false;
//     }
// }

function check() {
    if (email.value == "admin" && password.value == "12345") {
        alert("Welcome admin");
        window.location="mylist.html";
        return false;
    }

    else {
        errorLogin.innerHTML = "Invalid credentials";
        errorLogin.style.color= "red";
        return false;
    }
}

