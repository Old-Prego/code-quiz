// Loads the array of scores out of local storage
var storedScores = JSON.parse(localStorage.getItem("scores"));
var scoreList = document.getElementById("scoreList");

// Sorts the scores from highest to lowest
storedScores = storedScores.sort(({score:a}, {score:b}) => b-a);

// For each score in the list, add a new list item that shows the initials and the score
for (var i = 0; i < storedScores.length; i++){
    var li = document.createElement("li");
    li.textContent = storedScores[i].id + ": " + storedScores[i].score;
    scoreList.appendChild(li);
}