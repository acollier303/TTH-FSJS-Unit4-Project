/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = '';
const startButton = document.getElementById('btn__reset');
console.log();

//***Start button Event Listner ***
startButton.addEventListener('click', (e) => {
    game = new Game;
    game.startGame();
    //game.handleInteraction();
});

//******* Button event listner *******
document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', (e) => {
        const pressedKey = e.target;
        game.handleInteraction(pressedKey);
        game.activePhrase.checkLetter(pressedKey);
    })
});
