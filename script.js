// JavaScript for login process

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from reloading the page

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Dummy credentials (Replace with real authentication logic)
  const validUsername = "user";
  const validPassword = "123";

  // Simple validation
  if (username === validUsername && password === validPassword) {
    // Save login state to sessionStorage
    sessionStorage.setItem("loggedIn", "true");
    sessionStorage.setItem("username", username);

    // Redirect to profile page after successful login
    window.location.href = "profile.html"; // Redirect to profile page (or dashboard)
  } else {
    // Show error message if login fails
    document.getElementById("error-message").textContent = "Invalid username or password. Please try again.";
  }
});

// If user is already logged in, redirect them to the profile page
if (sessionStorage.getItem('loggedIn')) {
  window.location.href = 'profile.html'; // Redirect to profile page if logged in
}
