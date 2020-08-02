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
        const newPhrase = game.getRandomPhrase();
        const letters = newPhrase.phrase.toString().split('');

        console.log(newPhrase, letters);

        

    };
 }