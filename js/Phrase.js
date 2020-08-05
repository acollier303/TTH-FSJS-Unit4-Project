/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase{
     constructor(phrase){
         this.phrase = phrase.toLowerCase();
     }

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
       
        //DOM elements for Phrase section
        const phraseDiv = document.getElementById('phrase');
        const ul = phraseDiv.firstElementChild;

        //Creates random phrase object and converts object to an array of letters.
        const letters = this.phrase.toString().split('');

        letters.forEach(letter => {
           let li = document.createElement('li');
           li.textContent = letter;
           
           // filters letters and spaces & assigns correct class
           if (letter == false) {
            li.setAttribute('class', 'hide space');
            ul.appendChild(li); 
           }else{
           li.setAttribute('class', `hide letter ${letter}`);
           ul.appendChild(li);
           };
        });
    };

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        const gamePhrase = game.activePhrase.phrase.toString().split('');
        const li = document.getElementsByTagName('li');

        gamePhrase.forEach(char => {
            if (letter == char){
                console.log('match');
                this.showMatchedLetter(letter);
            } 
        });
    };

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        const li = document.getElementsByTagName('li');

        for(let i = 0; i< li.length; i+=1){
            if(li[i].textContent == letter){
                li[i].setAttribute('class', 'show');
            }
        }


    };

 }