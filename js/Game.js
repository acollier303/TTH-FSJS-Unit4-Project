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
            {phrase:'Teamwork makes the team work'},
            {phrase:'Never give up'},
            {phrase: 'I paid the cost to be the boss'}
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
        startScreen.style.display ='none'; //Hide Start Screen

        const rndPhrase = this.getRandomPhrase();
        const phrase = new Phrase(rndPhrase.phrase);
        phrase.addPhraseToDisplay();
        
        
        this.activePhrase = phrase;
        //console.log(`Active Phrase: ${this.activePhrase.phrase} Random Phrase: ${phrase.phrase}`);
    };

    /**
     * Hadles interaction from user
     */
    handleInteraction(){
        //const key = document.getElementsByClassName('.key');

        //pressed key event listener
            document.querySelectorAll('.key').forEach(key => {
                key.addEventListener('click', (e) => {
                const pressedKey = e.target.textContent;
                game.activePhrase.checkLetter(pressedKey);
                game.checkForWin();
                //console.log(pressedKey);
            })
            
        });
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
        for(let i =0; i<liFiltered.length; i+=1){
            if (liFiltered[i].className == 'show'){
                num+=1;
            }
            console.log(liFiltered.length, num);

            //If all letters shown return 'true'
            if (num === liFiltered.length){
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
        const lives = document.getElementsByClassName('tries');
        const livesArray = Array.from(lives);
        


        console.log(`lives left: ${lives.length}`);
        
    };

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {};

 }