// Quiz data (questions, options, and answers)
var quizData = [
    {
        question: "Who is known as the 'God of Cricket'?",
        options: ["Sachin Tendulkar", "Virat Kohli", "Rahul Dravid", "MS Dhoni"],
        answer: "Sachin Tendulkar"
    },
    {
        question: "Which Indian cricketer has the nickname 'Captain Cool'?",
        options: ["Sachin Tendulkar", "Virat Kohli", "Rahul Dravid", "MS Dhoni"],
        answer: "MS Dhoni"
    },
    {
        question: "Who was the captain of the Indian cricket team when they won their first ODI World Cup?",
        options: ["Sachin Tendulkar", "Kapil Dev", "Sunil Gavaskar", "Mohammad Azharuddin"],
        answer: "Kapil Dev"
    },
    {
        question: "Which Indian batsman is known for scoring the first double century in ODIs?",
        options: ["Sachin Tendulkar", "Virender Sehwag", "Rohit Sharma", "Sourav Ganguly"],
        answer: "Sachin Tendulkar"
    },
    {
        question: "In which year did India win their first ICC T20 World Cup?",
        options: ["2007", "2009", "2011", "2013"],
        answer: "2007"
    }
];

// Function to load quiz questions and options
function loadQuiz() {
    var quiz = document.getElementById('quiz');
    var output = '';

    quizData.forEach((questionData, index) => {
        output += `<div class="question">`;
        output += `<p>${index + 1}. ${questionData.question}</p>`;
        output += `<div class="options">`;
        questionData.options.forEach(option => {
            output += `<label><input type="radio" name="question${index}" value="${option}"> ${option}</label>`;
        });
        output += `</div></div>`;
    });

    quiz.innerHTML = output;

    animateQuestions();
}

// Function to animate questions
function animateQuestions() {
    var questions = document.querySelectorAll('.question');
    questions.forEach((question, index) => {
        setTimeout(() => {
            question.classList.add('active');
        }, index * 200); // Delay each question animation
    });
}

// Function to calculate score and show results
function showResults() {
    var quiz = document.getElementById('quiz');
    var results = document.getElementById('results');
    var scoreDisplay = document.getElementById('score');
    var correctAnswers = document.getElementById('correct-answers');
    var submitButton = document.querySelector('button');
    
    // Disable submit button to prevent multiple submissions
    submitButton.setAttribute('disabled', 'true');

    // Check answers and calculate score
    var score = 0;
    quizData.forEach((questionData, index) => {
        var selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === questionData.answer) {
            score++;
        }

        var correctAnswer = document.createElement('li');
        correctAnswer.textContent = `${index + 1}. ${questionData.question} - Correct Answer: ${questionData.answer}`;
        correctAnswers.appendChild(correctAnswer);
    });

    // Display score and correct answers after a delay for animation
    setTimeout(() => {
        scoreDisplay.textContent = score;
        quiz.style.display = 'none';
        results.style.display = 'block'; // Ensure results are displayed
        results.classList.add('active');
    }, 1000); // Delay showing results for animation
}

// Load quiz when the page loads
window.onload = loadQuiz;
