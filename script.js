//https://studentprofile.onrender.com/student
// get elements
const email = document.getElementById("email");
const password = document.getElementById("password");
const login = document.getElementById("login");
const form = document.querySelector("form");

// add event listner to log in page
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailValue = email.value;
    const passwordValue = password.value;
  // check password 
    if (emailValue === "example@example.com" && passwordValue === "password") {
        alert("Login successful!");
        // Redirect to another page
        window.location.href = "start.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
});
 

                  //  create registration from and add event listener to register link

const regLink = document.getElementById("regLink");
regLink.addEventListener("click", (e) => {
  e.preventDefault()
  let mainLogin = document.querySelector(".login-box");

  let registrationForm = document.createElement("div");
  registrationForm.innerHTML = `
    <h1>Register</h1>
    <br> <br>
    <label for="email" class="label-login">Email</label>
    <br><input type="email" id="email"><br>

    <label for="password" class="password">Password</label>
    <br><input type="password" id="password"><br>
    <label for="confirm-password" class="password">Confirm Password</label>
    <br><input type="password" id="confirm-password"><br>
    <br> <br><button type="submit" class="loginbtn" id="login">Register</button>
  `;

  mainLogin.innerHTML = '';
  mainLogin.appendChild(registrationForm);
});














































