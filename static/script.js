// Quiz data storage
let currentQuiz = {
  title: '',
  skills: [],
  questions: [],
  duration: 30, // Default 30 minutes
  timeRemaining: 0
};

document.addEventListener('DOMContentLoaded', function() {
    // File upload handling
    const fileUpload = document.getElementById('file-upload');
    const filePreview = document.getElementById('file-preview');
    const sendButton = document.getElementById('send-button');
    const promptInput = document.getElementById('prompt-input');

    // Timer variables
    let timerInterval;
    
    // Automatically resize textarea based on content
    promptInput.addEventListener('input', function() {
      this.style.height = 'auto';
      this.style.height = (this.scrollHeight) + 'px';
    });
    
    // File upload event
    fileUpload.addEventListener('change', function(e) {
      if (this.files.length > 0) {
        const file = this.files[0];
        displayFilePreview(file);
      }
    });
    
    // Send button click event
    sendButton.addEventListener('click', function() {
      generateQuiz();
    });
    
    // Enter key to send (Ctrl+Enter or Cmd+Enter)
    promptInput.addEventListener('keydown', function(e) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        generateQuiz();
      }
    });
  
    // Start Quiz button
    document.addEventListener('click', function(e) {
      if (e.target && e.target.id === 'start-quiz') {
        startQuiz();
      }
    });
  
    // Submit Quiz button
    document.getElementById('submit-quiz').addEventListener('click', function() {
      submitQuiz();
    });
  
    // Back to Home button
    document.getElementById('back-to-home').addEventListener('click', function() {
      document.getElementById('results-modal').style.display = 'none';
      document.getElementById('quiz-modal').style.display = 'none';
    });
  
    // Close Results button
    document.getElementById('close-results').addEventListener('click', function() {
      document.getElementById('results-modal').style.display = 'none';
      document.getElementById('quiz-modal').style.display = 'none';
    });
  });

  // Display file preview
  function displayFilePreview(file) {
    const filePreview = document.getElementById('file-preview');
    let fileIcon;
    
    // Determine file icon based on file type
    if (file.type.includes('pdf')) {
      fileIcon = 'fa-file-pdf';
    } else if (file.type.includes('doc') || file.type.includes('word')) {
      fileIcon = 'fa-file-word';
    } else if (file.type.includes('text')) {
      fileIcon = 'fa-file-alt';
    } else {
      fileIcon = 'fa-file';
    }
    
    // Create file preview element
    filePreview.innerHTML = `
      <div class="file-item">
        <i class="fas ${fileIcon} file-icon"></i>
        <span class="file-name">${file.name}</span>
        <i class="fas fa-times file-remove" onclick="removeFile()"></i>
      </div>
    `;
    
    // Show the file preview
    filePreview.style.display = 'block';
  }
  
  // Remove file
  function removeFile() {
    const filePreview = document.getElementById('file-preview');
    const fileUpload = document.getElementById('file-upload');
    
    filePreview.innerHTML = '';
    filePreview.style.display = 'none';
    fileUpload.value = '';
  }
  
  // Generate quiz function
  async function generateQuiz() {

    if (typeof currentQuiz === 'undefined') {
      console.error('currentQuiz is not defined!');
      return;
    }

    const promptInput = document.getElementById('prompt-input');
    const fileUpload = document.getElementById('file-upload');
    const loading = document.getElementById('loading');
    const results = document.getElementById('results');
     
    // Validate if there's either text input or file upload
    if (promptInput.value.trim() === '' && fileUpload.files.length === 0) {
      alert('Please enter job description text or upload a file.');
      return;
    }
    
    // Show loading animation
    loading.style.display = 'block';
    
    // Create form data
    const formData = new FormData();
    if (fileUpload.files.length > 0) {
      formData.append("jd_file", fileUpload.files[0]);
    }
    if (promptInput.value.trim() !== '') {
      formData.append("prompt", promptInput.value.trim());
    }
  
    try {
      const response = await fetch("/generate", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
      
      // Store quiz data
      currentQuiz.questions = data;
      
      // Determine the title based on extracted skills
      const skillKeywords = getSkillsFromQuestions(data);
      currentQuiz.skills = skillKeywords;
      currentQuiz.title = skillKeywords.length > 0 ? 
        `${skillKeywords[0].toUpperCase()} MCQ Test` : 
        "Technical Skills Test";
      
      // Determine duration based on number of questions
      currentQuiz.duration = Math.max(30, Math.min(60, data.length * 2)); // 2 min per question, min 30min, max 60min
      
      // Generate quiz preview
      displayQuizPreview(currentQuiz);
      
      // Show results section
      results.style.display = 'block';
      results.scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
      console.error("Error generating quiz:", error);
      alert("Something went wrong while generating the quiz.");
    } finally {
      loading.style.display = 'none';
    }
  }
  
  function getSkillsFromQuestions(questions) {
    // Extract skills from questions
    const skills = [];
    const skillKeywords = ['python', 'java', 'javascript', 'sql', 'react', 'vue', 'angular', 
                          'nodejs', 'ruby', 'php', 'html', 'css', 'aws', 'cloud', 'devops'];
    
    questions.forEach(q => {
      const text = q.question.toLowerCase();
      skillKeywords.forEach(skill => {
        if (text.includes(skill) && !skills.includes(skill)) {
          skills.push(skill);
        }
      });
    });
    
    return skills;
  }
  
  function displayQuizPreview(quiz) {
    const quizPreview = document.getElementById('quiz-preview');
    
    quizPreview.innerHTML = `
      <div class="quiz-title">${quiz.title}</div>
      <div class="quiz-meta">
        <div><i class="fas fa-question-circle"></i> ${quiz.questions.length} Questions</div>
        <div><i class="fas fa-clock"></i> ${quiz.duration} min</div>
        <div><i class="fas fa-medal"></i> ${getDifficultyLevel(quiz.questions)}</div>
      </div>
      <div class="skills-container">
        ${quiz.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
      </div>
      <div class="quiz-actions">
        <button id="start-quiz" class="btn btn-primary">Start Quiz</button>
      </div>
    `;
  }
  
  function getDifficultyLevel(questions) {
    // Simple algorithm to determine difficulty based on question count
    if (questions.length <= 5) return "Beginner";
    if (questions.length <= 10) return "Intermediate";
    return "Advanced";
  }
  
  function startQuiz() {
    // Set up quiz page
    document.getElementById('quiz-title').textContent = currentQuiz.title;
    
    // Generate question HTML
    const questionsContainer = document.getElementById('quiz-questions');
    questionsContainer.innerHTML = '';
    
    currentQuiz.questions.forEach((question, index) => {
      const questionElement = document.createElement('div');
      questionElement.className = 'question-item';
      questionElement.innerHTML = `
        <div class="question-text">${index + 1}. ${question.question}</div>
        <ul class="options-list">
          ${question.options.map((option, optIndex) => `
            <li class="option-item">
              <input type="radio" id="q${index}_opt${optIndex}" name="q${index}" value="${optIndex}">
              <label for="q${index}_opt${optIndex}">${option}</label>
            </li>
          `).join('')}
        </ul>
      `;
      questionsContainer.appendChild(questionElement);
    });
    
    // Show quiz modal
    document.getElementById('quiz-modal').style.display = 'block';
    
    // Start timer
    startTimer(currentQuiz.duration);
  }
  
  function startTimer(minutes) {
    // Set up timer
    currentQuiz.timeRemaining = minutes * 60; // Convert to seconds
    
    const timerDisplay = document.getElementById('timer-display');
    
    // Clear previous interval if any
    if (window.timerInterval) {
      clearInterval(window.timerInterval);
    }
    
    // Update timer display
    updateTimerDisplay();
    
    // Start interval
    window.timerInterval = setInterval(function() {
      currentQuiz.timeRemaining--;
      
      if (currentQuiz.timeRemaining <= 0) {
        clearInterval(window.timerInterval);
        submitQuiz();
      } else {
        updateTimerDisplay();
      }
    }, 1000);
  }
  
  function updateTimerDisplay() {
    const minutes = Math.floor(currentQuiz.timeRemaining / 60);
    const seconds = currentQuiz.timeRemaining % 60;
    
    document.getElementById('timer-display').textContent = 
      `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  
  function submitQuiz() {
    // Stop timer
    clearInterval(window.timerInterval);
    
    // Collect answers
    const userAnswers = [];
    
    currentQuiz.questions.forEach((_, index) => {
      const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
      userAnswers.push(selectedOption ? parseInt(selectedOption.value) : -1);
    });
    
    // Calculate score
    let score = 0;
    let unanswered = 0;
    
    userAnswers.forEach((answer, index) => {
      if (answer === -1) {
        unanswered++;
      } else {
        // Assuming first option is always correct for this demo
        // In a real implementation, you would compare with the correct answer
        if (answer === 0) {
          score++;
        }
      }
    });
    
    // Generate results
    displayResults(score, unanswered, userAnswers);
  }
  
  function displayResults(score, unanswered, userAnswers) {
    const totalQuestions = currentQuiz.questions.length;
    const scorePercentage = Math.round((score / totalQuestions) * 100);
    
    // Update results summary
    const resultsSummary = document.getElementById('results-summary');
    resultsSummary.innerHTML = `
      <div class="score-display">${score} / ${totalQuestions}</div>
      <div class="score-text">Score: ${scorePercentage}%</div>
      <div>Correct: ${score} | Incorrect: ${totalQuestions - score - unanswered} | Unanswered: ${unanswered}</div>
    `;
    
    // Update detailed results
    const resultsDetails = document.getElementById('results-details');
    resultsDetails.innerHTML = '<h3>Question Details:</h3>';
    
    currentQuiz.questions.forEach((question, index) => {
      const userAnswer = userAnswers[index];
      const isCorrect = userAnswer === 0; // Assuming first option is always correct
      const status = userAnswer === -1 ? 'Unanswered' : 
                    isCorrect ? 'Correct' : 'Incorrect';
      
      resultsDetails.innerHTML += `
        <div class="result-question">
          <p><strong>${index + 1}. ${question.question}</strong></p>
          <p class="${userAnswer === -1 ? '' : (isCorrect ? 'correct-answer' : 'incorrect-answer')}">
            ${status}
          </p>
        </div>
      `;
    });
    
    // Show results modal
    document.getElementById('results-modal').style.display = 'block';
  }