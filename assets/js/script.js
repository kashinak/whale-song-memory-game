// GAME VARIABLES
let gamePlay = [];//array to keep track of the computer's order of tile selections
let userPlay = []; //array to keep track of player's order of tile selections
let flash; //the number (integer) of tile flashes in the game 
let round; //keep track of what round we are on
let ace; /*is a boolean true/false value - whether or not 
the player has aced hitting the correct sequence of tiles*/
let compTurn; /*boolean true/false to keep track of 
whether it is the computer's turn or the player's turn*/
let intervalId; //will explain later
let sound = true; //if we are playing sound
let run = false; //if the game program is running
let win; //if the player has won the game or not

const startButton = document.getElementById("start"); 
const roundCount = document.getElementById("round"); 
const topLeft = document.getElementById("topleft"); 
const topRight = document.getElementById("topright"); 
const bottomLeft = document.getElementById("bottomleft"); 
const bottomRight = document.getElementById("bottomright"); 
const resetGame = document.getElementById("reset-button"); 

// RESULTS POPUP VARIABLES
/* game results popup variables based on DigiFisk founder, Aathi Elumalai's tutorial on Udemy: 
    '2D Game Development W/ Javascript & CSS3- Create Memory Game' 
    https://www.udemy.com/course/2d-game-development-javascript-css3-create-memory-game/ */
const result = document.getElementById("result");
const popupBG = document.getElementById("popupBG");
const h1Results = document.getElementById("h1Results");
const pResults = document.getElementById("pResults");
