// Sample MCQ questions data - you can replace this with your own questions
const examQuestions = [
    {
        id: 1,
        text: "What is the capital of France?",
        image: null,
        options: [
            "London",
            "Berlin",
            "Paris",
            "Madrid"
        ],
        correctOptionIndex: 2,
        explanation: "Paris is the capital and largest city of France. It is situated on the Seine River, in northern France."
    },
    {
        id: 2,
        text: "What is the formula for calculating the area of a circle?",
        image: null,
        options: [
            "A = 2πr",
            "A = πr²",
            "A = πd",
            "A = 4πr²"
        ],
        correctOptionIndex: 1,
        explanation: "The area of a circle is calculated using the formula A = πr², where r is the radius of the circle and π is approximately 3.14159."
    },
    {
        id: 3,
        text: "Which of the following is needed for photosynthesis?",
        image: "/api/placeholder/400/300",
        options: [
            "Oxygen only",
            "Sunlight, carbon dioxide, and water",
            "Nitrogen and phosphorus",
            "Heat and pressure"
        ],
        correctOptionIndex: 1,
        explanation: "During photosynthesis, plants use sunlight, carbon dioxide, and water to create glucose and oxygen. The chemical equation is: 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂."
    },
    {
        id: 4,
        text: "What are the three states of matter?",
        image: null,
        options: [
            "Solid, liquid, and gas",
            "Hot, cold, and warm",
            "Proton, neutron, and electron",
            "Earth, wind, and fire"
        ],
        correctOptionIndex: 0,
        explanation: "The three basic states of matter are solid (fixed shape and volume), liquid (fixed volume but variable shape), and gas (variable volume and shape)."
    },
    {
        id: 5,
        text: "Which process creates genetically diverse cells?",
        image: "/api/placeholder/400/200",
        options: [
            "Mitosis",
            "Meiosis",
            "Binary Fission",
            "Budding"
        ],
        correctOptionIndex: 1,
        explanation: "Mitosis is cell division that results in two identical daughter cells for growth and repair. Meiosis is used in sexual reproduction and produces four genetically diverse haploid cells."
    },
    {
        id: 6,
        text: "Newton's Third Law of Motion states:",
        image: null,
        options: [
            "An object in motion stays in motion",
            "Force equals mass times acceleration",
            "For every action, there is an equal and opposite reaction",
            "Energy cannot be created or destroyed"
        ],
        correctOptionIndex: 2,
        explanation: "Newton's Third Law states that when one object exerts a force on a second object, the second object exerts an equal and opposite force on the first."
    },
    {
        id: 7,
        text: "Which equation represents the Pythagorean theorem?",
        image: "/api/placeholder/300/300",
        options: [
            "E = mc²",
            "a² + b² = c²",
            "F = ma",
            "PV = nRT"
        ],
        correctOptionIndex: 1,
        explanation: "The Pythagorean theorem states that in a right-angled triangle, the square of the length of the hypotenuse (c) is equal to the sum of squares of the other two sides (a and b)."
    },
    {
        id: 8,
        text: "Which of these is NOT a main component of a cell?",
        image: null,
        options: [
            "Cell membrane",
            "Cytoplasm",
            "Nucleus",
            "Carburetor"
        ],
        correctOptionIndex: 3,
        explanation: "The main components of a cell include the cell membrane (which controls what enters and leaves the cell), cytoplasm (the gel-like substance where organelles are suspended), and nucleus (which contains the genetic material). A carburetor is a component of engines, not cells."
    },
    {
        id: 9,
        text: "The law of conservation of energy states:",
        image: null,
        options: [
            "Energy can be created but not destroyed",
            "Energy can be destroyed but not created",
            "Energy cannot be created or destroyed, only transformed",
            "Energy naturally increases over time"
        ],
        correctOptionIndex: 2,
        explanation: "The law of conservation of energy states that the total energy of an isolated system remains constant; it can neither be created nor destroyed, just transformed or transferred from one form to another."
    },
    {
        id: 10,
        text: "According to the Brønsted-Lowry theory:",
        image: null,
        options: [
            "An acid is a proton donor",
            "A base is an electron donor",
            "An acid has a pH greater than 7",
            "A base has a pH less than 7"
        ],
        correctOptionIndex: 0,
        explanation: "According to the Brønsted-Lowry theory, an acid is a substance that donates hydrogen ions (H+) or protons, and a base is a substance that accepts hydrogen ions or protons."
    },
    {
        id: 10,
        text: "According to the Brønsted-Lowry theory:",
        image: null,
        options: [
            "An acid is a proton donor",
            "A base is an electron donor",
            "An acid has a pH greater than 7",
            "A base has a pH less than 7"
        ],
        correctOptionIndex: 0,
        explanation: "According to the Brønsted-Lowry theory, an acid is a substance that donates hydrogen ions (H+) or protons, and a base is a substance that accepts hydrogen ions or protons."
    },
];

// DOM Elements
const startScreen = document.getElementById('start-screen');
const examScreen = document.getElementById('exam-screen');
const reviewScreen = document.getElementById('review-screen');
const timerElement = document.getElementById('timer');
const startBtn = document.getElementById('start-btn');
const submitBtn = document.getElementById('submit-btn');
const restartBtn = document.getElementById('restart-btn');
const questionContainer = document.getElementById('question-container');
const reviewContainer = document.getElementById('review-container');

// Timer variables
let examTime = 60 * 60; // 60 minutes in seconds
let timerInterval;
let studentAnswers = {};

// Fisher-Yates shuffle algorithm for randomizing questions
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Format time from seconds to MM:SS
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Start the exam timer
function startTimer() {
    timerElement.classList.add('active');
    timerInterval = setInterval(() => {
        examTime--;
        timerElement.textContent = formatTime(examTime);
        
        if (examTime <= 0) {
            clearInterval(timerInterval);
            finishExam();
        }
    }, 1000);
}

// Display MCQ questions in the exam screen
function displayQuestions(questions) {
    questionContainer.innerHTML = '';
    studentAnswers = {}; // Reset student answers
    
    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        
        // Create option elements with labels a, b, c, d
        const optionsHTML = question.options.map((option, optionIndex) => {
            const optionLabel = String.fromCharCode(97 + optionIndex); // 'a', 'b', 'c', 'd'
            return `
                <div class="option">
                    <label for="q${index}_opt${optionIndex}">${optionLabel}) ${option}</label>
                </div>
            `;
        }).join('');
        
        questionElement.innerHTML = `
            <div class="question-number">${index + 1}</div>
            <div class="question-content">
                <h3>${question.text}</h3>
                ${question.image ? `<img src="${question.image}" alt="Question ${index + 1} image" class="question-image">` : ''}
                <div class="options-container">
                    ${optionsHTML}
                </div>
            </div>
        `;
        
        questionContainer.appendChild(questionElement);
    });
}

// Display review with answers and explanations
function displayReview(questions) {
    reviewContainer.innerHTML = '';
    
    questions.forEach((question, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');
        
        // Create option elements for review
        const optionsHTML = question.options.map((option, optionIndex) => {
            const isCorrect = optionIndex === question.correctOptionIndex;
            const optionLabel = String.fromCharCode(97 + optionIndex); // 'a', 'b', 'c', 'd'
            let optionClass = '';
            
            if (isCorrect) {
                optionClass = 'correct-option'; // Green highlight for correct option
            }
            
            return `
                <div class="option ${optionClass}">
                    <label for="review_q${index}_opt${optionIndex}">${optionLabel}) ${option}</label>
                    ${isCorrect ? '<span class="correct-mark">✓</span>' : ''}
                </div>
            `;
        }).join('');
        
        reviewItem.innerHTML = `
            <div class="question">
                <div class="question-number">${index + 1}</div>
                <div class="question-content">
                    <h3>${question.text}</h3>
                    ${question.image ? `<img src="${question.image}" alt="Question ${index + 1} image" class="question-image">` : ''}
                    
                    <div class="options-container">
                        ${optionsHTML}
                    </div>
                    
                    <div class="answer-section">
                        <h4>Correct Answer:</h4>
                        <p>${question.options[question.correctOptionIndex]}</p>
                        
                        ${question.explanation ? `
                            <div class="explanation">
                                <strong>Explanation:</strong>
                                <p>${question.explanation}</p>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
        
        reviewContainer.appendChild(reviewItem);
    });
}

// Start the exam
function startExam() {
    startScreen.classList.add('hidden');
    examScreen.classList.remove('hidden');
    
    // Shuffle questions
    const shuffledQuestions = shuffleArray(examQuestions);
    
    // Display questions
    displayQuestions(shuffledQuestions);
    
    // Start timer
    startTimer();
    
    // Store shuffled questions for review
    examScreen.dataset.questions = JSON.stringify(shuffledQuestions);
}

// Finish the exam
function finishExam() {
    clearInterval(timerInterval);
    examScreen.classList.add('hidden');
    reviewScreen.classList.remove('hidden');
    
    // Get shuffled questions from data attribute
    const shuffledQuestions = JSON.parse(examScreen.dataset.questions);
    
    // Display review with answers and explanations
    displayReview(shuffledQuestions);
}

// Restart the exam
function restartExam() {
    // Reset timer
    examTime = 60 * 60;
    timerElement.textContent = formatTime(examTime);
    
    // Hide review screen and show start screen
    reviewScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
    
    // Reset timer appearance
    timerElement.classList.remove('active');
    
    // Reset student answers
    studentAnswers = {};
}

// Event Listeners
startBtn.addEventListener('click', startExam);
submitBtn.addEventListener('click', finishExam);
restartBtn.addEventListener('click', restartExam);

// Initialize
timerElement.textContent = formatTime(examTime);
