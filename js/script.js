
// Variable Declarations and Expressive Functions
const playButton = document.getElementById("play-btn");
const gameCategories = document.getElementById("game-categories");
const gameContent = document.getElementById("game-content");
const catButtons = document.querySelectorAll(".catButtons");

// Monty Python Category Questions
const montyQuestions = ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5", "Question 6", "Question 7", "Question 8", "Question 9", "Question 10"];

// Monty Python Answers - for User to Choose
const montyAnswers = [
    ["Answer 1", "Answer 2", "Answer 3", "Answer 4"], ["Answer 1", "Answer 2", "Answer 3", "Answer 4"], ["Answer 1", "Answer 2", "Answer 3", "Answer 4"], ["Answer 1", "Answer 2", "Answer 3", "Answer 4"], ["Answer 1", "Answer 2", "Answer 3", "Answer 4"], ["Answer 1", "Answer 2", "Answer 3", "Answer 4"], ["Answer 1", "Answer 2", "Answer 3", "Answer 4"], ["Answer 1", "Answer 2", "Answer 3", "Answer 4"], ["Answer 1", "Answer 2", "Answer 3", "Answer 4"], ["Answer 1", "Answer 2", "Answer 3", "Answer 4"]
];

// Monty Python Correct Answer - Unknown to User
const correctMontyAnswer = ["Answer 1", "Answer 2", "Answer 3", "Answer 4", "Answer 5", "Answer 6", "Answer 8", "Answer 9", "Answer 10"];


let montyPython = [
    {
    question: "What color is the sky",
    answer: ["red", "yellow", "orange", "green"],
    correctAnswwer: "blue"
},
// Repeat each of these to fulfill all 10 questions for each category - use this instead of array of arrays
]




// Functions
function playClick() {
    gameCategories.innerHTML =
        "<h2 id='gc-h2' class='font-bold text-4xl text-yellow-400 sm-hidden'>Go Ahead and Pick A Topic!</h2><h2 id='gc-h2' class='font-bold text-4xl text-yellow-400 lg:hidden md:hidden mx-auto'>Pick A Topic!</h2><div class='w-full border-t-2 border-solid border-black mx-8 py-4'><button onclick=`${categoryClick('gc-1')}` id='gc-1' class='catButtons lg:w-1/4 md:w-1/4 w-full lg:py-0 md:py-0 py-2 text-3xl leading-tight text-white'>Monty <br>Python</button><button onclick=`${categoryClick('gc-2')}` id='gc-2' class='catButtons lg:w-1/4 md:w-1/4 w-full lg:py-0 md:py-0 py-2 text-3xl leading-tight text-white'><br>80s</button><button onclick='${categoryClick('gc-3')}` id='gc-3' class='catButtons lg:w-1/4 md:w-1/4 w-full lg:py-0 md:py-0 py-2 text-3xl leading-tight text-white'>Cult <br>Classics</button><button onclick=`${categoryClick('gc-4')}` id='gc-4' class='catButtons lg:w-1/4 md:w-1/4 w-full lg:py-0 md:py-0 py-2 text-3xl leading-tight text-white'>Mixed <br>Bag</button></div>";

    playButton.style.display = "none";

};



function categoryClick(id) {

    // if Monty Python
    if (id === "gc-1") {
        console.log("I clicked Monty Python");
        gameCategories.style.display = "none";
        gameContent.style.display = "flex";
        gameContent.innerHTML = `<h2 id='gc-h2' class='font-bold text-4xl text-yellow-400 sm-hidden'>Choose an Answer!</h2><h2 id='gc-h2' class='font-bold text-4xl text-yellow-400 lg:hidden md:hidden mx-auto'>Choose One!</h2><div class='w-full border-t-2 border-solid border-black mx-8 py-4'><div id='mp-q1' class='lg:w-2/3 md:w-2/3 w-full lg:px-0 md:px-0 px-2 text-2xl leading-tight'><span class='font-bold'>Question 1: </span>${montyQuestions[0]}</div><br><div id='mp-a1' class='g:w-2/3 md:w-2/3 w-full lg:px-0 md:px-0 px-2 py-4 text-2xl leading-tight'><span class='font-bold'>Answers: </span></div><div class='lg:w-1/2 md:w-1/2 w-full text-2xl leading-tight'>1. ${montyAnswers[0][0]}</div><div class='lg:w-1/2 md:w-1/2 w-full text-2xl leading-tight'>2. ${montyAnswers[0][1]}</div><div class='lg:w-1/2 md:w-1/2 w-full text-2xl leading-tight'>3. ${montyAnswers[0][2]}</div><div class='lg:w-1/2 md:w-1/2 w-full text-2xl leading-tight'>4. ${montyAnswers[0][3]}</div></div>`
    }

};

playButton.addEventListener("click", playClick);
// catButton.addEventListener("click", categoryClick);




