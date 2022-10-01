/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startButton = document.getElementById("btn__reset");
let game;

startButton.addEventListener("click", (e) => {
    game = new Game();
    game.startGame();
});

//listener for onscreen keyboard button
const letters = document.getElementById('qwerty');
const letter = document.querySelectorAll('#qwerty button');

letters.addEventListener("click", (e) => {
    const button = e.target;
    if (button.tagName === 'BUTTON') {
        button.classList.add('.chosen');
        game.handleInteraction(button)
    }
});