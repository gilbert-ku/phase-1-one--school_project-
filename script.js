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
 














































