// DOM Elements
const profileName = document.getElementById('profile-name');
const profileUsername = document.getElementById('profile-username');
const profileEmail = document.getElementById('profile-email');
const profileInitials = document.getElementById('profile-initials');
const logoutBtn = document.getElementById('logout-btn');
const logoutNav = document.getElementById('logout-nav');
const editButtons = document.querySelectorAll('.edit-btn');
const editModal = document.getElementById('edit-modal');
const modalTitle = document.getElementById('modal-title');
const editFieldLabel = document.getElementById('edit-field-label');
const editFieldInput = document.getElementById('edit-field-input');
const editForm = document.getElementById('edit-form');
const closeModal = document.getElementById('close-modal');
const cancelEdit = document.getElementById('cancel-edit');
const courseCardsContainer = document.getElementById('course-cards-container');

// Current field being edited
let currentField = '';

// Sample course data
const courses = [
    {
        id: 1,
        title: "Agri+RU+GST Exam Batch",
        description: "250+ Joined",
        image: "Agri GST Cover.jpg",
        price: "99 Taka",  // Updated from 'progress' to 'price'
        url: "exams.html"
    },
    {
        id: 1,
        title: "Offline Model Test",
        description: "250+ Joined",
        price: "99 Taka",  // Updated from 'progress' to 'price'
        url: "/offline_exam/exam-cards.html"
    },
];

// Check if user is logged in
document.addEventListener('DOMContentLoaded', function() {
    const currentUserData = sessionStorage.getItem('currentUser');
    
    if (!currentUserData) {
        // Redirect to login page if not logged in
        window.location.href = 'login.html';
        return;
    }
    
    // Parse user data
    const user = JSON.parse(currentUserData);
    
    // Populate profile information
    populateProfileInfo(user);
    
    // Render course cards
    renderCourseCards();
});

// Populate profile information
function populateProfileInfo(user) {
    profileName.textContent = user.name || 'N/A';
    profileUsername.textContent = user.username || 'N/A';
    profileEmail.textContent = user.email || 'N/A';
    
    // Set initials for avatar
    if (user.name) {
        const nameParts = user.name.split(' ');
        let initials = '';
        
        if (nameParts.length === 1) {
            initials = nameParts[0].charAt(0).toUpperCase();
        } else {
            initials = (nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0)).toUpperCase();
        }
        
        profileInitials.textContent = initials;
    } else {
        profileInitials.textContent = user.username.charAt(0).toUpperCase();
    }
}

// Render course cards
function renderCourseCards() {
    courseCardsContainer.innerHTML = '';
    
    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        
        courseCard.innerHTML = `
            <img src="${course.image}" alt="${course.title}" class="course-image">
            <div class="course-info">
                <h3 class="course-title">${course.title}</h3>
                <p class="course-description">${course.description}</p>
                <div class="course-footer">
                    <span class="course-price">${course.price}</span> <!-- Display the price -->
                    <a href="${course.url}">
                        <button class="btn-view-course">View Course</button>
                    </a>
                </div>
            </div>
        `;
        
        courseCardsContainer.appendChild(courseCard);
    });
}

// Logout functionality
function logoutUser() {
    // Clear session storage
    sessionStorage.removeItem('currentUser');
    
    // Redirect to login page
    window.location.href = 'login.html';
}

// Add logout event listeners
logoutBtn.addEventListener('click', logoutUser);
logoutNav.addEventListener('click', logoutUser);

// Edit functionality
editButtons.forEach(button => {
    button.addEventListener('click', function() {
        const field = this.getAttribute('data-field');
        currentField = field;
        
        // Set modal title and label
        const fieldLabel = field.charAt(0).toUpperCase() + field.slice(1);
        modalTitle.textContent = `Edit ${fieldLabel}`;
        editFieldLabel.textContent = fieldLabel;
        
        // Set current value in input
        const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        editFieldInput.value = currentUser[field] || '';
        
        // Set input type based on field
        if (field === 'email') {
            editFieldInput.type = 'email';
        } else {
            editFieldInput.type = 'text';
        }
        
        // Show modal
        editModal.classList.remove('hidden');
        editFieldInput.focus();
    });
});

// Close modal
function closeEditModal() {
    editModal.classList.add('hidden');
    currentField = '';
}

closeModal.addEventListener('click', closeEditModal);
cancelEdit.addEventListener('click', closeEditModal);

// Handle form submission
editForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (!currentField) return;
    
    const newValue = editFieldInput.value.trim();
    
    // Get current user data
    const currentUserData = sessionStorage.getItem('currentUser');
    if (!currentUserData) return;
    
    const user = JSON.parse(currentUserData);
    
    // Update the field
    user[currentField] = newValue;
    
    // Update session storage
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    
    // Update displayed information
    populateProfileInfo(user);
    
    // Close modal
    closeEditModal();
});

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    if (e.target === editModal) {
        closeEditModal();
    }
});
