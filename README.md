# Coding Quiz Project


To Do:

HTML:
    Question span
    Four answer buttons for options
    Timer
    view high scores
    Coding Quiz header and explanation, followed by a button that says "Start Game"
    High score screen that allows you to enter your initials with your score before starting over again

CSS:
    Look at my previous math game project and use lots of that CSS, it looked great and felt modern.

JS:

    Setup timer function that is called when 'start game' is pressed
        Timer stops if it runs out of time
        Timer stops if all the questions are answered correctly
        Answering a question wrong subtracts from the timer

    Create question objects
        var question1 = {
            question: "Which of these is not a type of HTML tag?"
            answer: "<object></object>",
            wrong1: "<div></div>",
            wrong2: "<img />",
            wrong3: "<span></span>"
        } 
        var questions = [question1,question2,question3,question4,question5];
    
    Select question and populate
        Math.floor(Math.random() * questions.length);
        


