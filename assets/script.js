//Assign the different html elements to variables
var questionDiv = document.getElementById("question");
var guessesDiv = document.getElementById("guesses");
var answer1Div = document.getElementById("answer1");
var answer2Div = document.getElementById("answer2");
var answer3Div = document.getElementById("answer3");
var answer4Div = document.getElementById("answer4");
var startButtom = document.getElementById("startGame");
var highScoreDiv = document.getElementById("highScore");
var timerDiv = document.getElementById("timer");
var timeLeftSpan = document.getElementById("timeLeft");

// Create question objects
var question1 = {
    question: "Which of these is not a type of HTML tag?",
    answer: "<object></object>",
    wrong1: "<div></div>",
    wrong2: "<img />",
    wrong3: "<span></span>"
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

function startGame(){

    guessesDiv.style.display = "flex";
    questionDiv.style.display = "flex";
    timerDiv.style.display = "inline";
    botSpan.style.justifyContent = "space-between";
    highScoreDiv.style.margin = "0% 0 2% 5%";

    var questions = [question1,question2,question3,question4,question5];
    var selectQuestion = Math.floor(Math.random() * questions.length);
    var activeQuestion = questions[selectQuestion];
    questions.splice(selectQuestion,1);

    var guessArr = [activeQuestion.answer, activeQuestion.wrong1, activeQuestion.wrong2, activeQuestion.wrong3];
    fisherShuffle(guessArr);

    questionDiv.textContent = activeQuestion.question;
    answer1Div.textContent = guessArr[0];
    answer2Div.textContent = guessArr[1];
    answer3Div.textContent = guessArr[2];
    answer4Div.textContent = guessArr[3];

    

}

startButtom.addEventListener("click",startGame);


