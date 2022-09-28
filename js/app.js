/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//Start Game Button #8 
const startButton = document.getElementById("btn__reset");
let game;

startButton.addEventListener("click", (e) => {
    game = new Game();
    game.startGame();
});

/*Create event listener has been added for the keyup or keydown event so that pressing a physical keyboard button results in the handleInteraction() being called for the associated onscreen keyboard button  */

//listener for onscreen keyboard button
const letters = document.getElementById('qwerty');
const letter = document.querySelectorAll('#qwerty button');

    const button = e.target;
    if (button.tagName === 'BUTTON') {
        button.classList.add('chosen');
    }

    letters.addEventListener("click", (e) => {
        game.handleInteraction(button)
    });

const keydown = document.addEventListener("keydown", (e) => {
    game.handleInteraction(e.key);
})