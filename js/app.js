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
    const button = document.getElementsByClassName('.key');
    console.log(`Typed Key: ${typedKey} Button: ${button}`);
    console.log(typeof button);
    game.handleInteraction(button);
    game.activePhrase.checkLetter(button);
})
