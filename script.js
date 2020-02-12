var gameBox = document.querySelector('#gameBox')
var textbox = document.querySelector('#textbox')
var submitBtn = document.querySelector('#submit')
var prevGuess = document.createElement('p')
var endResult = document.createElement('p');
var hint = Object.assign(document.createElement('p'), {id:"hint"});

var firstClick = true;
var count = 0;
var guess;

var answer = Math.floor(Math.random()*100) + 1; //random number between 1-100

submitBtn.addEventListener('click', function () {
    if (firstClick) {
        prevGuess.textContent = 'Previous Guesses: '
        gameBox.append(prevGuess);
        firstClick = false
    }
    guess = textbox.value;
    prevGuess.textContent = prevGuess.textContent + ' ' + guess
    gameBox.append(prevGuess);
    count++;

    textbox.value = ''; //empties the textbox

    compareAnswer();

    if(count === 10){
        submitBtn.disabled = true;
        textbox.disabled = true;
    }
});

function compareAnswer(){
    setStylesOnElement(endResult, {
        backgroundColor: "green",
        color: "white",
        padding: "5px"
    });
    
    if(count===10){
        endResult.textContent = '!!!!GAME OVER!!!!'
        hint.textContent = ''
    }else{
        if(guess < answer){
            endResult.textContent = 'Wrong!'
            hint.textContent = 'Last guess was too low'
        }else if(guess > answer){
            endResult.textContent = 'Wrong!'
            hint.textContent = 'Last guess was too high'
        }else if(guess == answer){
            endResult.textContent = 'Congratulations! You got it right!'
            setStylesOnElement(endResult, {
                backgroundColor: "green",
                color: "white",
                padding: "5px"
            });
            hint.textContent = ''
        }else{
            endResult.textContent = 'Wrong!'
            hint.textContent = 'Error: please enter a number'
        }
    }

    gameBox.append(endResult);
    gameBox.append(hint);
}

const setStylesOnElement = (element, styles) => {
    Object.assign(element.style, styles)
}
