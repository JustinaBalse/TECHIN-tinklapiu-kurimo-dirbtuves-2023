let loginBtn = document.getElementById("login-button");

loginBtn.addEventListener("click", function(e){
    e.preventDefault();
    let welcome = document.getElementById("welcome");
    let loginForm = document.getElementById("login-form");
    let username = document.getElementById("username").value;
    welcome.classList.add("form-success");
    welcome.innerText = "Let's TECHIN <" + username + "/>!";
    loginForm.classList.add("d-none");
})



