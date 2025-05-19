// Complete course database
const allCourses = {
    1: {
        id: 1,
        title: "VITA 2.0 - MEDICAL EXAM BATCH",
        description: "",
        image: "/courses/vita2.jpg",
        price: "999 Taka",
        url: "/courses/vita2-testcrafters-exam-batch.html"
    },
    2: {
        id: 2,
        title: "Anchor 2.0 - VARSITY EXAM BATCH",
        description: "",
        image: "/courses/anchor2.jpg",
        price: "999 Taka",
        url: "/courses/anchor2-testcrafters-exam-batch.html"
    },
   
};

// DOM Elements
const profileName = document.getElementById('profile-name');
const profileUsername = document.getElementById('profile-username');
const profileEmail = document.getElementById('profile-email');
const profileInitials = document.getElementById('profile-initials');
const logoutBtn = document.getElementById('logout-btn');
const courseCardsContainer = document.getElementById('course-cards-container');

// On page load
document.addEventListener('DOMContentLoaded', function() {
    const currentUserData = sessionStorage.getItem('currentUser') || localStorage.getItem('rememberedUser');
    
    if (!currentUserData) {
        window.location.href = 'login.html';
        return;
    }
    
    const user = JSON.parse(currentUserData);
    populateProfileInfo(user);
    renderCourseCards(user);
});

// Profile functions
function populateProfileInfo(user) {
    profileName.textContent = user.name || 'N/A';
    profileUsername.textContent = user.username || 'N/A';
    profileEmail.textContent = user.email || 'N/A';
    
    // Set avatar initials
    const initials = user.name 
        ? user.name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2)
        : user.username.substring(0, 2).toUpperCase();
    profileInitials.textContent = initials;
}

function renderCourseCards(user) {
    courseCardsContainer.innerHTML = '';
    
    if (!user.accessibleCourses || user.accessibleCourses.length === 0) {
        showNoCoursesMessage();
        return;
    }
    
    let hasValidCourses = false;
    
    user.accessibleCourses.forEach(courseId => {
        const course = allCourses[courseId];
        if (course) {
            hasValidCourses = true;
            createCourseCard(course);
        }
    });
    
    if (!hasValidCourses) {
        showNoCoursesMessage();
    }
}

function createCourseCard(course) {
    const card = document.createElement('div');
    card.className = 'course-card';
    card.innerHTML = `
        <img src="${course.image}" alt="${course.title}" class="course-image">
        <div class="course-info">
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <div class="course-footer">
                <span class="price">${course.price}</span>
                <a href="${course.url}" class="btn-view">View Course</a>
            </div>
        </div>
    `;
    courseCardsContainer.appendChild(card);
}

function showNoCoursesMessage() {
    courseCardsContainer.innerHTML = `
        <div class="no-courses">
            <img src="images/no-courses.svg" alt="No courses">
            <h3>No courses assigned</h3>
            <p>You haven't been enrolled in any courses yet</p>
            <button class="btn-contact">Contact Support</button>
        </div>
    `;
}

// Logout handler
logoutBtn.addEventListener('click', function() {
    const currentUserData = sessionStorage.getItem('currentUser');
    if (currentUserData) {
        const user = JSON.parse(currentUserData);
        delete activeSessions[user.username];
    }
    
    sessionStorage.removeItem('currentUser');
    localStorage.removeItem('rememberedUser');
    window.location.href = 'login.html';
});
