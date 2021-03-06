/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = '';
const startButton = document.getElementById('btn__reset');

//***Start button Event Listener ***
startButton.addEventListener('click', (e) => {
    game = new Game;
    game.startGame();
});

//******* Button event listener *******
const qwerty = document.getElementById('qwerty');
qwerty.addEventListener('click', (e) => {
    if(e.target.className == 'key'){
    const pressedKey = e.target;
    game.handleInteraction(pressedKey);
    game.activePhrase.checkLetter(pressedKey);
    };
});

//******* Keyboard Event Listener**********

document.addEventListener('keypress', (e) => {
    const typedKey = e.key;
    const buttons = document.getElementsByClassName('key');
    let button = null;
    
    const buttonsArray = Array.from(buttons);
    console.log(buttonsArray);
    for(let i=0; i<buttonsArray.length; i+=1){
        if (buttonsArray[i].innerHTML == typedKey){
            button = buttonsArray[i];
            game.handleInteraction(button);
            game.activePhrase.checkLetter(button);
        }
    }

    //console.log(`Typed Key: ${typedKey} Button: ${button}`);
    //console.log(typeof button);
});
