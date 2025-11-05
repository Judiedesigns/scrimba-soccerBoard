let score = 0
let scoreTwo = 0

let displayScore = document.getElementById('textDisplay');
    displayScore.innerText = 0

let displayScoreTwo = document.getElementById('textDisplayTwo')
displayScore.innerText = 0

function addOne(){
    score = score + 1
    displayScore.innerText = score;
    console.log('clicked add-one')
}

function addTwo() {
    score += 2
    displayScore.innerText = score;
    console.log('please')
}

function addThree() {
    score += 3
    displayScore.innerText =score;

}

function reset() {
score = 0
displayScore.innerText = score
}


function one() {
scoreTwo += 1
displayScoreTwo.innerText= scoreTwo
    console.log('see')

}

function two() {
    scoreTwo +=2
    displayScoreTwo.textContent=scoreTwo
}

function three() {
    scoreTwo += 3
    displayScoreTwo.textContent = scoreTwo
}

function reset2() {
    scoreTwo = 0
    displayScoreTwo.innerText =scoreTwo
}