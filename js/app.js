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

const keys = document.querySelectorAll('.key');
keys.forEach(button => keys.addEventListener('click', (e) => {
    game.handleInteraction(e.target)
}));

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

/*Create event listener has been added for the keyup or keydown event so that pressing a physical keyboard button results in the handleInteraction() being called for the associated onscreen keyboard button  */

//on-screen & chosen
//loop over all the button elements
//if the textContent matches e.key call the handleInteraction method, pass in that button element
/*/
const keydown = document.addEventListener('keydown', (e) => {
    let 
    game.handleInteraction(e.key);
})*/