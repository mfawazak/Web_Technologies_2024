const form = document.querySelector(".sign-up-form")
const email = document.querySelector("#email");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const password = document.querySelector("#password");
const confirmPass = document.querySelector("#confirmPassword")

const emailErr = document.querySelector("#email-err")
const fnameErr = document.querySelector("#firstname-err");
const lnameErr = document.querySelector("#lastname-err")
const passErr = document.querySelector("#password-err")
const confPassErr = document.querySelector("#confirm-pass-err");

form.addEventListener('submit', (e) => {
    e.preventDefault();
})

async function onSubmit(){

    isValid = checkValidation()

    if(!isValid) return

    const formData = { 
        email: email.value,
        firstName: firstName.value,
        lastName: lastName.value,
        password: password.value,
    }

    const res = await fetch("/auth/signup", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })

    if(res.status===409){
        const data = await res.json()
        emailErr.innerText = data.message;
        email.classList.add("border-danger");
    }

}

function checkValidation(){
    let isValid = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email.value)){
        emailErr.innerText = "Invalid Email"
        email.classList.add("border-danger")
        isValid = false;
    }else{
        emailErr.innerText = ""
        email.classList.remove("border-danger")
        isValid = true;
    }

    if(firstName.value == ""){
        fnameErr.innerText = "This field is required";
        firstName.classList.add("border-danger")
        isValid = false;
    }else{
        fnameErr.innerText = "";
        firstName.classList.remove("border-danger")
        isValid = true;
    }

    if(lastName.value == ""){
        lnameErr.innerText = "This field is required"
        lastName.classList.add("border-danger")
        isValid = false;
    }else{
        lnameErr.innerText = ""
        lastName.classList.remove("border-danger")
        isValid = true;
    }

    if(password.value == ""){
        passErr.innerText = "This field is required"
        password.classList.add("border-danger")
        isValid = false;
    }else if(password.value.length < 8)
        {
        passErr.innerText = "Password must be atleast 8 characters"
        password.classList.add("border-danger")
        isValid = false;
        }
        else{
        passErr.innerText = ""
        password.classList.remove("border-danger")
        isValid = true;
    }

    if(confirmPass.value !== password.value){
        confPassErr.innerText = "Password does not match"
        confirmPass.classList.add("border-danger")
        isValid = false;
    }else if(confirmPass.value == ""){
        confPassErr.innerText = "This field is required"
        confirmPass.classList.add("border-danger")
        isValid = false;
    }else{
        confirmPass.classList.remove("border-danger")
        confPassErr.innerText = ""
        isValid = true;
    }
    
    return isValid
}