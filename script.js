// Test questions database
const questionDatabase = {
  java: {
    basic: [
      // Data Types (8 questions)
      {
        id: 1,
        question: "Which of the following is a primitive data type in Java?",
        options: ["String", "Array", "int", "Object"],
        correctAnswer: "int",
        topic: "Data Types"
      },
      {
        id: 2,
        question: "What is the size of int data type in Java?",
        options: ["8 bits", "16 bits", "32 bits", "64 bits"],
        correctAnswer: "32 bits",
        topic: "Data Types"
      },
      {
        id: 3,
        question: "What is the default value of a boolean primitive type in Java?",
        options: ["true", "false", "null", "0"],
        correctAnswer: "false",
        topic: "Data Types"
      },
      {
        id: 4,
        question: "Which of the following is the correct way to declare a floating-point number in Java?",
        options: ["float x = 10.5;", "float x = 10.5f;", "double x = 10.5f;", "Float x = 10.5;"],
        correctAnswer: "float x = 10.5f;",
        topic: "Data Types"
      },
      {
        id: 5,
        question: "What is the result of 5 + 7 + \"Java\"?",
        options: ["12Java", "5 + 7 + Java", "57Java", "Java57"],
        correctAnswer: "12Java",
        topic: "Data Types"
      },
      {
        id: 6,
        question: "What is the range of byte data type in Java?",
        options: ["-128 to 127", "0 to 255", "-32768 to 32767", "0 to 65535"],
        correctAnswer: "-128 to 127",
        topic: "Data Types"
      },
      {
        id: 7,
        question: "Which of the following is NOT a primitive data type in Java?",
        options: ["boolean", "char", "byte", "String"],
        correctAnswer: "String",
        topic: "Data Types"
      },
      {
        id: 8,
        question: "What happens when you assign a value that is too large for an int variable?",
        options: ["Compilation error", "Runtime error", "Value wraps around", "Truncation occurs"],
        correctAnswer: "Value wraps around",
        topic: "Data Types"
      },
      
      // Variables (7 questions)
      {
        id: 9,
        question: "What is the correct way to declare a variable in Java?",
        options: ["variable x;", "var x;", "x = 10;", "int x;"],
        correctAnswer: "int x;",
        topic: "Variables"
      },
      {
        id: 10,
        question: "What is the default value of an int variable in a class?",
        options: ["0", "1", "null", "undefined"],
        correctAnswer: "0",
        topic: "Variables"
      },
      {
        id: 11,
        question: "How do you declare a constant variable in Java?",
        options: ["const int x = 10;", "let x = 10;", "final int x = 10;", "static int x = 10;"],
        correctAnswer: "final int x = 10;",
        topic: "Variables"
      },
      {
        id: 12,
        question: "Which of the following is a valid variable name in Java?",
        options: ["2variable", "_variable", "variable-name", "class"],
        correctAnswer: "_variable",
        topic: "Variables"
      },
      {
        id: 13,
        question: "Which of the following is the correct way to initialize multiple variables of the same type?",
        options: ["int a, b, c = 5;", "int a = b = c = 5;", "int a = 5, b = 5, c = 5;", "int a, b, c; a, b, c = 5;"],
        correctAnswer: "int a = 5, b = 5, c = 5;",
        topic: "Variables"
      },
      {
        id: 14,
        question: "What is the scope of a variable declared within a method?",
        options: ["Class scope", "Method scope", "Block scope", "Package scope"],
        correctAnswer: "Method scope",
        topic: "Variables"
      },
      {
        id: 15,
        question: "What is the difference between local variables and instance variables?",
        options: [
          "Local variables are declared within methods, instance variables are declared in a class",
          "Local variables are static, instance variables are not",
          "Local variables are accessible throughout the class, instance variables are not",
          "There is no difference"
        ],
        correctAnswer: "Local variables are declared within methods, instance variables are declared in a class",
        topic: "Variables"
      },
      
      // Operators (5 questions)
      {
        id: 16,
        question: "What is the output of the following code?\nint x = 5;\nSystem.out.println(x++);",
        options: ["5", "6", "4", "Error"],
        correctAnswer: "5",
        topic: "Operators"
      },
      {
        id: 17,
        question: "What does the '==' operator compare in Java?",
        options: ["Values for primitives, references for objects", "Only values", "Only references", "Memory addresses"],
        correctAnswer: "Values for primitives, references for objects",
        topic: "Operators"
      },
      {
        id: 18,
        question: "Which operator is used to compare two objects for equality of their values?",
        options: ["==", "===", "equals()", "equalsTo()"],
        correctAnswer: "equals()",
        topic: "Operators"
      },
      {
        id: 19,
        question: "What is the result of 10 % 3 in Java?",
        options: ["1", "3.33", "3", "0"],
        correctAnswer: "1",
        topic: "Operators"
      },
      {
        id: 20,
        question: "What is the difference between prefix (++x) and postfix (x++) increment operators?",
        options: [
          "Prefix increments before using the value, postfix after",
          "Prefix is faster than postfix",
          "Prefix can only be used with integers",
          "There is no difference"
        ],
        correctAnswer: "Prefix increments before using the value, postfix after",
        topic: "Operators"
      },
      
      // Control Flow (8 questions)
      {
        id: 21,
        question: "Which statement is used to make decisions in Java?",
        options: ["for", "switch", "while", "do-while"],
        correctAnswer: "switch",
        topic: "Control Flow"
      },
      {
        id: 22,
        question: "Which loop will execute at least once?",
        options: ["for loop", "while loop", "do-while loop", "for-each loop"],
        correctAnswer: "do-while loop",
        topic: "Control Flow"
      },
      {
        id: 23,
        question: "Which statement is used to exit a loop in Java?",
        options: ["exit;", "break;", "stop;", "return;"],
        correctAnswer: "break;",
        topic: "Control Flow"
      },
      {
        id: 24,
        question: "How do you start writing a for loop in Java?",
        options: ["for (i = 0; i < 5)", "for i = 1 to 5", "for (int i = 0; i < 5; i++)", "for (i < 5; i++)"],
        correctAnswer: "for (int i = 0; i < 5; i++)",
        topic: "Control Flow"
      },
      {
        id: 25,
        question: "What does the 'continue' statement do in a loop?",
        options: [
          "Skips the current iteration and continues with the next",
          "Exits the loop completely",
          "Restarts the loop from the beginning",
          "Pauses the loop until a condition is met"
        ],
        correctAnswer: "Skips the current iteration and continues with the next",
        topic: "Control Flow"
      },
      {
        id: 26,
        question: "What is the syntax for an enhanced for loop (for-each loop) in Java?",
        options: [
          "for (element : collection) { }",
          "for (element in collection) { }",
          "foreach (element in collection) { }",
          "for (collection as element) { }"
        ],
        correctAnswer: "for (element : collection) { }",
        topic: "Control Flow"
      },
      {
        id: 27,
        question: "In a switch statement, what happens if a break statement is missing from a case?",
        options: [
          "Compilation error",
          "Nothing, the switch works normally",
          "Execution falls through to the next case",
          "Runtime error"
        ],
        correctAnswer: "Execution falls through to the next case",
        topic: "Control Flow"
      },
      {
        id: 28,
        question: "Which of the following is a valid condition in an if statement?",
        options: [
          "if x = 5 then",
          "if (x = 5)",
          "if (x == 5)",
          "if x == 5"
        ],
        correctAnswer: "if (x == 5)",
        topic: "Control Flow"
      },
      
      // Methods (5 questions)
      {
        id: 29,
        question: "What is the correct way to create a method in Java?",
        options: [
          "void myMethod[] {}", 
          "method void myMethod() {}", 
          "void myMethod() {}", 
          "function myMethod() {}"
        ],
        correctAnswer: "void myMethod() {}",
        topic: "Methods"
      },
      {
        id: 30,
        question: "Which method can be used to find the maximum of two numbers?",
        options: [
          "Math.maximum(x, y)", 
          "Math.max(x, y)", 
          "Math.largest(x, y)", 
          "Maximum.of(x, y)"
        ],
        correctAnswer: "Math.max(x, y)",
        topic: "Methods"
      },
      {
        id: 31,
        question: "What is method overloading in Java?",
        options: [
          "Having multiple methods with the same name but different parameters",
          "Having multiple methods with the same name and parameters",
          "Having methods with the same name in different classes",
          "Having methods that override parent class methods"
        ],
        correctAnswer: "Having multiple methods with the same name but different parameters",
        topic: "Methods"
      },
    ],
  }
}

// State variables
let currentTest = {
  language: "",
  level: "",
  questions: [],
  currentSet: 1,
  totalSets: 5,
  answers: {},
  wrongTopics: {},
  timer: null,
  timeRemaining: 0,
  testStartTime: null
};

// Start the test
// Start the test
function startTest(level) {
  // Set test parameters
  currentTest.language = "java"; // Default to Java (can be changed based on page)
  currentTest.level = level;
  currentTest.currentSet = 1;
  currentTest.answers = {};
  currentTest.wrongTopics = {};
  
  // Hide intro section and show test section
  document.getElementById("testIntro").classList.add("hidden");
  document.getElementById("testSection").classList.remove("hidden");
  document.getElementById("scoreSection").classList.add("hidden");
  
  // Set the title
  document.getElementById("testLevelTitle").textContent = 
    `${capitalizeFirstLetter(currentTest.language)} ${capitalizeFirstLetter(currentTest.level)} Test`;
  
  // Get first 10 questions
  loadQuestionsForSet(1);
  
  // Start timer - 15 minutes for the whole test
  startTimer(15 * 60); // 15 minutes in seconds
  
  // Record start time
  currentTest.testStartTime = new Date();
  
  // Set up navigation buttons
  document.getElementById("prevSet").style.display = 'none'; // Hide Previous button completely
  document.getElementById("nextSet").disabled = false;
  
  // Hide Submit button initially - only show on the last set
  document.getElementById('submitBtn').style.display = 'none';
  
  // Show first set of questions
  showQuestionSet('first');
}

// Load questions for a specific set
function loadQuestionsForSet(setNumber) {
  if (setNumber === 1) {
    // For the first set, get the first 10 questions from the database
    currentTest.questions = getFirstNQuestions(10);
    renderQuestions(currentTest.questions, 'firstSet');
  } else {
    // For subsequent sets, generate new questions based on wrong answers
    generateAdaptiveQuestions();
  }
}

// Get first N questions from the database
function getFirstNQuestions(n) {
  const questionsForLevel = questionDatabase[currentTest.language][currentTest.level];
  
  // Identify all available topics for this level
  const topics = [...new Set(questionsForLevel.map(q => q.topic))];
  
  // Create a balanced set of questions from multiple topics
  const selectedQuestions = [];
  const questionsPerTopic = Math.max(1, Math.floor(n / topics.length));
  
  // Get questions from each topic
  for (let topic of topics) {
    const topicQuestions = questionsForLevel.filter(q => q.topic === topic);
    const shuffledTopicQuestions = shuffleArray(topicQuestions);
    
    // Take up to questionsPerTopic questions from this topic
    const topicSelection = shuffledTopicQuestions.slice(0, questionsPerTopic);
    selectedQuestions.push(...topicSelection);
    
    // Stop if we have enough questions
    if (selectedQuestions.length >= n) {
      break;
    }
  }
  
  // If we still need more questions, add random ones
  if (selectedQuestions.length < n) {
    const remainingNeeded = n - selectedQuestions.length;
    const usedIds = selectedQuestions.map(q => q.id);
    const remainingQuestions = questionsForLevel.filter(q => !usedIds.includes(q.id));
    const additionalQuestions = shuffleArray(remainingQuestions).slice(0, remainingNeeded);
    
    selectedQuestions.push(...additionalQuestions);
  }
  
  // Trim if we have too many
  return shuffleArray(selectedQuestions).slice(0, n);
}

// Generate adaptive questions based on wrong answers
function generateAdaptiveQuestions() {
  const allQuestions = questionDatabase[currentTest.language][currentTest.level];
  const usedQuestionIds = currentTest.questions.map(q => q.id);
  
  // Show loader while "calculating" adaptive questions
  document.getElementById("loader").classList.remove("hidden");
  
  // Simulate delay for AI calculation
  setTimeout(() => {
    // Get wrong topics from previous set
    const wrongTopicsMap = {}; // Map to count occurrences of each wrong topic
    const previousSetQuestions = currentTest.questions;
    
    for (let i = 0; i < previousSetQuestions.length; i++) {
      const questionId = previousSetQuestions[i].id;
      const userAnswer = currentTest.answers[questionId];
      const correctAnswer = previousSetQuestions[i].correctAnswer;
      
      if (userAnswer !== correctAnswer) {
        const topic = previousSetQuestions[i].topic;
        
        // Count wrong topics frequency for this set
        if (!wrongTopicsMap[topic]) {
          wrongTopicsMap[topic] = 0;
        }
        wrongTopicsMap[topic]++;
        
        // Count wrong topics for final report
        if (!currentTest.wrongTopics[topic]) {
          currentTest.wrongTopics[topic] = 0;
        }
        currentTest.wrongTopics[topic]++;
      }
    }
    
    // Convert to array and sort by frequency (most wrong answers first)
    const wrongTopicsArray = Object.keys(wrongTopicsMap).map(topic => ({
      topic: topic,
      count: wrongTopicsMap[topic]
    })).sort((a, b) => b.count - a.count);
    
    console.log("Wrong topics with counts:", wrongTopicsArray);
    
    // Generate questions from wrong topics (prioritize topics with more wrong answers)
    const wrongTopicQuestions = [];
    let topicsUsed = [];
    
    // If there are wrong topics, get questions from those topics
    if (wrongTopicsArray.length > 0) {
      // Calculate how many questions to take from each wrong topic
      const totalWrongTopics = wrongTopicsArray.length;
      
      // Distribute 5 questions among wrong topics based on their frequency
      // Ensure at least 1 question per wrong topic if possible
      let questionsPerTopic = {};
      let remainingQuestions = 5;
      
      // First pass: assign at least 1 question to each topic
      for (let topicInfo of wrongTopicsArray) {
        if (remainingQuestions > 0) {
          questionsPerTopic[topicInfo.topic] = 1;
          remainingQuestions--;
        } else {
          break;
        }
      }
      
      // Second pass: distribute remaining questions proportionally to error frequency
      if (remainingQuestions > 0 && totalWrongTopics > 0) {
        const totalWrongCount = wrongTopicsArray.reduce((sum, t) => sum + t.count, 0);
        
        for (let i = 0; i < wrongTopicsArray.length && remainingQuestions > 0; i++) {
          const topicInfo = wrongTopicsArray[i];
          const extraQuestions = Math.min(
            Math.floor((topicInfo.count / totalWrongCount) * remainingQuestions) + 1,
            remainingQuestions
          );
          
          questionsPerTopic[topicInfo.topic] += extraQuestions;
          remainingQuestions -= extraQuestions;
          
          // If we've depleted the remaining questions, break
          if (remainingQuestions <= 0) break;
        }
        
        // Assign any leftover questions to the first topic
        if (remainingQuestions > 0 && wrongTopicsArray.length > 0) {
          questionsPerTopic[wrongTopicsArray[0].topic] += remainingQuestions;
        }
      }
      
      console.log("Questions per topic:", questionsPerTopic);
      
      // Now get the specific number of questions for each wrong topic
      for (let topicInfo of wrongTopicsArray) {
        const topic = topicInfo.topic;
        const questionsNeeded = questionsPerTopic[topic] || 0;
        
        if (questionsNeeded > 0) {
          // Get questions for this specific topic
          const topicQuestions = allQuestions.filter(q => 
            q.topic === topic && !usedQuestionIds.includes(q.id)
          );
          
          // Shuffle to get random questions from this topic
          const shuffledTopicQuestions = shuffleArray(topicQuestions);
          
          // Add questions for this topic
          let addedCount = 0;
          for (let q of shuffledTopicQuestions) {
            if (addedCount < questionsNeeded && !usedQuestionIds.includes(q.id)) {
              wrongTopicQuestions.push(q);
              usedQuestionIds.push(q.id);
              addedCount++;
            }
          }
          
          // Track which topics we used
          if (addedCount > 0) {
            topicsUsed.push(topic);
          }
        }
      }
    }
    
    console.log("Generated wrong topic questions:", wrongTopicQuestions.length);
    
    // If we don't have 5 questions from wrong topics, add random questions
    const remainingCount = 5 - wrongTopicQuestions.length;
    
    if (remainingCount > 0) {
      // Get random questions (excluding the topics we already used)
      const remainingQuestions = allQuestions.filter(q => 
        !usedQuestionIds.includes(q.id) && !topicsUsed.includes(q.topic)
      );
      
      const randomQuestions = shuffleArray(remainingQuestions).slice(0, remainingCount);
      
      wrongTopicQuestions.push(...randomQuestions);
      usedQuestionIds.push(...randomQuestions.map(q => q.id));
      
      // If we still don't have enough, just get any unused questions
      if (wrongTopicQuestions.length < 5) {
        const anyRemainingQuestions = allQuestions.filter(q => !usedQuestionIds.includes(q.id));
        const additionalQuestions = shuffleArray(anyRemainingQuestions).slice(0, 5 - wrongTopicQuestions.length);
        
        wrongTopicQuestions.push(...additionalQuestions);
        usedQuestionIds.push(...additionalQuestions.map(q => q.id));
      }
    }
    
    // Now get 5 random questions from new topics (not in wrong topics)
    const newTopicQuestions = [];
    
    // First try to find questions from completely new topics
    const newTopicCandidates = allQuestions.filter(q => 
      !usedQuestionIds.includes(q.id) && !topicsUsed.includes(q.topic)
    );
    
    if (newTopicCandidates.length > 0) {
      const randomNewTopicQuestions = shuffleArray(newTopicCandidates).slice(0, 5);
      newTopicQuestions.push(...randomNewTopicQuestions);
      usedQuestionIds.push(...randomNewTopicQuestions.map(q => q.id));
    }
    
    // If we still don't have 5 new topic questions, just get any unused questions
    if (newTopicQuestions.length < 5) {
      const anyRemainingQuestions = allQuestions.filter(q => !usedQuestionIds.includes(q.id));
      const additionalQuestions = shuffleArray(anyRemainingQuestions).slice(0, 5 - newTopicQuestions.length);
      
      newTopicQuestions.push(...additionalQuestions);
      usedQuestionIds.push(...additionalQuestions.map(q => q.id));
    }
    
    // Combine questions
    const newQuestions = [...wrongTopicQuestions, ...newTopicQuestions];
    
    // Add to current test questions
    currentTest.questions = newQuestions;
    
    // Render questions in the second set
    renderQuestions(currentTest.questions, 'secondSet');
    
    // Hide loader
    document.getElementById("loader").classList.add("hidden");
  }, 1500); // 1.5 seconds delay for "AI" calculation
}

// Render questions to the DOM
function renderQuestions(questions, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  
  questions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.className = "mb-6 p-4 bg-white border border-gray-200 rounded-md";
    
    // Create question header
    const questionHeader = document.createElement("h3");
    questionHeader.className = "text-lg font-semibold mb-2";
    questionHeader.textContent = `Question ${index + 1}: ${q.question}`;
    questionDiv.appendChild(questionHeader);
    
    // Create options
    q.options.forEach((option, optIndex) => {
      const optionDiv = document.createElement("div");
      optionDiv.className = "flex items-center mb-2";
      
      const radioInput = document.createElement("input");
      radioInput.type = "radio";
      radioInput.name = `question_${q.id}`;
      radioInput.id = `q${q.id}_option${optIndex}`;
      radioInput.value = option;
      radioInput.className = "mr-2";
      
      // Check if this option was previously selected
      if (currentTest.answers[q.id] === option) {
        radioInput.checked = true;
      }
      
      // Add event listener to save answer
      radioInput.addEventListener("change", () => {
        currentTest.answers[q.id] = option;
      });
      
      const label = document.createElement("label");
      label.htmlFor = `q${q.id}_option${optIndex}`;
      label.className = "text-gray-700";
      label.textContent = option;
      
      optionDiv.appendChild(radioInput);
      optionDiv.appendChild(label);
      questionDiv.appendChild(optionDiv);
    });
    
    // Add topic indicator (hidden in UI but used for debugging)
    const topicSpan = document.createElement("span");
    topicSpan.className = "text-xs text-gray-500 mt-2 block";
    topicSpan.textContent = `Topic: ${q.topic}`;
    questionDiv.appendChild(topicSpan);
    
    container.appendChild(questionDiv);
  });
}

// Show a specific question set
function showQuestionSet(setName) {
  // Hide all sets
  document.querySelectorAll('.question-set').forEach(set => {
    set.classList.remove('active');
  });
  
  // Show the requested set
  if (setName === 'first') {
    document.getElementById('firstSet').classList.add('active');
    document.getElementById('prevSet').style.display = 'none'; // Hide the Previous button completely
    document.getElementById('nextSet').disabled = false;
    document.getElementById('nextSet').textContent = "Next";
    document.getElementById('nextSet').onclick = function() { showQuestionSet('second'); };
    
    // Hide Submit button when showing first half of questions
    document.getElementById('submitBtn').style.display = 'none';
  } else if (setName === 'second') {
    // Check if we need to load questions for this set
    if (document.getElementById('secondSet').children.length === 0) {
      if (currentTest.currentSet === 1) {
        // Generate new questions based on performance in first set
        currentTest.currentSet++;
        loadQuestionsForSet(currentTest.currentSet);
      }
    }
    
    document.getElementById('secondSet').classList.add('active');
    
    // Always hide Previous button
    document.getElementById('prevSet').style.display = 'none';
    
    // If this is the last set of questions (set 5), change the Next button to Submit
    if (currentTest.currentSet >= currentTest.totalSets) {
      document.getElementById('nextSet').textContent = "Submit";
      document.getElementById('nextSet').onclick = function() { submitTest(); };
      
      // Only show Submit Test button on the last set (set 5)
      document.getElementById('submitBtn').style.display = 'block';
    } else {
      document.getElementById('nextSet').textContent = "Next Set";
      document.getElementById('nextSet').disabled = false;
      document.getElementById('nextSet').onclick = function() { moveToNextSet(); };
      
      // Hide Submit button for sets 1-4
      document.getElementById('submitBtn').style.display = 'none';
    }
  }
}


// Move to the next set of questions
function moveToNextSet() {
  // Increment set counter
  currentTest.currentSet++;
  
  // Check if we've reached the maximum number of sets
  if (currentTest.currentSet > currentTest.totalSets) {
    submitTest();
    return;
  }
  
  // Load new adaptive questions
  loadQuestionsForSet(currentTest.currentSet);
  
  // Reset question displays
  document.getElementById('firstSet').innerHTML = "";
  document.getElementById('firstSet').classList.add('active');
  document.getElementById('secondSet').innerHTML = "";
  document.getElementById('secondSet').classList.remove('active');
  
  // Swap content - move second set questions to first set
  const tempQuestions = [...currentTest.questions];
  renderQuestions(tempQuestions, 'firstSet');
  
  // Reset navigation
  document.getElementById('prevSet').style.display = 'none'; // Hide Previous button
  document.getElementById('nextSet').textContent = "Next";
  document.getElementById('nextSet').onclick = function() { showQuestionSet('second'); };
  
  // Only show Submit Test button on the last set (set 5)
  document.getElementById('submitBtn').style.display = 
    currentTest.currentSet === currentTest.totalSets ? 'block' : 'none';
}

// Start the timer
function startTimer(seconds) {
  currentTest.timeRemaining = seconds;
  
  // Clear any existing timer
  if (currentTest.timer) {
    clearInterval(currentTest.timer);
  }
  
  // Update timer display
  updateTimerDisplay();
  
  // Set interval to update timer every second
  currentTest.timer = setInterval(() => {
    currentTest.timeRemaining--;
    updateTimerDisplay();
    
    if (currentTest.timeRemaining <= 0) {
      clearInterval(currentTest.timer);
      submitTest();
    }
  }, 1000);
}

// Update timer display
function updateTimerDisplay() {
  const minutes = Math.floor(currentTest.timeRemaining / 60);
  const seconds = currentTest.timeRemaining % 60;
  
  document.getElementById("timer").textContent = 
    `Time Remaining: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  
  // Change color when time is running low
  if (currentTest.timeRemaining < 60) {
    document.getElementById("timer").classList.add("text-red-500");
  }
}

// Submit the test
function submitTest() {
  // Stop the timer
  clearInterval(currentTest.timer);
  
  // Hide test section and show score section
  document.getElementById("testSection").classList.add("hidden");
  document.getElementById("scoreSection").classList.remove("hidden");
  
  // Calculate score
  calculateAndDisplayScore();
}

// // Calculate and display score
// function calculateAndDisplayScore() {
//   // Get all answered questions from all sets
//   const allAnsweredQuestions = [];
  
//   // Get all the questions the user has seen and answered
//   for (let questionId in currentTest.answers) {
//     // Find the question object
//     const question = findQuestionById(parseInt(questionId));
//     if (question) {
//       allAnsweredQuestions.push(question);
//     }
//   }
  
//   // Calculate correct answers
//   let correctCount = 0;
  
//   for (let question of allAnsweredQuestions) {
//     const userAnswer = currentTest.answers[question.id];
//     if (userAnswer === question.correctAnswer) {
//       correctCount++;
//     }
//   }
  
//   // Calculate percentage
//   const totalAnswered = allAnsweredQuestions.length;
//   const percentage = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;
  
//   console.log("Creating charts for", correctCount, "correct out of", totalAnswered, "answered");
  
//   // Create charts
//   createScoreChart(correctCount, totalAnswered);
//   createTopicChart();
  
//   // Display comprehensive results
//   displayResults(correctCount, totalAnswered, percentage);
  
//   // Show/hide next level button
//   if (percentage >= 70) { // 70% is passing
//     document.getElementById("nextLevelBtn").classList.remove("hidden");
//   } else {
//     document.getElementById("nextLevelBtn").classList.add("hidden");
//   }

//   console.log("All answered");
  
//   console.log(allAnsweredQuestions);
  
// }

function findQuestionById(id) {
  const allQuestions = questionDatabase[currentTest.language][currentTest.level];
  return allQuestions.find(q => q.id === id);
}

// // Create score chart
// function createScoreChart(correct, total) {
//   const ctx = document.getElementById('scoreChart').getContext('2d');
  
//   // Destroy existing chart if it exists
//   if (window.scoreChart && typeof window.scoreChart.destroy === 'function') {
//     window.scoreChart.destroy();
//   }
  
//   window.scoreChart = new Chart(ctx, {
//     type: 'doughnut',
//     data: {
//       labels: ['Correct', 'Incorrect'],
//       datasets: [{
//         data: [correct, total - correct],
//         backgroundColor: ['#4CAF50', '#F44336'],
//         borderWidth: 0
//       }]
//     },
//     options: {
//       responsive: true,
//       maintainAspectRatio: false,
//       title: {
//         display: true,
//         text: 'Your Score',
//         fontSize: 18
//       },
//       legend: {
//         position: 'bottom'
//       }
//     }
//   });
// }

// // Create topic chart
// function createTopicChart() {
//   const ctx = document.getElementById('topicChart').getContext('2d');
  
//   // Get topics data
//   const topics = Object.keys(currentTest.wrongTopics);
//   const wrongCounts = Object.values(currentTest.wrongTopics);
  
//   // If no wrong answers, show a message
//   if (topics.length === 0) {
//     // Destroy existing chart if it exists
//     if (window.topicChart && typeof window.topicChart.destroy === 'function') {
//       window.topicChart.destroy();
//     }
    
//     // Just show a message in the chart area
//     ctx.font = '20px Arial';
//     ctx.fillStyle = '#4CAF50';
//     ctx.textAlign = 'center';
//     ctx.fillText('Great job! No weak topics detected.', ctx.canvas.width / 2, ctx.canvas.height / 2);
//     return;
//   }
  
//   // Destroy existing chart if it exists
//   if (window.topicChart && typeof window.topicChart.destroy === 'function') {
//     window.topicChart.destroy();
//   }
  
//   window.topicChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//       labels: topics,
//       datasets: [{
//         label: 'Questions Missed',
//         data: wrongCounts,
//         backgroundColor: '#FF9800',
//         borderWidth: 0
//       }]
//     },
//     options: {
//       responsive: true,
//       maintainAspectRatio: false,
//       title: {
//         display: true,
//         text: 'Topics to Improve',
//         fontSize: 18
//       },
//       scales: {
//         yAxes: [{
//           ticks: {
//             beginAtZero: true,
//             stepSize: 1
//           }
//         }]
//       },
//       legend: {
//         display: false
//       }
//     }
//   });
// }

// Add this at the top of your script.js file with your other state variables
let userProgress = {
  basic: { completed: false, score: 0, totalQuestions: 0 },
  intermediate: { completed: false, score: 0, totalQuestions: 0 },
  advanced: { completed: false, score: 0, totalQuestions: 0 }
};

// Try to load any existing progress from localStorage when the page loads
function loadUserProgress() {
  const savedProgress = localStorage.getItem('codeQuestJavaProgress');
  if (savedProgress) {
    try {
      userProgress = JSON.parse(savedProgress);
      updateLevelButtons();
    } catch (e) {
      console.error("Error loading user progress:", e);
    }
  } else {
    // No saved progress, initialize with only basic level unlocked
    userProgress = {
      basic: { completed: false, score: 0, totalQuestions: 0 },
      intermediate: { completed: false, score: 0, totalQuestions: 0 },
      advanced: { completed: false, score: 0, totalQuestions: 0 }
    };
    updateLevelButtons();
  }
}

// Save progress to localStorage
function saveUserProgress() {
  localStorage.setItem('codeQuestJavaProgress', JSON.stringify(userProgress));
}

// Update the level buttons based on user progress
function updateLevelButtons() {
  // Basic level is always enabled
  document.getElementById('basicBtn').disabled = false;
  
  // Intermediate level is enabled only if basic is completed
  const intermediateBtn = document.getElementById('intermediateBtn');
  if (userProgress.basic.completed) {
    intermediateBtn.disabled = false;
    intermediateBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    // Remove any lock icon if you have one
  } else {
    intermediateBtn.disabled = true;
    intermediateBtn.classList.add('opacity-50', 'cursor-not-allowed');
    // Optionally add a lock icon
  }
  
  // Advanced level is enabled only if intermediate is completed
  const advancedBtn = document.getElementById('advancedBtn');
  if (userProgress.intermediate.completed) {
    advancedBtn.disabled = false;
    advancedBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    // Remove any lock icon if you have one
  } else {
    advancedBtn.disabled = true;
    advancedBtn.classList.add('opacity-50', 'cursor-not-allowed');
    // Optionally add a lock icon
  }
}
// Calculate and display score
function calculateAndDisplayScore() {
  // Constants for level completion requirements
  const totalQuestionsInLevel = 50; // Total questions in each level
  const requiredCorrectAnswers = 35; // Need 70% correct (35 out of 50)
  
  // Get all questions for this level from the database
  const allLevelQuestions = questionDatabase[currentTest.language][currentTest.level];
  
  // Calculate correct answers from what the user has answered
  let correctCount = 0;
  let answeredCount = 0;
  
  // Create arrays to track questions by topic for the chart
  const topicStats = {};
  
  // Process all questions in the level
  for (let question of allLevelQuestions) {
    const userAnswer = currentTest.answers[question.id];
    
    // Track topic statistics
    if (!topicStats[question.topic]) {
      topicStats[question.topic] = { total: 0, correct: 0, incorrect: 0, unanswered: 0 };
    }
    
    topicStats[question.topic].total++;
    
    // Check if the question was answered
    if (userAnswer) {
      answeredCount++;
      
      // Check if answered correctly
      if (userAnswer === question.correctAnswer) {
        correctCount++;
        topicStats[question.topic].correct++;
      } else {
        // Record for wrong topics chart
        if (!currentTest.wrongTopics[question.topic]) {
          currentTest.wrongTopics[question.topic] = 0;
        }
        currentTest.wrongTopics[question.topic]++;
        
        topicStats[question.topic].incorrect++;
      }
    } else {
      // Question wasn't answered - count as incorrect for level progression
      topicStats[question.topic].unanswered++;
    }
  }
  
  // Store the results from this test attempt
  userProgress[currentTest.level].score = correctCount;
  userProgress[currentTest.level].totalQuestions = totalQuestionsInLevel;
  
  // Mark level as completed if they got enough correct answers
  if (correctCount >= requiredCorrectAnswers) {
    userProgress[currentTest.level].completed = true;
    saveUserProgress();
  }
  
  // Calculate percentage based on all 50 questions
  const percentage = Math.round((correctCount / totalQuestionsInLevel) * 100);
  
  console.log(`User answered ${answeredCount} out of 50 total questions`);
  console.log(`Correct answers: ${correctCount} (${percentage}%)`);
  console.log(`Required to pass: ${requiredCorrectAnswers} (70%)`);
  
  // Create charts
  createScoreChart(correctCount, totalQuestionsInLevel - correctCount);
  createTopicChart();
  
  // Display comprehensive results
  displayResults(correctCount, answeredCount, totalQuestionsInLevel, percentage, requiredCorrectAnswers, topicStats);
  
  // Show/hide next level button
  const nextLevelBtn = document.getElementById("nextLevelBtn");
  if (correctCount >= requiredCorrectAnswers) {
    nextLevelBtn.classList.remove("hidden");
  } else {
    nextLevelBtn.classList.add("hidden");
  }
}

// Create score chart
function createScoreChart(correct, incorrect) {
  const ctx = document.getElementById('scoreChart').getContext('2d');
  
  // Destroy existing chart if it exists
  if (window.scoreChart && typeof window.scoreChart.destroy === 'function') {
    window.scoreChart.destroy();
  }
  
  window.scoreChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Correct', 'Incorrect/Unanswered'],
      datasets: [{
        data: [correct, incorrect],
        backgroundColor: ['#4CAF50', '#F44336'],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: 'Your Score',
        fontSize: 18
      },
      legend: {
        position: 'bottom'
      }
    }
  });
}

// Create topic chart
function createTopicChart() {
  const ctx = document.getElementById('topicChart').getContext('2d');
  
  // Get topics data
  const topics = Object.keys(currentTest.wrongTopics);
  const wrongCounts = Object.values(currentTest.wrongTopics);
  
  // If no wrong answers, show a message
  if (topics.length === 0) {
    // Destroy existing chart if it exists
    if (window.topicChart && typeof window.topicChart.destroy === 'function') {
      window.topicChart.destroy();
    }
    
    // Just show a message in the chart area
    ctx.font = '20px Arial';
    ctx.fillStyle = '#4CAF50';
    ctx.textAlign = 'center';
    ctx.fillText('Great job! No weak topics detected.', ctx.canvas.width / 2, ctx.canvas.height / 2);
    return;
  }
  
  // Destroy existing chart if it exists
  if (window.topicChart && typeof window.topicChart.destroy === 'function') {
    window.topicChart.destroy();
  }
  
  window.topicChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: topics,
      datasets: [{
        label: 'Questions Missed',
        data: wrongCounts,
        backgroundColor: '#FF9800',
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: 'Topics to Improve',
        fontSize: 18
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            stepSize: 1
          }
        }]
      },
      legend: {
        display: false
      }
    }
  });
}

// Display comprehensive results
function displayResults(correct, answered, total, percentage, requiredCorrect, topicStats) {
  const resultsContainer = document.getElementById('comprehensiveResults');
  resultsContainer.innerHTML = "";
  
  // Create results summary
  const summaryDiv = document.createElement('div');
  summaryDiv.className = 'bg-gray-100 p-4 rounded-lg mb-4';
  
  // Calculate test duration
  const endTime = new Date();
  const duration = Math.floor((endTime - currentTest.testStartTime) / 1000); // in seconds
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  
  const isPassed = correct >= requiredCorrect;
  const nextLevel = getNextLevel(currentTest.level);
  
  summaryDiv.innerHTML = `
    <h3 class="text-xl font-bold mb-2">Test Summary</h3>
    <p class="mb-1"><span class="font-semibold">Score:</span> ${correct} correct out of 50 total questions (${percentage}%)</p>
    <p class="mb-1"><span class="font-semibold">Questions Attempted:</span> ${answered} out of ${total}</p>
    <p class="mb-1"><span class="font-semibold">Required to Pass:</span> ${requiredCorrect} correct answers (70%)</p>
    <p class="mb-1"><span class="font-semibold">Level:</span> ${capitalizeFirstLetter(currentTest.level)}</p>
    <p class="mb-1"><span class="font-semibold">Time taken:</span> ${minutes}m ${seconds}s</p>
    <p class="mb-1"><span class="font-semibold">Status:</span> 
      <span class="${isPassed ? 'text-green-500' : 'text-red-500'} font-bold">
        ${isPassed ? 'PASSED' : 'FAILED'}
      </span>
    </p>
    ${isPassed && nextLevel ? 
      `<p class="text-green-500 font-bold mt-2">Congratulations! You've unlocked the ${capitalizeFirstLetter(nextLevel)} level.</p>` : 
      !isPassed ? 
      `<p class="text-red-500 mt-2">You need at least ${requiredCorrect} correct answers to unlock the next level.</p>` : 
      ''}
  `;
  
  resultsContainer.appendChild(summaryDiv);
  
  // Add topic breakdown
  const topicBreakdownDiv = document.createElement('div');
  topicBreakdownDiv.className = 'bg-blue-50 p-4 rounded-lg mb-4';
  
  let topicHTML = `
    <h3 class="text-xl font-bold mb-2">Topic Performance</h3>
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase">Topic</th>
            <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase">Correct</th>
            <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase">Incorrect</th>
            <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase">Unanswered</th>
            <th class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase">Total</th>
          </tr>
        </thead>
        <tbody>
  `;
  
  // Add rows for each topic
  for (const topic in topicStats) {
    const stats = topicStats[topic];
    // Calculate completion percentage
    const topicPercentage = Math.round((stats.correct / stats.total) * 100);
    let rowColorClass = "";
    
    // Color code based on performance
    if (topicPercentage >= 80) rowColorClass = "bg-green-50";
    else if (topicPercentage >= 60) rowColorClass = "bg-yellow-50";
    else rowColorClass = "bg-red-50";
    
    topicHTML += `
      <tr class="${rowColorClass}">
        <td class="py-2 px-4 border-b border-gray-200 text-sm">${topic}</td>
        <td class="py-2 px-4 border-b border-gray-200 text-center text-sm text-green-600">${stats.correct}</td>
        <td class="py-2 px-4 border-b border-gray-200 text-center text-sm text-red-600">${stats.incorrect}</td>
        <td class="py-2 px-4 border-b border-gray-200 text-center text-sm text-gray-500">${stats.unanswered}</td>
        <td class="py-2 px-4 border-b border-gray-200 text-center text-sm">${stats.total}</td>
      </tr>
    `;
  }
  
  topicHTML += `
        </tbody>
      </table>
    </div>
  `;
  
  topicBreakdownDiv.innerHTML = topicHTML;
  resultsContainer.appendChild(topicBreakdownDiv);
  
  // Add recommendations based on wrong topics
  /* if (Object.keys(currentTest.wrongTopics).length > 0) {
    const recommendationsDiv = document.createElement('div');
    recommendationsDiv.className = 'bg-indigo-50 p-4 rounded-lg';
    
    let recommendationsHTML = `
      <h3 class="text-xl font-bold mb-2">Recommendations</h3>
      <p class="mb-2">Based on your performance, we recommend focusing on the following topics:</p>
      <ul class="list-disc pl-5">
    `;
    
    // Sort topics by number of wrong answers (most wrong first)
    const sortedTopics = Object.entries(currentTest.wrongTopics)
      .sort((a, b) => b[1] - a[1])
      .map(entry => entry[0]);
    
    for (let topic of sortedTopics) {
      recommendationsHTML += `<li class="mb-1">${topic}</li>`;
    }
    
    recommendationsHTML += `
      </ul>
      <p class="mt-3">Review these topics and try the test again to improve your score!</p>
    `;
    
    recommendationsDiv.innerHTML = recommendationsHTML;
    resultsContainer.appendChild(recommendationsDiv);
  }*/
 // Add recommendations based on wrong topics
if (Object.keys(currentTest.wrongTopics).length > 0) {
  const recommendationsDiv = document.createElement('div');
  recommendationsDiv.className = 'bg-indigo-50 p-4 rounded-lg';

  let recommendationsHTML = `
    <h3 class="text-xl font-bold mb-2">Recommendations</h3>
    <p class="mb-2">Based on your performance, we recommend focusing on the following topics:</p>
    <ul class="list-disc pl-5">
  `;

  // Define individual links for each topic
  const topicLinks = {
    "Variables": "https://www.geeksforgeeks.org/variables-in-java/",
    "Data Types": "https://www.geeksforgeeks.org/data-types-in-java/",
    "Control Flow": "https://www.geeksforgeeks.org/control-flow-in-java/",
    "Methods": "https://www.tutorialspoint.com/java/java_methods.htm",
    "Arrays": "https://www.javatpoint.com/arrays-in-java",
    "Strings": "https://www.javatpoint.com/String-in-java",
    "Operators": "https://www.geeksforgeeks.org/operators-in-java/"
  };

  // Sort topics by number of wrong answers (most wrong first)
  const sortedTopics = Object.entries(currentTest.wrongTopics)
    .sort((a, b) => b[1] - a[1])
    .map(entry => entry[0]);

  for (let topic of sortedTopics) {
    const link = topicLinks[topic] || `https://www.google.com/search?q=${encodeURIComponent(topic + " in Java")}`;
    recommendationsHTML += `<li class="mb-1"><a href="${link}" target="_blank" class="text-blue-600 underline hover:text-blue-800">${topic}</a></li>`;
  }

  recommendationsHTML += `
    </ul>
    <p class="mt-3">Review these topics and try the test again to improve your score!</p>
  `;

  recommendationsDiv.innerHTML = recommendationsHTML;
  resultsContainer.appendChild(recommendationsDiv);
}

}

// Modify your calculateAndDisplayScore function
// function calculateAndDisplayScore() {
//   // Get all answered questions from all sets
//   const allAnsweredQuestions = [];
  
//   // Get all the questions the user has seen and answered
//   for (let questionId in currentTest.answers) {
//     // Find the question object
//     const question = findQuestionById(parseInt(questionId));
//     if (question) {
//       allAnsweredQuestions.push(question);
//     }
//   }
  
//   // Calculate correct answers
//   let correctCount = 0;
  
//   for (let question of allAnsweredQuestions) {
//     const userAnswer = currentTest.answers[question.id];
//     if (userAnswer === question.correctAnswer) {
//       correctCount++;
//     }
//   }
  
//   // Store the results from this test attempt
//   userProgress[currentTest.level].score = correctCount;
//   userProgress[currentTest.level].totalQuestions = allAnsweredQuestions.length;
  
//   // Check if user passed (70% or more correct)
//   const totalAnswered = allAnsweredQuestions.length;
//   const percentage = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;
  
//   // 70% of 50 questions = 35 questions
//   const requiredCorrectAnswers = 35;
  
//   // Mark level as completed if they got enough correct answers
//   if (correctCount >= requiredCorrectAnswers) {
//     userProgress[currentTest.level].completed = true;
//     saveUserProgress();
//   }
  
//   console.log("Creating charts for", correctCount, "correct out of", totalAnswered, "answered");
  
//   // Create charts
//   createScoreChart(correctCount, totalAnswered);
//   createTopicChart();
  
//   // Display comprehensive results
//   displayResults(correctCount, totalAnswered, percentage, requiredCorrectAnswers);
  
//   // Show/hide next level button
//   const nextLevelBtn = document.getElementById("nextLevelBtn");
//   if (correctCount >= requiredCorrectAnswers) {
//     nextLevelBtn.classList.remove("hidden");
//   } else {
//     nextLevelBtn.classList.add("hidden");
//   }
// }

// // Update your displayResults function to include the required correct answers
// function displayResults(correct, total, percentage, requiredCorrectAnswers) {
//   const resultsContainer = document.getElementById('comprehensiveResults');
//   resultsContainer.innerHTML = "";
  
//   // Create results summary
//   const summaryDiv = document.createElement('div');
//   summaryDiv.className = 'bg-gray-100 p-4 rounded-lg mb-4';
  
//   // Calculate test duration
//   const endTime = new Date();
//   const duration = Math.floor((endTime - currentTest.testStartTime) / 1000); // in seconds
//   const minutes = Math.floor(duration / 60);
//   const seconds = duration % 60;
  
//   const isPassed = correct >= requiredCorrectAnswers;
//   const nextLevel = getNextLevel(currentTest.level);
  
//   summaryDiv.innerHTML = `
//     <h3 class="text-xl font-bold mb-2">Test Summary</h3>
//     <p class="mb-1"><span class="font-semibold">Score:</span> ${correct} out of ${total} (${percentage}%)</p>
//     <p class="mb-1"><span class="font-semibold">Required to Pass:</span> ${requiredCorrectAnswers} correct answers</p>
//     <p class="mb-1"><span class="font-semibold">Level:</span> ${capitalizeFirstLetter(currentTest.level)}</p>
//     <p class="mb-1"><span class="font-semibold">Time taken:</span> ${minutes}m ${seconds}s</p>
//     <p class="mb-1"><span class="font-semibold">Status:</span> 
//       <span class="${isPassed ? 'text-green-500' : 'text-red-500'} font-bold">
//         ${isPassed ? 'PASSED' : 'FAILED'}
//       </span>
//     </p>
//     ${isPassed && nextLevel ? 
//       `<p class="text-green-500 font-bold mt-2">Congratulations! You've unlocked the ${capitalizeFirstLetter(nextLevel)} level.</p>` : 
//       !isPassed ? 
//       `<p class="text-red-500 mt-2">You need at least ${requiredCorrectAnswers} correct answers to unlock the next level.</p>` : 
//       ''}
//   `;
  
//   resultsContainer.appendChild(summaryDiv);
  
//   // Add recommendations based on wrong topics
//   if (Object.keys(currentTest.wrongTopics).length > 0) {
//     const recommendationsDiv = document.createElement('div');
//     recommendationsDiv.className = 'bg-blue-50 p-4 rounded-lg';
    
//     let recommendationsHTML = `
//       <h3 class="text-xl font-bold mb-2">Recommendations</h3>
//       <p class="mb-2">Based on your performance, we recommend focusing on the following topics:</p>
//       <ul class="list-disc pl-5">
//     `;
    
//     for (let topic in currentTest.wrongTopics) {
//       recommendationsHTML += `<li class="mb-1">${topic}</li>`;
//     }
    
//     recommendationsHTML += `
//       </ul>
//       <p class="mt-3">Review these topics and try the test again to improve your score!</p>
//     `;
    
//     recommendationsDiv.innerHTML = recommendationsHTML;
//     resultsContainer.appendChild(recommendationsDiv);
//   }
// }

// Enhanced version of updateLevelButtons() function to handle the lock icons and messages
function updateLevelButtons() {
  // Basic level is always enabled
  document.getElementById('basicBtn').disabled = false;
  
  // Handle Intermediate level
  const intermediateBtn = document.getElementById('intermediateBtn');
  const intermediateLock = document.getElementById('intermediateLock');
  const intermediateMsg = document.getElementById('intermediateMsg');
  
  if (userProgress.basic.completed) {
    // Unlock intermediate level
    intermediateBtn.disabled = false;
    intermediateBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    
    // Hide lock icon and message
    if (intermediateLock) intermediateLock.style.display = 'none';
    if (intermediateMsg) intermediateMsg.style.display = 'none';
  } else {
    // Keep intermediate level locked
    intermediateBtn.disabled = true;
    intermediateBtn.classList.add('opacity-50', 'cursor-not-allowed');
    
    // Show lock icon and message
    if (intermediateLock) intermediateLock.style.display = 'inline';
    if (intermediateMsg) intermediateMsg.style.display = 'block';
  }
  
  // Handle Advanced level
  const advancedBtn = document.getElementById('advancedBtn');
  const advancedLock = document.getElementById('advancedLock');
  const advancedMsg = document.getElementById('advancedMsg');
  
  if (userProgress.intermediate.completed) {
    // Unlock advanced level
    advancedBtn.disabled = false;
    advancedBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    
    // Hide lock icon and message
    if (advancedLock) advancedLock.style.display = 'none';
    if (advancedMsg) advancedMsg.style.display = 'none';
  } else {
    // Keep advanced level locked
    advancedBtn.disabled = true;
    advancedBtn.classList.add('opacity-50', 'cursor-not-allowed');
    
    // Show lock icon and message
    if (advancedLock) advancedLock.style.display = 'inline';
    if (advancedMsg) advancedMsg.style.display = 'block';
  }
}

// Modify your retryTest function to reset the current level's progress
function retryTest() {
  // Reset progress for this level
  userProgress[currentTest.level] = { completed: false, score: 0, totalQuestions: 0 };
  saveUserProgress();
  startTest(currentTest.level);
}

// Add this to the bottom of your script.js file
// Call this when the page loads
document.addEventListener('DOMContentLoaded', function() {
  loadUserProgress();
});

// Display comprehensive results
// function displayResults(correct, total, percentage) {
//   const resultsContainer = document.getElementById('comprehensiveResults');
//   resultsContainer.innerHTML = "";
  
//   // Create results summary
//   const summaryDiv = document.createElement('div');
//   summaryDiv.className = 'bg-gray-100 p-4 rounded-lg mb-4';
  
//   // Calculate test duration
//   const endTime = new Date();
//   const duration = Math.floor((endTime - currentTest.testStartTime) / 1000); // in seconds
//   const minutes = Math.floor(duration / 60);
//   const seconds = duration % 60;
  
//   summaryDiv.innerHTML = `
//     <h3 class="text-xl font-bold mb-2">Test Summary</h3>
//     <p class="mb-1"><span class="font-semibold">Score:</span> ${correct} out of ${total} (${percentage}%)</p>
//     <p class="mb-1"><span class="font-semibold">Level:</span> ${capitalizeFirstLetter(currentTest.level)}</p>
//     <p class="mb-1"><span class="font-semibold">Time taken:</span> ${minutes}m ${seconds}s</p>
//     <p class="mb-1"><span class="font-semibold">Status:</span> 
//       <span class="${percentage >= 70 ? 'text-green-500' : 'text-red-500'} font-bold">
//         ${percentage >= 70 ? 'PASSED' : 'FAILED'}
//       </span>
//     </p>
//     ${percentage >= 70 ? `<p class="text-green-500 font-bold mt-2">Congratulations! You've unlocked the ${getNextLevel(currentTest.level)} level.</p>` : ''}
//   `;
  
//   resultsContainer.appendChild(summaryDiv);
  
//   // Add recommendations based on wrong topics
//   if (Object.keys(currentTest.wrongTopics).length > 0) {
//     const recommendationsDiv = document.createElement('div');
//     recommendationsDiv.className = 'bg-blue-50 p-4 rounded-lg';
    
//     let recommendationsHTML = `
//       <h3 class="text-xl font-bold mb-2">Recommendations</h3>
//       <p class="mb-2">Based on your performance, we recommend focusing on the following topics:</p>
//       <ul class="list-disc pl-5">
//     `;
    
//     for (let topic in currentTest.wrongTopics) {
//       recommendationsHTML += `<li class="mb-1">${topic}</li>`;
//     }
    
//     recommendationsHTML += `
//       </ul>
//       <p class="mt-3">Review these topics and try the test again to improve your score!</p>
//     `;
    
//     recommendationsDiv.innerHTML = recommendationsHTML;
//     resultsContainer.appendChild(recommendationsDiv);
//   }
// }

// Retry the test
function retryTest() {
  startTest(currentTest.level);
}

// Enhanced version of updateLevelButtons() function to handle the lock icons and messages
function updateLevelButtons() {
  // Basic level is always enabled
  document.getElementById('basicBtn').disabled = false;
  
  // Handle Intermediate level
  const intermediateBtn = document.getElementById('intermediateBtn');
  const intermediateLock = document.getElementById('intermediateLock');
  const intermediateMsg = document.getElementById('intermediateMsg');
  
  if (userProgress.basic.completed) {
    // Unlock intermediate level
    intermediateBtn.disabled = false;
    intermediateBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    
    // Hide lock icon and message
    if (intermediateLock) intermediateLock.style.display = 'none';
    if (intermediateMsg) intermediateMsg.style.display = 'none';
  } else {
    // Keep intermediate level locked
    intermediateBtn.disabled = true;
    intermediateBtn.classList.add('opacity-50', 'cursor-not-allowed');
    
    // Show lock icon and message
    if (intermediateLock) intermediateLock.style.display = 'inline';
    if (intermediateMsg) intermediateMsg.style.display = 'block';
  }
  
  // Handle Advanced level
  const advancedBtn = document.getElementById('advancedBtn');
  const advancedLock = document.getElementById('advancedLock');
  const advancedMsg = document.getElementById('advancedMsg');
  
  if (userProgress.intermediate.completed) {
    // Unlock advanced level
    advancedBtn.disabled = false;
    advancedBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    
    // Hide lock icon and message
    if (advancedLock) advancedLock.style.display = 'none';
    if (advancedMsg) advancedMsg.style.display = 'none';
  } else {
    // Keep advanced level locked
    advancedBtn.disabled = true;
    advancedBtn.classList.add('opacity-50', 'cursor-not-allowed');
    
    // Show lock icon and message
    if (advancedLock) advancedLock.style.display = 'inline';
    if (advancedMsg) advancedMsg.style.display = 'block';
  }
}

// Go to next level
// function goToNextLevel() {
//   const nextLevel = getNextLevel(currentTest.level);
//   if (nextLevel) {
//     startTest(nextLevel);
//   }
// }
function goToNextLevel() {
  const nextLevel = getNextLevel(currentTest.level);
  if (nextLevel) {
    // Before going to next level, ensure it's unlocked in user progress
    if (currentTest.level === 'basic') {
      userProgress.intermediate.completed = false; // Reset completion of next level
      userProgress.intermediate.score = 0;
      userProgress.intermediate.totalQuestions = 0;
    } else if (currentTest.level === 'intermediate') {
      userProgress.advanced.completed = false; // Reset completion of next level
      userProgress.advanced.score = 0;
      userProgress.advanced.totalQuestions = 0;
    }
    
    // Save the updated progress
    saveUserProgress();
    
    // Start the next level test
    startTest(nextLevel);
  }
}

// Get next level based on current level
function getNextLevel(level) {
  if (level === 'basic') return 'intermediate';
  if (level === 'intermediate') return 'advanced';
  return null;
}

// Utility function to capitalize first letter
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Utility function to shuffle array
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}