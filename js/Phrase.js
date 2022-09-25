/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//Created Constructor
class Phrase {
  constructor(phrase) {
    this.phrase = phrase = phrase.toLowerCase();
  }
  //split up the phrase into an array, each character will be it's own string inside of it #6
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

  
}

//******element that has a phrase class is a div, so add li elements to div.phrase. refer to showMatchedLetter
const ul = document.querySelector('#phrase ul').firstElementChild;

//hide & space
for(let i = 0; i < this.phrase.length; i++) {
    let phraseMatch = ul.getElementsByClassName(letter)[i];
    if(letters[i] === ''){
        li.setAttribute('class', `space ${letters[i]}`);
    }else {
        li.setAttribute('class', `hide letter ${letters[i]}`);
    }
    ul.appendChild(li)
}


//9  Part 1  
//checkLetter() : check if a letter is in a phrase  & showMatchedLetter() : reveals the letters on the board that matches the player's selection
function checkLetter(letter) {
    return this.phrase.includes(letter);
}

//showMatchedLetter loops over the this.phrase property and if the textContent of the li equals the letter parameter passed to the method then you can change the className hide to show
function showMatchedLetter(letter){
let letterCheck = document.querySelectorAll(".letter");
let match = " ";
for (let i = 0; i < letterCheck.length; i++) {
const li = letterCheck[i];
if (e.textContent === li.textContent.toLowerCase()) {
showMatchedLetter = li.classList.add("show");
} else {
return null;
}
}
return showMatchedLetter;
}
