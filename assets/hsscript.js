var storedScores = JSON.parse(localStorage.getItem("scores"));
var scoreList = document.getElementById("scoreList");

storedScores = storedScores.sort(({score:a}, {score:b}) => b-a);

for (var i = 0; i < storedScores.length; i++){
    var li = document.createElement("li");
    li.textContent = storedScores[i].id + ": " + storedScores[i].score;
    scoreList.appendChild(li);
}