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


 }