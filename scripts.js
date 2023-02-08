let signupbutton = document.querySelector(".signupbutton");



signupbutton.addEventListener("click", () => {
    let password = document.getElementById("user_password").value;
    let confirmpassword = document.getElementById("confirm_password").value;

    if(password === confirmpassword) {
         return;
    }
    else if (password !== confirmpassword) {
        alert("The password doesnt match");
    }
})