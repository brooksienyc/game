// sweetAlerts class for OK button: swal2-confirm swal2-styled


// Variable Declarations and Expressive Functions
const playButton = document.getElementById("play-btn");
const gameCategories = document.getElementById("game-categories");
const gameContent = document.getElementById("game-content");
const catButtons = document.querySelectorAll(".catButtons");

let pointsBucket = 0;
let submittedAnswers = [];
let questionNum = 0;
let currentCategoryId = "";
let currentQuestionIndex = null;



// For Monty Python category
const montyPython = [
  {
    question: "Who gives the 'What is your name, What is your quest...' riddle to Sir Lancelot?",
    answer: ["Sir Gallahad", "A Bridgekeeper", "Maid Marion", "Knights who say Ni"],
    correctAnswer: "A Bridgekeeper"
  },
  {
    question: "What happens to the Black Knight to make him say 'Come back I'll bite your legs off' ",
    answer: ["He is reduced to a torso", "He misspeaks", "He thinks he is an animal", "He is making a joke"],
    correctAnswer: "He is reduced to a torso."
  },
  {
    question: "Question 3",
    answer: ["Question 3-0", "Question 3-1", "Question 3-2", "Question 3-3"],
    correctAnswer: "Question 3-2"
  },
  {
    question: "Question 4",
    answer: ["Question 4-0", "Question 4-1", "Question 4-2", "Question 4-3"],
    correctAnswer: "Question 4-2"
  },
  {
    question: "Question 5",
    answer: ["Question 5-0", "Question 5-1", "Question 5-2", "Question 5-3"],
    correctAnswer: "Question 5-2"
  }
]




// Functions
// Category Choices
function playClick() {
  gameCategories.innerHTML =
    "<h2 id='gc-h2' class='font-bold text-4xl text-yellow-400 sm-hidden pb-4'>Go Ahead and Pick A Topic!</h2><h2 id='gc-h2' class='font-bold text-4xl text-yellow-400 lg:hidden md:hidden mx-auto'>Pick A Topic!</h2><div class='w-full border-t-2 border-solid border-black mx-8 py-4'><button onclick=`${categoryClick('gc-1')}` id='gc-1' class='catButtons lg:w-1/4 md:w-1/4 w-full lg:py-0 md:py-0 py-2 text-3xl leading-tight text-white'>Monty <br>Python</button><button onclick=`${categoryClick('gc-2')}` id='gc-2' class='catButtons lg:w-1/4 md:w-1/4 w-full lg:py-0 md:py-0 py-2 text-3xl leading-tight text-white'><br>80s</button><button onclick=`${categoryClick('gc-3')}` id='gc-3' class='catButtons lg:w-1/4 md:w-1/4 w-full lg:py-0 md:py-0 py-2 text-3xl leading-tight text-white'>Cult <br>Classics</button><button onclick=`${categoryClick('gc-4')}` id='gc-4' class='catButtons lg:w-1/4 md:w-1/4 w-full lg:py-0 md:py-0 py-2 text-3xl leading-tight text-white'>Mixed <br>Bag</button></div>";

  playButton.style.display = "none";

};



function categoryClick(id) {
  currentCategoryId = id;
  // if Monty Python
  if (id === "gc-1") {
    console.log("I clicked Monty Python");
    currentQuestionIndex = 0;
    questionNum = 1;
    montyPythonGame(currentQuestionIndex);
  }
};

function montyPythonGame() {
  gameCategories.style.display = "none";
  gameContent.style.display = "flex";
  gameContent.innerHTML =
    // Question 2 - 5
    `<div id='mp-q1' class='py-10 mx-8 text-2xl leading-tight text-2xl text-left leading-tight'>
        <span class='font-bold'>Question ${questionNum}: </span><br>${montyPython[currentQuestionIndex].question}
      </div>
      <div class='w-full border-t-2 border-solid border-black mx-8 py-4'>
        <br>
        <h2 id='gc-h2' class='font-bold text-4xl text-yellow-400 sm-hidden'>Choose an Answer!</h2>
        <h2 id='gc-h2' class='font-bold text-4xl text-yellow-400 lg:hidden md:hidden mx-auto'>Choose One!</h2>
        <div id='mp-a1' class='lg:w-2/3 md:w-2/3 w-full lg:px-0 md:px-0 px-2 py-4 text-2xl leading-tight'>
          <span class='font-bold'>Answers: </span>
        </div>
        <ol class='list-decimal list-inside'>
          <li onclick="checkAnswer('${montyPython[currentQuestionIndex].answer[0]}', ${currentQuestionIndex})" class='lg:w-1/2 md:w-1/2 w-full text-2xl leading-tight cursor-pointer'>${montyPython[currentQuestionIndex].answer[0]}</li>
          <li onclick="checkAnswer('${montyPython[currentQuestionIndex].answer[1]}', ${currentQuestionIndex})" class='lg:w-1/2 md:w-1/2 w-full text-2xl leading-tight cursor-pointer'>${montyPython[currentQuestionIndex].answer[1]}</li>
          <li onclick="checkAnswer('${montyPython[currentQuestionIndex].answer[2]}', ${currentQuestionIndex})" class='lg:w-1/2 md:w-1/2 w-full text-2xl leading-tight cursor-pointer'>${montyPython[currentQuestionIndex].answer[2]}</li>
          <li onclick="checkAnswer('${montyPython[currentQuestionIndex].answer[3]}', ${currentQuestionIndex})" class='lg:w-1/2 md:w-1/2 w-full text-2xl leading-tight cursor-pointer'>${montyPython[currentQuestionIndex].answer[3]}</li>
        </ol>
      </div>
      `
}



function checkAnswer(answer, i) {
  const answerIndex = montyPython[i].answer.indexOf(answer);

  if (currentCategoryId === "gc-1" && montyPython[i].correctAnswer.includes(answer) && questionNum < montyPython.length) {
    // alert(`Yeah! ${answer} is it!`);
    Swal.fire({
      icon: 'success',
      // Applies the answer's number and the answer in the modal statment
      title: `Yeah! <i style="color:rgb(165,220,134)">${answerIndex + 1}. ${answer}</i> is it!`,
      text: 'Keep Going...Next Question!'
    })
    pointsBucket += 20;
    console.log(`I have: ${pointsBucket} points!`);
    currentQuestionIndex++;
    console.log(currentQuestionIndex);
    questionNum++
    console.log(questionNum);
    montyPythonGame(currentQuestionIndex);
  } else if (currentCategoryId === "gc-1" && !montyPython[i].correctAnswer.includes(answer) && questionNum < montyPython.length) {
    // alert(`Uh Oh! ${answer} is the wrong answer!`);
    Swal.fire({
      icon: 'error',
      title: `Uh oh! <i style="color:#f27474">${answerIndex + 1}. ${answer}</i> is the wrong answer!`,
      text: 'Keep Going...Next Question!'
    })
    currentQuestionIndex++
    console.log(currentQuestionIndex);
    questionNum++
    console.log(questionNum);
    montyPythonGame(currentQuestionIndex);
  } else if (questionNum === montyPython.length && pointsBucket >= 80) {
    // alert(`Game Over! Your total score is ${pointsBucket}. Try Again `);
    Swal.fire({
      icon: 'success',
      title: `Game Over! Your total score is <em>${pointsBucket}%</em>!`,
      footer: '<button onclick=`${playAgain()}` class="cursor-pointer rounded-full py-2 px-4 bg-black border-black text-center text-white hover:bg-white hover:text-black">Double Your Luck?</button>',
      confirmButtonText: '<button onclick=`${playAgain()}`>Ok</button>'
    })
  } else {
    // alert(`Game Over! Your total score is ${pointsBucket}. Try Again `);
    Swal.fire({
      icon: 'error',
      title: `Game Over! Your total score is ${pointsBucket}%! Sorry, you lost.`,
      footer: '<button onclick=`${playAgain()}` class="cursor-pointer rounded-full py-2 px-4 bg-black border-black text-center text-white hover:bg-white hover:text-black">Maybe Ya Wanna Play Again?</button>',
      confirmButtonText: '<button onclick=`${playAgain()}`>Ok</button>'
    })
  }
}


function playAgain() {
  pointsBucket = 0;
  questionNum = 0;
  currentCategoryId = "";
  currentQuestionIndex = null;
  gameContent.style.display = "none";
  location.reload();
}

playButton.addEventListener("click", playClick);



