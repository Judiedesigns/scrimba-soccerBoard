
let score = 0
let scoreTwo = 0

let displayScore = document.getElementById('textDisplay');
displayScore.innerText = 0

let displayScoreTwo = document.getElementById('textDisplayTwo')
displayScoreTwo.innerText = 0

// Add window. before each function to make them global
window.addOne = function(){
    score = score + 1
    displayScore.innerText = score;
    console.log('clicked add-one')
}

window.addTwo = function() {
    score += 2
    displayScore.innerText = score;
    console.log('please')
}

window.addThree = function() {
    score += 3
    displayScore.innerText = score;
}

window.reset = function() {
    score = 0
    displayScore.innerText = score
}

window.one = function() {
    scoreTwo += 1
    displayScoreTwo.innerText = scoreTwo
    console.log('see')
}

window.two = function() {
    scoreTwo += 2
    displayScoreTwo.textContent = scoreTwo
}

window.three = function() {
    scoreTwo += 3
    displayScoreTwo.textContent = scoreTwo
}

window.reset2 = function() {
    scoreTwo = 0
    displayScoreTwo.innerText = scoreTwo
}