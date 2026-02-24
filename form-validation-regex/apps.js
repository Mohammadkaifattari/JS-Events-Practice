let form = document.querySelector("form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let emailerror = document.querySelector("#emailerror");
    let passworderror = document.querySelector("#passworderror");
    let message = document.querySelector("#message");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    let emailchecked = emailRegex.test(email.value);
    let passwordchecked = passwordRegex.test(password.value);

    let valid = true;

    // Hide old errors first
    emailerror.style.display = "none";
    passworderror.style.display = "none";
    message.style.display = "none";

    if (!emailchecked) {
        emailerror.style.display = "block";
        emailerror.textContent = "Email is not valid";
        valid = false;
    }

    if (!passwordchecked) {
        passworderror.style.display = "block";
        passworderror.textContent = "Password must be strong";
        valid = false;
    }

    if (valid) {
        message.style.display = "block";
        message.textContent = "Form Submitted Successfully ✅";
    }
});