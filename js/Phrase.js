/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//Created Constructor
class Phrase {
  constructor(phrase) {
    this.phrase = phrase = phrase.toLowerCase();
  }

  //split up the phrase into an array, each character will be it's own string inside of it 
  addPhraseToDisplay() {
    let phraseList = document.querySelector("#phrase ul");
    let phraseLetters = this.phrase.split("");

      for (let i = 0; i < phraseLetters.length; i++) {
          let letters = phraseLetters[i];
          let li = document.createElement("li");
          if (letters === ' ') {
              li.classList.add('space');
          }
          else {
              li.classList.add('hide');
              li.classList.add('letter');
              li.textContent = phraseLetters[i];
            }
            phraseList.appendChild(li);

        }
      
    }

//check if a letter is in a phrase 
checkLetter(letter) {
    return this.phrase.includes(letter);
}

//showMatchedLetter loops over the this.phrase property and if the textContent of the li equals the letter parameter passed to the method then you can change the className hide to show
showMatchedLetter(letter) {
    const letterCheck = document.querySelectorAll('.letter');
    for (let i = 0; i < letterCheck.length; i++) {
        let li = letterCheck[i];
        if (li.textContent == letter) {
            li.classList.remove('hide');
            li.classList.add('show')
        }
    }
    return letterCheck;
}
}