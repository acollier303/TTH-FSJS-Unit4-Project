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

           if (letter == false) {
            li.setAttribute('class', 'hide space');
            ul.appendChild(li); 
           }else{
           li.setAttribute('class', `hide letter ${letter}`);
           ul.appendChild(li);
           };
           // console.log(phraseDiv);
        });
        console.log(letters);

        

    };
 }