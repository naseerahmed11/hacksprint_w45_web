const questions = [
    {
      question: "What is the time complexity of bubble sort?",
      options: ["O(n)", "O(n^2)", "O(log n)", "O(1)"],
      correctAnswer: "O(n^2)"
    },
    {
      question: "Which data structure uses LIFO order?",
      options: ["Queue", "Stack", "Array", "Linked List"],
      correctAnswer: "Stack"
    },
    {
      question: "What is the purpose of hashing in data structures?",
      options: ["Searching", "Sorting", "Insertion", "Deletion"],
      correctAnswer: "Searching"
    },
    {
      question: "Which algorithm is used for sorting in-place?",
      options: ["Merge Sort", "Quick Sort", "Heap Sort", "Bubble Sort"],
      correctAnswer: "Quick Sort"
    },
    {
      question: "What is the worst-case time complexity of linear search?",
      options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
      correctAnswer: "O(n)"
    },
  ];
  
  let currentQuestionIndex = 0;
  let totalPoints = 0;
  
  const questionElement = document.getElementById("question");
  const optionsContainer = document.getElementById("options-container");
  const resultContainer = document.getElementById("result-container");
  const resultElement = document.getElementById("result");
  
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
  
    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
      const radioContainer = document.createElement("div");
      radioContainer.classList.add("radio-container");
  
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "option";
      radio.value = option;
      radio.id = `option${index}`;
  
      const label = document.createElement("label");
      label.textContent = option;
      label.setAttribute("for", `option${index}`);
  
      radioContainer.appendChild(radio);
      radioContainer.appendChild(label);
      optionsContainer.appendChild(radioContainer);
    });
  }
  
  function checkAnswer() {
    const currentQuestion = questions[currentQuestionIndex];
    const selectedOption = document.querySelector('input[name="option"]:checked');
  
    if (selectedOption && selectedOption.value === currentQuestion.correctAnswer) {
      totalPoints++;
      resultElement.textContent = "Correct!";
    } else {
      resultElement.textContent = "Incorrect!";
    }
  
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
      resultContainer.style.display = "none";
    } else {
      endQuiz();
    }
  }
  
  function endQuiz() {
    resultElement.textContent = `Quiz completed! Total Points: ${totalPoints}`;
    resultContainer.style.display = "block";
    document.getElementById("card").style.display = "none";
  }
  
  function nextQuestion() {
    if (currentQuestionIndex < questions.length) {
      checkAnswer();
    }
  }
  
  // Initial load
  loadQuestion();
  