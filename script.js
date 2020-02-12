var gameBox = document.querySelector('#gameBox')
var textbox = document.querySelector('#textbox')
var submitBtn = document.querySelector('#submit')

var firstClick = true;
var count = 0;
var guess;

var answer = parseInt(Math.random()*100);

submitBtn.addEventListener('click', function () {
    var prevGuess = document.createElement('p')
    if (firstClick) {
        prevGuess.textContent = 'Previous Guesses: '
        firstClick = false
    }
    
    guess = textbox.value;
    gameBox.appendChild(prevGuess);
    count++;

    if(count === 10){
        submitBtn.disabled = true;
        textbox.disabled = true;
    }
});

function compareAnswer(){
    
}
