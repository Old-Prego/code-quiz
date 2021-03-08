//Assign the different html elements to variables
var questionDiv = document.getElementById("question");
var guessesDiv = document.getElementById("guesses");
var answer1Div = document.getElementById("answer1");
var answer2Div = document.getElementById("answer2");
var answer3Div = document.getElementById("answer3");
var answer4Div = document.getElementById("answer4");
var startButton = document.getElementById("startGame");
var highScoreBut = document.getElementById("highScore");
var timerDiv = document.getElementById("timer");
var timeLeftSpan = document.getElementById("timeLeft");
var scoreValue = document.getElementById("scoreValue");
var scoreDiv = document.getElementById("score");
var initialsInput = document.getElementById("initials");
var submitBut = document.getElementById("scoreSubmit");

// These are global variables used in multiple functions
var questions;
var activeQuestion;
var selectQuestion;
var time;
var myTimer;
var highScores = [];

// Create question objects
var question1 = {
    question: "What is the correct syntax for referring to external JavaScript?",
    answer: "<script src='xxx.js'>",
    wrong1: "<script href='xxx.js'>",
    wrong2: "<script name='xxx.js'>",
    wrong3: "<script link='xxx.js'>"
}

var question2 = {
    question: "How do you write an IF statement in JavaScript?",
    answer: "if (i == 5)",
    wrong1: "if i == 5 then",
    wrong2: "if i = 5 then",
    wrong3: "if i = 5"
}

var question3 = {
    question: "How can you add a comment in Javascript?",
    answer: "//This is a comment",
    wrong1: "'This is a comment",
    wrong2: "<!--This is a comment-->",
    wrong3: "*This is a comment*"
}

var question4 = {
    question: "How do you declare a Javascript variable?",
    answer: "var petName",
    wrong1: "bool petName",
    wrong2: "var.declare petName",
    wrong3: "string.declare petName"
}

var question5 = {
    question: "How do you write 'Hello World' in an alert box?",
    answer: "alert('Hello World');",
    wrong1: "alertBox('Hello World');",
    wrong2: "msgBox('Hello World');",
    wrong3: "msg('Hello World');"
}

// Based on Fisher-Yates Shuffle.
function fisherShuffle(array){
    var m = array.length;
    var t;
    var i;
  
    // While there are still values in the original array
    while (m) {
  
      // Select an array value
      i = Math.floor(Math.random() * m--);
  
      // Swap it with the currently selected element;
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
}

// Is used to stop the game and display the game ending screen, along with setting the score based on the time
function gameOver(){
    guessesDiv.style.display = "none";
    questionDiv.style.display = "none";
    timerDiv.style.display = "none";
    startButton.style.display = "inline";
    botSpan.style.justifyContent = "center";
    highScoreBut.style.margin = "0% 0 0% 0%";
    scoreDiv.style.display = "inline";

    scoreValue.textContent = time;
}

// Chooses a new question from the array, populates it and the related answers on the screen, and then removes that question from the array so it doesn't come up again
function newQuestion(){
    if (questions.length < 1){
        clearInterval(myTimer);
        gameOver();
    } else {
        selectQuestion = Math.floor(Math.random() * questions.length);
        activeQuestion = questions[selectQuestion];
        questions.splice(selectQuestion,1);

        var guessArr = [activeQuestion.answer, activeQuestion.wrong1, activeQuestion.wrong2, activeQuestion.wrong3];
        fisherShuffle(guessArr);

        questionDiv.textContent = activeQuestion.question;
        answer1Div.textContent = guessArr[0];
        answer2Div.textContent = guessArr[1];
        answer3Div.textContent = guessArr[2];
        answer4Div.textContent = guessArr[3];
    }
}

// Is triggered by clicking the start quiz button. It makes the necessary parts of the screen visible, calls the new question function, and sets the timer for the quiz
function startGame(){

    guessesDiv.style.display = "flex";
    questionDiv.style.display = "flex";
    timerDiv.style.display = "inline";
    scoreDiv.style.display = "none";
    startButton.style.display = "none";
    botSpan.style.justifyContent = "space-between";
    highScoreBut.style.margin = "0% 0 2% 5%";
    
    //Creates or re-creates the array of questions for a fresh start
    questions = [question1,question2,question3,question4,question5];

    newQuestion();

    time = 90;

    myTimer = setInterval(function(){

        time--;

        timeLeftSpan.textContent = time;

        if (time<1) {
            clearInterval(myTimer);
            gameOver();
        }
    },1000);

}

// Is used to show the quiz-taker if they got the question right or not. This flashes the timer green or red depending on if it was correct. 
// I wanted to have this applied to the answers instead, but for some reason I couldn't get the hover/active effects to re-apply to the buttons after this was triggered.
function blink(correct) {
    if (correct){
        timerDiv.style.backgroundColor = "#49BEB7";
        timerDiv.style.boxShadow = "4px 4px 0px 0px #FACF5A";
        setTimeout(function(){
            timerDiv.style.backgroundColor = "#7F7EFF";
            timerDiv.style.boxShadow = "4px 4px 0px 0px #49BEB7";
        },375)
    } else {
        timerDiv.style.backgroundColor = "#FF5959";
        timerDiv.style.boxShadow = "4px 4px 0px 0px #FACF5A";
        setTimeout(function(){
            timerDiv.style.backgroundColor = "#7F7EFF";
            timerDiv.style.boxShadow = "4px 4px 0px 0px #49BEB7";
        },375)
    }
    
}

// Triggered when an answer is clicked, this checks if it matches the active question's dedicated answer
// If correct, it triggers the blink function and generates a new question
// If incorrect, it checks if there are at least 5 seconds left on the timer, and either subtracts from the timer or ends the quiz
function checkAnswer(guess){

    if (guess == activeQuestion.answer){
        newQuestion();
        blink(true);
    } else {
        console.log("incorrect");
        if (time < 5){
            time = 0;
            clearInterval(myTimer);
            gameOver();
        }else{
            time = time - 5;
        }
        timeLeftSpan.textContent = time;
        blink(false);
    }
}

// Saves the initials of the user and their score into an object and appends it to the array in local storage
function saveHS() {
    var storedScores = JSON.parse(localStorage.getItem("scores"));
    if (storedScores !== null){
        highScores = storedScores;
    }
    highScores.push({id: initialsInput.value, score: time});
    localStorage.setItem("scores",JSON.stringify(highScores));
    initialsInput.value = "Saved!";
}

// These are all the on click event listeners for the various buttons on the main screen
startButton.addEventListener("click",startGame);
answer1Div.addEventListener("click",function(){checkAnswer(this.textContent)});
answer2Div.addEventListener("click",function(){checkAnswer(this.textContent)});
answer3Div.addEventListener("click",function(){checkAnswer(this.textContent)});
answer4Div.addEventListener("click",function(){checkAnswer(this.textContent)});
submitBut.addEventListener("click",saveHS);
