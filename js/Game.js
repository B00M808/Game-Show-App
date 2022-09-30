/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//Created the Game Constructor
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('Just let your soul glow'),
            new Phrase('Till you do right by me'),
            new Phrase('Marcussss Darling'),
            new Phrase('Bye Felicia'),
            new Phrase('Wakanda Forever')
        ];
        this.activePhrase = null;
        this.alivePoints = 5;
    };

    getRandomPhrase() {
        const num = Math.floor(Math.random() * this.phrases.length);
        const randomPhrase = this.phrases[num];
        return randomPhrase;
    };

    startGame() {
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    };

    checkForWin() {
        let hidden = document.querySelectorAll('.hide');
        let youWin = true;
        const emptyLetterBoxes = document.querySelectorAll('.letter')

        emptyLetterBoxes.forEach(letter => {
            let hiddenLetter = letter.classList.contains("hide")
            if (hiddenLetter) {
                youWin = false
            }
        })
        return youWin
    }

    //Win or lose phrase
    createPhrases() {
        let myArray = phraseArray.forEach(phraseString => {
            const phraseObject = new Phrase(phraseString);
            this.phrases.push(phraseObject)
        })
    };

    //handleInteraction() Method 
    //onscreen keyboard button clicked, matches a letter in phrase then directs game based on correct or incorrect guess
    handleInteraction(e) {
        if (this.activePhrase.checkLetter(e.textContent)) {
            e.className = "chosen";
            this.activePhrase.showMatchedLetter(e.textContent);
            if (this.checkForWin()) {
                this.gameOver(true);
            }
            if (this.alivePoints <= 1) {
                this.gameOver(false);
            }
        } else if (e.disabled === false) {
            e.className = "wrong";
            this.removeLife()
        }
        e.disabled = true;
    };

    //original start screen overlay, the outcome updates overlay, messages displayed, replaces the overlays start 
    gameOver(gameValue) {
        let overlay = document.getElementById('overlay');
        let gameMessage = document.getElementById("game-over-message");
        overlay.style.display = "flex";
        if (gameValue === false) {
            gameMessage.textContent = "Better Luck Next Time";
            overlay.className = "lose";
            this.reset();
        } else {
            overlay.className = "win";
            gameMessage.textContent = "Congrats, You Win! Wanna Play Again?"
            this.reset();
        }
    }

    //removes a life from the scoreboard, update heart image, (de)increments & calls message
    removeLife() {
        let hearts = document.querySelectorAll('.tries img');
        let totalHearts = this.missed;
        hearts[totalHearts].src = "images/lostHeart.png";
        this.missed = this.missed + 1;
        if(this.missed > 4){
            this.gameOver(false);
        }
    }
    
    //reset gameboard between games, removed all li elem, enabled onscreen buttons, reset heart images
    reset() {
        let startButton = document.getElementById("btn__reset");
        let phraseList = document.querySelector("#phrase ul");
        let chosenLetters = document.querySelectorAll(".chosen");
        let wrongLetters = document.querySelectorAll(".wrong");
        let hearts = document.querySelectorAll(".tries img");

        startButton.textContent = "Play Again";

        for (let i = 0; i < chosenLetters.length; i++) {
            chosenLetters[i].className = "key";
            chosenLetters[i].disabled = false;
        }

        for (let i = 0; i < wrongLetters.length; i++) {
            wrongLetters[i].className = "key";
            wrongLetters[i].disabled = false;
        }

        console.log(phraseList);
        phraseList.textContent = " ";
        // startGameOverlay.style.display = "none"
        // this.createPhrases()
        this.alivePoints = 5;
        // startGameOverlay.className = "start"
        hearts.forEach(heart => {
            heart.src = "images/liveHeart.png";
        });
        // disabled = false
    }
}