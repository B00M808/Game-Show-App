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
    };
    
    //getRandomPhrase() Method
    getRandomPhrase() {
        const num = Math.floor(Math.random() * this.phrases.length);
        const randomPhrase = this.phrases[num];
        return randomPhrase;
    };

    //startGame() Method #7 
    startGame() {
    document.getElementById('overlay').style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
    };

//You Win
    checkForWin() {


        let hidden = document.querySelectorAll('.hide');
        const youWin = true;
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

//handleInteraction() Method #11 
//onscreen keyboard button clicked, matches a letter in phrase then directs game based on correct or incorrect guess
handleInteraction(e) {
    if(this.activePhrase.checkLetter(e.textContent)) {
        e.className = "chosen";
        this.activePhrase.showMatchedLetter(e.textContent);
        if (this.checkForWin()) {
            this.gameOver(true);
        }
        if (this.missed > 4) {
            this.gameOver(false);
        }
    }else if(e. disabled === false) {
        e.className = "wrong";
        this.removeLife()
    }
    e.disabled = true
};

//removes a life from the scoreboard, one of the liveHeart.png is replaced with a lostHeart.png, increments & calls the gameOver
removeLife() {

    this.alivePoints = this.alivePoints - 1
        const totalHearts = this.alivePoints;
        heart(totalHearts).src = "images/lostHeart.png"
    }
//currentImage.src = lostHeart; heart disappears when call game.removeLife
    
    reset() {
        phraseContainer.innerHTML = " "
        startGameOverlay.style.display = "none"
        this.createPhrases()
        this.alivePoints = 5;
        startGameOverlay.className = "start"
        hearts.forEach(heart => {
            heart.childNodes[0].src = "images/liveHeart.png";     
            
        });
    
        disabled = false
    }



}