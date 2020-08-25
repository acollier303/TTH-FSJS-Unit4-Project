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

/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
handleInteraction(button){
    console.log(button);
    };
    
