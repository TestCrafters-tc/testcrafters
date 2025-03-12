// Hardcoded user credentials for testing
const users = [
  { username: 'TS', password: 'TS', email: 'Admin@example.com', name: 'TS' },
  { username: 'srithi', password: 'roy1234', email: 'shuvoroy172006@gmail.com', name: 'Srithi Rani Roy Tithi' },
  { username: 'sanjida', password: 'sanjida1234', email: 'sanjidanaharrimjimbrishty@gmail.com', name: 'Sanjida Nahar Rimjim' },
];

// DOM Elements
const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');

// Check if user is already logged in
document.addEventListener('DOMContentLoaded', function() {
  const currentUser = sessionStorage.getItem('currentUser');
  
  // If user is already logged in, redirect to profile page
  if (currentUser) {
      window.location.href = 'profile.html';
  }
});

// Handle login form submission
loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  const rememberMe = document.getElementById('remember').checked;
  
  // Validate credentials
  const user = users.find(user => 
      (user.username === username || user.email === username) && 
      user.password === password
  );
  
  if (user) {
      // Store user info (don't store password)
      const userData = {
          username: user.username,
          email: user.email,
          name: user.name
      };
      
      // Save user data in session storage
      sessionStorage.setItem('currentUser', JSON.stringify(userData));
      
      // If remember me is checked, also store in local storage
      if (rememberMe) {
          localStorage.setItem('rememberedUser', JSON.stringify(userData));
      } else {
          localStorage.removeItem('rememberedUser');
      }
      
      // Redirect to profile page
      window.location.href = 'profile.html';
  } else {
      // Show error message
      loginError.classList.remove('hidden');
      
      // Clear password field
      document.getElementById('password').value = '';
      
      // Focus on username field
      document.getElementById('username').focus();
  }
});

// Check for remembered user
window.addEventListener('load', function() {
  const rememberedUser = localStorage.getItem('rememberedUser');
  
  if (rememberedUser && !sessionStorage.getItem('currentUser')) {
      // Set the remembered user as the current user
      sessionStorage.setItem('currentUser', rememberedUser);
      
      // Check if we're on the login page and redirect if needed
      if (window.location.pathname.includes('login.html')) {
          window.location.href = 'profile.html';
      }
  }
});