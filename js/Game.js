/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = 'null'; 
    }

    /**
     * Creates phrases for use in game
    * @return (array) An array of phrases that could be used in the game
    */
    createPhrases(){
        const phrases = [
            {phrase: 'Life is like a box of chocolates'},
            {phrase: 'Get in where you fit in'},
            {phrase:'Teamwork makes the dream work'},
            {phrase:'Never give up'},
            {phrase: 'I paid the cost to be the boss'},
            {phrase: 'Create with purpose'}
        ];
        return phrases; 
     }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */

    getRandomPhrase() {
        const random = Math.floor(Math.random()*this.phrases.length);
        return this.phrases[random];
    };
    
    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        const startScreen = document.getElementById('overlay');
        const rndPhrase = this.getRandomPhrase();
        const phrase = new Phrase(rndPhrase.phrase);
        startScreen.style.display ='none'; //Hide Start Screen

        phrase.addPhraseToDisplay();
        this.activePhrase = phrase;
    };

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        const phraseDiv = document.getElementById('phrase');
        const ul = phraseDiv.firstElementChild;
        const li = ul.children;
        const liArray = Array.from(li);
        let liFiltered = liArray.filter(char => char.className != 'hide space');
        let num = 0; //counter for shown letters

        // Iterate thru liFiltered to check for shown letters.
        for(let i=0; i<liFiltered.length; i+=1){
            if (liFiltered[i].className == 'show'){
                num = document.getElementsByClassName('show').length;
            }
            //console.log(liFiltered.length, num);

            //If all letters shown return 'true'
            if (num == liFiltered.length){
                game.gameOver(true);
                return true;
            }else{
                return false;
            }
        }
    };

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        const lives = document.getElementsByTagName('img');
        this.missed += 1;

        if(this.missed == 1){
            lives[0].src = `images/lostHeart.png`;
        }

        if(this.missed == 2){
            lives[1].src = `images/lostHeart.png`;        }

        if(this.missed == 3){
            lives[2].src = `images/lostHeart.png`;        }

        if(this.missed == 4){
            lives[3].src = `images/lostHeart.png`;        }

        if(this.missed == 5){
            lives[4].src = `images/lostHeart.png`; 
            game.gameOver(false);
        }
    };

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        const startScreen = document.getElementById('overlay');
        const gameOverMessage = document.getElementById("game-over-message");
        
        startScreen.style.display =''; //Show Start Screen

        if(gameWon){
           gameOverMessage.textContent = 'Congratulations! You won!'
           startScreen.className = 'win'; 
           this.resetGame();
        }else{
            gameOverMessage.textContent = 'You Lose. Better Luck Next Time!'
            startScreen.className = 'lose'; 
            this.resetGame();
        }
    };

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button){
        button.disabled = true;
        this.activePhrase.checkLetter(button.textContent);

        // 'if statement' for checkLetter() 'true' or 'false'
        if (this.activePhrase.checkLetter(button.textContent) == false){
            button.className = 'wrong';
             this.removeLife();
        }else{
            button.className = 'chosen';
            const gamePhrase = game.activePhrase.phrase.toString().split('');

            //If there is a match run showMatchedLetter()
            gamePhrase.forEach(char => {
                if (button.textContent == char){
                    this.activePhrase.showMatchedLetter(char);
                }
            })
        }
        game.checkForWin(); 
    };

    /**
     * Resets game elements
     */
    resetGame(){
        //---Reset Lives---
        const lives = document.getElementsByTagName('img');
        for(let i=0; i<lives.length; i+=1){
            lives[i].src = 'images/liveHeart.png';
        }

        //--- Remove Li elements from Phrase Ul
        const phraseDiv = document.getElementById('phrase');
        const ul = phraseDiv.firstElementChild;
        ul.querySelectorAll('*').forEach(n => n.remove());

        //---Change ClassName of onscreen keyboard buttons
        const buttons = document.getElementsByTagName('button');
        const buttonArray = Array.from(buttons);

        for(let j=0; j<buttonArray.length; j+=1){
            if(buttonArray[j].id != 'btn_reset'){
                buttonArray[j].className = 'key';
                buttonArray[j].disabled = false;
            }
        }
    }    
};
