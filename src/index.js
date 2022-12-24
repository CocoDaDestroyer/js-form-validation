import "./styles.css"
const email = document.getElementById("Email");
const country = document.getElementById("Country");
const zipCode = document.getElementById("ZipCode");
const password = document.getElementById("Password");
const passwordC = document.getElementById("PasswordC");
email.addEventListener("blur",function() {
    if (email.validity.valueMissing){
        email.setCustomValidity("There's nothing here");
        email.reportValidity();
    } else if (email.validity.typeMismatch) {
        email.setCustomValidity("Uhhh, this isn't an email address. Do you even know what that is, stupid?");
        email.reportValidity();
    } else {
        email.setCustomValidity("");
    }
})
country.addEventListener("blur",function() {
    if (country.validity.valueMissing){
        country.setCustomValidity("There's nothing here");
        country.reportValidity();
    } else if (country.validity.tooShort) {
        country.setCustomValidity("Uhhh, this is less than two letters. Do you know any countries whos names are less than two letters, stupid?");
        country.reportValidity();
    } 
})
zipCode.addEventListener("blur",function() {
    if (zipCode.validity.valueMissing) {
        zipCode.setCustomValidity("There's nothing here");
        zipCode.reportValidity();
    } else if (zipCode.validity.tooShort || zipCode.validity.tooLong){
        zipCode.setCustomValidity("Zip codes are 5 numbers");
        zipCode.reportValidity();
    } 
})
password.addEventListener("blur",function() {
    if (password.validity.valueMissing){
        password.setCustomValidity("There's nothing here");
        password.reportValidity();
    } else if (password.validity.tooShort) {
        password.setCustomValidity("Password must be at least 6 letters long");
        password.reportValidity();
    } else if (password.validity.patternMismatch) {
        password.setCustomValidity("Password must include a lowercase letter, uppercase letter, a number, and special character");
        password.reportValidity();
    }else {
        password.setCustomValidity("");
    }
})
passwordC.addEventListener("blur",function() {
    if (passwordC.validity.valueMissing){
        password.setCustomValidity("There's nothing here");
        passwordC.reportValidity();
    } else if (passwordC.value !== password.value) {
        password.setCustomValidity("Passwords do not match");
        passwordC.reportValidity();
    } else {
        passwordC.setCustomValidity("");
    }
})