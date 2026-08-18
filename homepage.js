// modal
let registerModal = document.getElementById("registerModal");
let loginModal = document.getElementById("loginModal");
// open modal buttons
let getStarted = document.getElementById("openModal");
let analyze = document.getElementById("openModal2");
let loginBtn = document.getElementById("loginBtn");
// close modal buttons
let closeRegister = document.getElementById("closeRegister");
let closeLogin = document.getElementById("closeLogin");
// show signup link in login modal
let showSignup = document.getElementById("showSignup");

getStarted.onclick = function() {
    registerModal.style.display = "flex";
};
analyze.onclick = function() {
    registerModal.style.display = "flex";
};
// student_login
loginBtn.onclick = function() {
    loginModal.style.display = "flex";
};
// close_reg
closeRegister.onclick = function() {
    registerModal.style.display = "none";
};
closeLogin.onclick = function() {
    loginModal.style.display = "none";
};
// login
showSignup.onclick = function(event) {
    event.preventDefault();
    loginModal.style.display = "none";
    registerModal.style.display = "flex";
};
// register form submission
let registerForm = document.getElementById("registerForm");
registerForm.onsubmit = function(event) {
    event.preventDefault();
    let email = document.getElementById("registerEmail").value;
    let password = document.getElementById("registerPassword").value;
    localStorage.setItem("studentEmail", email);
    localStorage.setItem("studentPassword", password);
    alert("Account created successfully!");
// Clear the form
    registerForm.reset();
// Close the registration popup
    registerModal.style.display = "none";
};
// login form submission
let loginForm = document.getElementById("loginForm");
loginForm.onsubmit = function(event) {
    event.preventDefault();
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;
    let savedEmail = localStorage.getItem("studentEmail");
    let savedPassword = localStorage.getItem("studentPassword");
// No account registered
    if (savedEmail === null) {
        alert("You don't have an account. Please Sign Up first.");
        return;
    }
 // Correct email and password
    if (email === savedEmail && password === savedPassword) {
        alert("Login successful!");
// Go to dashboard
        window.location.href = "dashboard.html";
    }   
    else {
        alert("Incorrect email or password.");
    }
};