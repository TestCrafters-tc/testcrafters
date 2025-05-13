// Hardcoded user credentials for testing
const users = [
    { username: 'TS', password: 'TS', email: 'Admin@example.com', name: 'TS' },
  

  ];
  
  // DOM Elements
  const loginForm = document.getElementById('login-form');
  const loginError = document.getElementById('login-error');
  
  // Check if user is already logged in (via sessionStorage or localStorage)
  document.addEventListener('DOMContentLoaded', function() {
    let currentUser = sessionStorage.getItem('currentUser');
    
    // If no session user, check localStorage for remembered user
    if (!currentUser) {
      const rememberedUser = localStorage.getItem('rememberedUser');
      if (rememberedUser) {
        // If user is remembered, set session storage
        sessionStorage.setItem('currentUser', rememberedUser);
        window.location.href = 'profile.html'; // Redirect to profile if already logged in
      }
    } else {
      // User is logged in via sessionStorage, redirect to profile page
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
        
        // Save user data in sessionStorage
        sessionStorage.setItem('currentUser', JSON.stringify(userData));
        
        // If remember me is checked, also store in localStorage
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
  
