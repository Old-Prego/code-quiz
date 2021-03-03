
// Create question objects
var question1 = {
    question: "Which of these is not a type of HTML tag?",
    answer: "<object></object>",
    wrong1: "<div></div>",
    wrong2: "<img />",
    wrong3: "<span></span>"
}

var question2 = {
    question: "",
    answer: "",
    wrong1: "",
    wrong2: "",
    wrong3: "",
}

var question3 = {
    question: "",
    answer: "",
    wrong1: "",
    wrong2: "",
    wrong3: "",
}

var question4 = {
    question: "",
    answer: "",
    wrong1: "",
    wrong2: "",
    wrong3: "",
}

var question5 = {
    question: "",
    answer: "",
    wrong1: "",
    wrong2: "",
    wrong3: "",
}

var questions = [question1,question2,question3,question4,question5];
    
// Select question and populate
var selectQuestion = Math.floor(Math.random() * questions.length);

var activeQuestion = questions[selectQuestion];

