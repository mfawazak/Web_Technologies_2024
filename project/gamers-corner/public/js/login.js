const loginForm = document.querySelector(".login-form")
const email = document.querySelector("#email")
const password = document.querySelector("#password") 

// loginForm.addEventListener("submit", (e) => e.preventDefault())

async function onSubmit(){
    const isValid = checkValidity()
    if(!isValid) return;

    const res = await fetch("/auth/login", {
        method: "POST",
        redirect: "follow",
        headers: {
            "Content-Type": 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({email: email.value, password: password.value})
    })

    if(res.status >= 400){
        document.querySelector(".alert").classList.remove("d-none")
    }

}

function checkValidity(){
    let isValid = true;

    if(email.value == ""){
        email.classList.add("border-danger")
        isValid = false;
    }

    if(password.value == ""){
        password.classList.add("border-danger")
        isValid = false;
    }

    return isValid;
}