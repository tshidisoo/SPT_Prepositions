// Quiz data structure
const quizData = [
    // Part A: Fill in the blanks (Simple Present Tense) - Questions 1-10
    {
        section: "Part A: Fill in the blanks (Simple Present Tense)",
        question: "She ___ (go) to school every day.",
        type: "fill-blank",
        correctAnswer: "goes",
        userAnswer: ""
    },
    {
        section: "Part A: Fill in the blanks (Simple Present Tense)",
        question: "My father ___ (watch) TV in the evening.",
        type: "fill-blank",
        correctAnswer: "watches",
        userAnswer: ""
    },
    {
        section: "Part A: Fill in the blanks (Simple Present Tense)",
        question: "We ___ (play) football on Saturdays.",
        type: "fill-blank",
        correctAnswer: "play",
        userAnswer: ""
    },
    {
        section: "Part A: Fill in the blanks (Simple Present Tense)",
        question: "The sun ___ (rise) in the east.",
        type: "fill-blank",
        correctAnswer: "rises",
        userAnswer: ""
    },
    {
        section: "Part A: Fill in the blanks (Simple Present Tense)",
        question: "He ___ (like) pizza very much.",
        type: "fill-blank",
        correctAnswer: "likes",
        userAnswer: ""
    },
    {
        section: "Part A: Fill in the blanks (Simple Present Tense)",
        question: "They ___ (not work) on Sundays.",
        type: "fill-blank",
        correctAnswer: "do not work",
        alternateAnswers: ["don't work"],
        userAnswer: ""
    },
    {
        section: "Part A: Fill in the blanks (Simple Present Tense)",
        question: "Where ___ your brother ___ (live)?",
        type: "fill-blank",
        correctAnswer: "does your brother live",
        userAnswer: ""
    },
    {
        section: "Part A: Fill in the blanks (Simple Present Tense)",
        question: "Our teacher ___ (speak) four languages.",
        type: "fill-blank",
        correctAnswer: "speaks",
        userAnswer: ""
    },
    {
        section: "Part A: Fill in the blanks (Simple Present Tense)",
        question: "Tom always ___ (help) his mother in the kitchen.",
        type: "fill-blank",
        correctAnswer: "helps",
        userAnswer: ""
    },
    {
        section: "Part A: Fill in the blanks (Simple Present Tense)",
        question: "I ___ (study) English at school.",
        type: "fill-blank",
        correctAnswer: "study",
        userAnswer: ""
    },
    // Part B: Fill in the blanks (Prepositions) - Questions 11-20
    {
        section: "Part B: Fill in the blanks (Prepositions)",
        question: "The cat is sitting ___ the chair.",
        type: "multiple-choice",
        options: ["on", "in", "at", "under"],
        correctAnswer: "on",
        userAnswer: ""
    },
    {
        section: "Part B: Fill in the blanks (Prepositions)",
        question: "We go to school ___ the morning.",
        type: "multiple-choice",
        options: ["at", "in", "on", "by"],
        correctAnswer: "in",
        userAnswer: ""
    },
    {
        section: "Part B: Fill in the blanks (Prepositions)",
        question: "The book is ___ the bag.",
        type: "multiple-choice",
        options: ["in", "on", "at", "by"],
        correctAnswer: "in",
        userAnswer: ""
    },
    {
        section: "Part B: Fill in the blanks (Prepositions)",
        question: "My birthday is ___ July.",
        type: "multiple-choice",
        options: ["at", "on", "in", "by"],
        correctAnswer: "in",
        userAnswer: ""
    },
    {
        section: "Part B: Fill in the blanks (Prepositions)",
        question: "She usually walks ___ the park after dinner.",
        type: "fill-blank",
        correctAnswer: "through",
        alternateAnswers: ["in", "around"],
        userAnswer: ""
    },
    {
        section: "Part B: Fill in the blanks (Prepositions)",
        question: "There is a picture ___ the wall.",
        type: "multiple-choice",
        options: ["on", "in", "at", "by"],
        correctAnswer: "on",
        userAnswer: ""
    },
    {
        section: "Part B: Fill in the blanks (Prepositions)",
        question: "The train arrives ___ 5 o'clock.",
        type: "multiple-choice",
        options: ["at", "in", "on", "by"],
        correctAnswer: "at",
        userAnswer: ""
    },
    {
        section: "Part B: Fill in the blanks (Prepositions)",
        question: "He lives ___ 10 Downing Street.",
        type: "multiple-choice",
        options: ["at", "in", "on", "by"],
        correctAnswer: "at",
        userAnswer: ""
    },
    {
        section: "Part B: Fill in the blanks (Prepositions)",
        question: "The shop is ___ the corner of the street.",
        type: "multiple-choice",
        options: ["at", "in", "on", "by"],
        correctAnswer: "at",
        userAnswer: ""
    },
    {
        section: "Part B: Fill in the blanks (Prepositions)",
        question: "The children are playing ___ the garden.",
        type: "multiple-choice",
        options: ["in", "on", "at", "by"],
        correctAnswer: "in",
        userAnswer: ""
    },
    // Part C: Mixed (Simple Present & Prepositions) - Questions 21-30
    {
        section: "Part C: Mixed (Simple Present & Prepositions)",
        question: "She ___ (read) a book ___ the library.",
        type: "fill-blank",
        correctAnswer: "reads in",
        alternateAnswers: ["reads at"],
        userAnswer: ""
    },
    {
        section: "Part C: Mixed (Simple Present & Prepositions)",
        question: "They ___ (have) lunch ___ 12 o'clock every day.",
        type: "fill-blank",
        correctAnswer: "have at",
        userAnswer: ""
    },
    {
        section: "Part C: Mixed (Simple Present & Prepositions)",
        question: "My uncle ___ (work) ___ a bank.",
        type: "fill-blank",
        correctAnswer: "works at",
        alternateAnswers: ["works in"],
        userAnswer: ""
    },
    {
        section: "Part C: Mixed (Simple Present & Prepositions)",
        question: "We ___ (go) to church ___ Sundays.",
        type: "fill-blank",
        correctAnswer: "go on",
        userAnswer: ""
    },
    {
        section: "Part C: Mixed (Simple Present & Prepositions)",
        question: "The dog always ___ (sleep) ___ the sofa.",
        type: "fill-blank",
        correctAnswer: "sleeps on",
        userAnswer: ""
    },
    {
        section: "Part C: Mixed (Simple Present & Prepositions)",
        question: "The train ___ (leave) ___ the station at 8 a.m.",
        type: "fill-blank",
        correctAnswer: "leaves from",
        userAnswer: ""
    },
    {
        section: "Part C: Mixed (Simple Present & Prepositions)",
        question: "My sister ___ (study) ___ her room.",
        type: "fill-blank",
        correctAnswer: "studies in",
        userAnswer: ""
    },
    {
        section: "Part C: Mixed (Simple Present & Prepositions)",
        question: "The sun ___ (set) ___ the west.",
        type: "fill-blank",
        correctAnswer: "sets in",
        userAnswer: ""
    },
    {
        section: "Part C: Mixed (Simple Present & Prepositions)",
        question: "He ___ (eat) breakfast ___ the kitchen.",
        type: "fill-blank",
        correctAnswer: "eats in",
        userAnswer: ""
    },
    {
        section: "Part C: Mixed (Simple Present & Prepositions)",
        question: "I ___ (visit) my grandmother ___ weekends.",
        type: "fill-blank",
        correctAnswer: "visit on",
        alternateAnswers: ["visit at"],
        userAnswer: ""
    }
];

// Quiz state
let currentQuestion = 0;
let userAnswers = [];

// DOM elements
const questionContainer = document.getElementById('question-container');
const sectionTitle = document.getElementById('section-title');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const progress = document.getElementById('progress');
const results = document.getElementById('results');
const reviewSection = document.getElementById('review-section');
const quizContainer = document.querySelector('.quiz-container');

// Initialize quiz
function initQuiz() {
    currentQuestion = 0;
    userAnswers = new Array(quizData.length).fill('');
    totalQuestionsSpan.textContent = quizData.length;
    displayQuestion();
    updateProgress();
    updateNavigation();
}

// Display current question
function displayQuestion() {
    const question = quizData[currentQuestion];
    sectionTitle.textContent = question.section;
    currentQuestionSpan.textContent = currentQuestion + 1;
    
    let questionHTML = `<h3>${question.question}</h3>`;
    
    if (question.type === 'fill-blank') {
        questionHTML += `
            <div class="input-group">
                <input type="text" class="text-input" id="answer-input" 
                       placeholder="Enter your answer..." 
                       value="${userAnswers[currentQuestion] || ''}">
            </div>
        `;
    } else if (question.type === 'multiple-choice') {
        questionHTML += '<div class="multiple-choice">';
        question.options.forEach((option, index) => {
            const isSelected = userAnswers[currentQuestion] === option;
            questionHTML += `
                <div class="choice-option ${isSelected ? 'selected' : ''}" onclick="selectChoice('${option}')">
                    <input type="radio" name="choice" value="${option}" ${isSelected ? 'checked' : ''}>
                    <label>${option}</label>
                </div>
            `;
        });
        questionHTML += '</div>';
    }
    
    questionContainer.innerHTML = questionHTML;
    
    // Add event listener for text input
    const input = document.getElementById('answer-input');
    if (input) {
        input.addEventListener('input', function() {
            userAnswers[currentQuestion] = this.value.trim();
        });
        input.focus();
    }
}

// Handle multiple choice selection
function selectChoice(choice) {
    userAnswers[currentQuestion] = choice;
    
    // Update visual selection
    document.querySelectorAll('.choice-option').forEach(option => {
        option.classList.remove('selected');
        const radio = option.querySelector('input[type="radio"]');
        radio.checked = false;
    });
    
    const selectedOption = document.querySelector(`input[value="${choice}"]`).closest('.choice-option');
    selectedOption.classList.add('selected');
    selectedOption.querySelector('input[type="radio"]').checked = true;
}

// Update progress bar
function updateProgress() {
    const progressPercentage = ((currentQuestion + 1) / quizData.length) * 100;
    progress.style.width = progressPercentage + '%';
}

// Update navigation buttons
function updateNavigation() {
    prevBtn.disabled = currentQuestion === 0;
    
    if (currentQuestion === quizData.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
    }
}

// Navigate to previous question
function previousQuestion() {
    if (currentQuestion > 0) {
        saveCurrentAnswer();
        currentQuestion--;
        displayQuestion();
        updateProgress();
        updateNavigation();
    }
}

// Navigate to next question
function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        saveCurrentAnswer();
        currentQuestion++;
        displayQuestion();
        updateProgress();
        updateNavigation();
    }
}

// Save current answer
function saveCurrentAnswer() {
    const input = document.getElementById('answer-input');
    if (input) {
        userAnswers[currentQuestion] = input.value.trim();
    }
    
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (selectedChoice) {
        userAnswers[currentQuestion] = selectedChoice.value;
    }
}

// Submit quiz
function submitQuiz() {
    saveCurrentAnswer();
    
    const score = calculateScore();
    showResults(score);
}

// Calculate score
function calculateScore() {
    let correct = 0;
    let partACorrect = 0, partBCorrect = 0, partCCorrect = 0;
    
    userAnswers.forEach((answer, index) => {
        const question = quizData[index];
        let isCorrect = false;
        
        // Normalize answers for comparison
        const normalizedAnswer = answer.toLowerCase().trim();
        const normalizedCorrect = question.correctAnswer.toLowerCase().trim();
        
        // Check main answer
        if (normalizedAnswer === normalizedCorrect) {
            isCorrect = true;
        }
        
        // Check alternate answers if they exist
        if (!isCorrect && question.alternateAnswers) {
            isCorrect = question.alternateAnswers.some(alt => 
                normalizedAnswer === alt.toLowerCase().trim()
            );
        }
        
        if (isCorrect) {
            correct++;
            
            // Count section scores
            if (index < 10) partACorrect++;
            else if (index < 20) partBCorrect++;
            else partCCorrect++;
        }
    });
    
    return {
        total: correct,
        percentage: Math.round((correct / quizData.length) * 100),
        partA: partACorrect,
        partB: partBCorrect,
        partC: partCCorrect
    };
}

// Show results
function showResults(score) {
    quizContainer.style.display = 'none';
    results.style.display = 'block';
    
    document.getElementById('score-percentage').textContent = score.percentage + '%';
    document.getElementById('correct-answers').textContent = score.total;
    document.getElementById('total-score').textContent = quizData.length;
    document.getElementById('part-a-score').textContent = `${score.partA}/10`;
    document.getElementById('part-b-score').textContent = `${score.partB}/10`;
    document.getElementById('part-c-score').textContent = `${score.partC}/10`;
    
    // Color code the score circle based on performance
    const scoreCircle = document.querySelector('.score-circle');
    if (score.percentage >= 80) {
        scoreCircle.style.borderColor = '#059669';
        scoreCircle.querySelector('span').style.color = '#059669';
    } else if (score.percentage >= 60) {
        scoreCircle.style.borderColor = '#d97706';
        scoreCircle.querySelector('span').style.color = '#d97706';
    } else {
        scoreCircle.style.borderColor = '#dc2626';
        scoreCircle.querySelector('span').style.color = '#dc2626';
    }
}

// Show review
function showReview() {
    results.style.display = 'none';
    reviewSection.style.display = 'block';
    
    const reviewContent = document.getElementById('review-content');
    let reviewHTML = '';
    
    quizData.forEach((question, index) => {
        const userAnswer = userAnswers[index] || 'No answer';
        const isCorrect = checkAnswer(userAnswers[index], question);
        
        reviewHTML += `
            <div class="review-item ${isCorrect ? 'correct' : 'incorrect'}">
                <div class="review-question">Question ${index + 1}: ${question.question}</div>
                <div class="review-answer your-answer">Your answer: <span class="${isCorrect ? 'correct-answer' : 'incorrect-answer'}">${userAnswer}</span></div>
                ${!isCorrect ? `<div class="review-answer correct-answer">Correct answer: ${question.correctAnswer}${question.alternateAnswers ? ` (or ${question.alternateAnswers.join(', ')})` : ''}</div>` : ''}
            </div>
        `;
    });
    
    reviewContent.innerHTML = reviewHTML;
}

// Check if answer is correct
function checkAnswer(userAnswer, question) {
    if (!userAnswer) return false;
    
    const normalizedAnswer = userAnswer.toLowerCase().trim();
    const normalizedCorrect = question.correctAnswer.toLowerCase().trim();
    
    if (normalizedAnswer === normalizedCorrect) {
        return true;
    }
    
    if (question.alternateAnswers) {
        return question.alternateAnswers.some(alt => 
            normalizedAnswer === alt.toLowerCase().trim()
        );
    }
    
    return false;
}

// Restart quiz
function restartQuiz() {
    results.style.display = 'none';
    reviewSection.style.display = 'none';
    quizContainer.style.display = 'block';
    initQuiz();
}

// Back to results from review
function backToResults() {
    reviewSection.style.display = 'none';
    results.style.display = 'block';
}

// Event listeners
prevBtn.addEventListener('click', previousQuestion);
nextBtn.addEventListener('click', nextQuestion);
submitBtn.addEventListener('click', submitQuiz);
document.getElementById('restart-btn').addEventListener('click', restartQuiz);
document.getElementById('review-btn').addEventListener('click', showReview);
document.getElementById('back-to-results').addEventListener('click', backToResults);

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft' && !prevBtn.disabled) {
        previousQuestion();
    } else if (e.key === 'ArrowRight' && nextBtn.style.display !== 'none') {
        nextQuestion();
    } else if (e.key === 'Enter') {
        if (submitBtn.style.display !== 'none') {
            submitQuiz();
        } else if (nextBtn.style.display !== 'none') {
            nextQuestion();
        }
    }
});

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', initQuiz);