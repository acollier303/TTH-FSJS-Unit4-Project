/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = '';
const startButton = document.getElementById('btn__reset');

//***Start button Event Listener ***
startButton.addEventListener('click', (e) => {
    game = new Game;
    game.startGame();
    //game.handleInteraction();
});

//******* Button event listener *******
document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', (e) => {
        const pressedKey = e.target;
        game.handleInteraction(pressedKey);
        game.activePhrase.checkLetter(pressedKey);
    })
});

//******* Keyboard Event Listener**********
// const qwerty = document.getElementById('qwerty');
// qwerty.addEventListener('keyup', (e) => {
//         console.log(e.target);
//     });
