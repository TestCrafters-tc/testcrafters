// Track active sessions
const activeSessions = {};

// User database with course access
const users = [
    { 
        username: 'tanisha', 
        password: '01908022242', 
        email: 'afrinjahantanisha0@gmail.com', 
        name: 'Afrin Jahan Tanisha',
        accessibleCourses: [1], // Full access
        sessionId: null
    },
     { 
        username: 'Rehnuma', 
        password: '01828019872', 
        email: 'rehnumatarannum1969@gmail.com', 
        name: 'Afrin Jahan Tanisha',
        accessibleCourses: [1], // Full access
        sessionId: null
    },
      { 
        username: 'TS', 
        password: 'TS', 
        email: 'Admin@example.com', 
        name: 'TS',
        accessibleCourses: [1, 2], // Full access
        sessionId: null
    },
    { 
        username: 'student1', 
        password: 'student1', 
        email: 'student1@example.com', 
        name: 'Student One',
        accessibleCourses: [1], // Only course 1
        sessionId: null
    },
    { 
        username: 'premium', 
        password: 'premium123', 
        email: 'premium@example.com', 
        name: 'Premium Student',
        accessibleCourses: [1, 2, 3], // All courses
        sessionId: null
    }
];

// DOM Elements
const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');
const sessionError = document.getElementById('session-error');

// Check initial login state
document.addEventListener('DOMContentLoaded', function() {
    const currentUserData = sessionStorage.getItem('currentUser') || localStorage.getItem('rememberedUser');
    
    if (currentUserData) {
        const user = JSON.parse(currentUserData);
        
        // Check for active session conflict
        if (activeSessions[user.username] && activeSessions[user.username] !== user.sessionId) {
            handleSessionConflict();
            return;
        }
        
        // Valid session exists, redirect to profile
        window.location.href = 'profile.html';
    }
});

// Login form handler
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('remember').checked;
    
    // Validate credentials
    const user = users.find(u => 
        (u.username === username || u.email === username) && 
        u.password === password
    );
    
    if (user) {
        // Check for existing session
        if (activeSessions[user.username]) {
            loginError.textContent = 'This account is already in use on another device.';
            loginError.classList.remove('hidden');
            return;
        }
        
        // Create new session
        const sessionId = generateSessionId();
        activeSessions[user.username] = sessionId;
        
        // Prepare user data for storage
        const userData = {
            username: user.username,
            email: user.email,
            name: user.name,
            accessibleCourses: user.accessibleCourses,
            sessionId: sessionId
        };
        
        // Store session
        sessionStorage.setItem('currentUser', JSON.stringify(userData));
        
        // Optionally remember
        if (rememberMe) {
            localStorage.setItem('rememberedUser', JSON.stringify(userData));
        } else {
            localStorage.removeItem('rememberedUser');
        }
        
        // Redirect to profile
        window.location.href = 'profile.html';
    } else {
        showLoginError('Invalid username or password');
    }
});

// Helper functions
function generateSessionId() {
    return 'session-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
}

function showLoginError(message) {
    loginError.textContent = message;
    loginError.classList.remove('hidden');
    document.getElementById('password').value = '';
    document.getElementById('username').focus();
}

function handleSessionConflict() {
    sessionStorage.removeItem('currentUser');
    localStorage.removeItem('rememberedUser');
    
    if (sessionError) {
        sessionError.textContent = 'This account is already in use on another device.';
        sessionError.classList.remove('hidden');
    }
}

// Clean up on window close
window.addEventListener('beforeunload', function() {
    const currentUserData = sessionStorage.getItem('currentUser');
    if (!currentUserData) return;
    
    const user = JSON.parse(currentUserData);
    if (!localStorage.getItem('rememberedUser') && activeSessions[user.username] === user.sessionId) {
        delete activeSessions[user.username];
    }
});
