// GAME VARIABLES
let gamePlay = []; // array to keep track of the computer's order of tile selections
let userPlay = []; // array to keep track of player's order of tile selections
let flash; // the number (integer) of tile flashes in the game 
let round; // keep track of what round we are on
let ace; /* is a boolean true/false value - whether or not 
the player has aced hitting the correct sequence of tiles */
let compTurn; /* boolean true/false to keep track of 
whether it is the computer's turn or the player's turn */
let intervalId; //will explain later
let sound = true; // if we are playing sound
let run = false; // if the game program is running
let win; // if the player has won the game or not

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

// FUNCTIONS

// upon clicking resetGame button, game console clears and new game sequence is played
resetGame.addEventListener("click", play)

function play() {
    win = false; // upon game starting, player has NOT won yet
    gamePlay = [];// use a for loop below to randomly fill up this gamePlay array
    userPlay = [];
    flash = 0;
    intervalId = 0;
    round = 1;
    roundCount.innerHTML = 1;
    /* when you press startButton, the round will be set to "1"
    because you are on first round of the game */
    ace = true;// means the player has not hit anything wrong
    for (var i = 0; i < 20; i++) { 
      // this is how we fill the gamePlay array
      gamePlay.push(Math.floor(Math.random() * 4) + 1);
      /* gets random number between 1 and 5 and it is going to be a 
      decimal so Math.floor is going to round it down. 
      The gamePlay array fills with 20 random numbers */
    }
    compTurn = true; 
    /* game starts with the computer flashing lights and then 
    the player has to match those lights */
      
    // then we start the first turn
    intervalId = setInterval(gameTurn, 800);
    /* setInterval will run a gameTurn function 
    every 800 milliseconds and will repeat until this interval is cleared 
    and the tiles will STOP flashing when the game stops running */
}
  
/* gameTurn function which cause the game tiles to flash yellow. */

function gameTurn() {
    run = false; 
    /* when set to false, player cannot click any of the buttons while the game is flashing colors. */
    init() 
    if (flash === round) { /* if the numbers of time the lights have have flashed 
     equals the turn that we are on then that means the computer's 
     turn is over. so if the computer's turn is over, we are going to clear interval */
      clearInterval(intervalId);
      compTurn = false;
      clearColor();
      run = true; // if run = true that means the player can now start pressing buttons.
    }
   
    if (compTurn) { /* the thing in the parenthesis is the condition and then 
     you are going to run the thing in the cury brackets */
      clearColor(); /* setTimeout is very similar to setInterval which repeats something over and over, 
      set timeout is going to do something once after a certain number of milliseconds */
      setTimeout(function() { // my code - I converted arrow function to vanilla JS
        if (gamePlay[flash] === 1) playSound1(); // if condition is true run playSound1() function and so on
        if (gamePlay[flash] === 2) playSound2();
        if (gamePlay[flash] === 3) playSound3();
        if (gamePlay[flash] === 4) playSound4();
        flash++; // the computer goes up one flash after every 200 milliseconds
      }, 200);// I changed from 200 to 1500
    }
}

// link game photo tiles with corresponding game sounds and blink capability //
function playSound1() {
    document.getElementById("game-photo-1").style.outline =
        "#ffc108 solid 10px";
    document.getElementById("beluga-sound").play();
    blink("game-photo-1");
}

function playSound2() {
    document.getElementById("game-photo-2").style.outline =
        "#ffc108 solid 10px";
    document.getElementById("orca-sound").play();
    blink("game-photo-2");
}

function playSound3() {
    document.getElementById("game-photo-3").style.outline =
        "#ffc108 solid 10px";
    document.getElementById("rightwhale-sound").play();
    blink("game-photo-3");
}

function playSound4() {
    document.getElementById("game-photo-4").style.outline =
        "#ffc108 solid 10px";
    document.getElementById("spermwhale-sound").play();
    blink("game-photo-4");
}

/* function init() to provide event listeners to make game buttons clickable and to playsound 
and blink when player presses game button */
function init() {
    document
        .getElementById("game-photo-1")
        .addEventListener("click", playSound1);
    document
        .getElementById("game-photo-2")
        .addEventListener("click", playSound2);
    document
        .getElementById("game-photo-3")
        .addEventListener("click", playSound3);
    document
        .getElementById("game-photo-4")
        .addEventListener("click", playSound4);
}

/* blink function creates yellow outline border appear when player clicks a gameboard button and 
then the border disappears after 1 second */
function blink(id) {
    let f = document.getElementById(id);
    new Promise(function(resolve, reject) { 
        f.style.outline = "#ffc108 solid 10px";
        setTimeout(function(){ 
            f.style.outline = "";
            setTimeout(function() { 
                resolve();
            }, 250);
        }, 1000);
    });
}

// clear lit tile yellow outline
function clearColor() {
    topLeft.style.outline = "#00ffff"; 
    topRight.style.outline = "#00ffff"; 
    bottomLeft.style.outline = "#00ffff"; 
    bottomRight.style.outline = "#00ffff"; 
  }
  
// flash yellow oultine on game tiles
function flashYellow() {
    topLeft.style.backgroundColor = "#ffc108";
    topRight.style.backgroundColor = "#ffc108";
    bottomLeft.style.backgroundColor = "#ffc108";
    bottomRight.style.backgroundColor = "#ffc108";
}
  
// make game tiles clickable for the player
  topLeft.addEventListener('click', function(event) { 
      userPlay.push(1);
      check(); // a function to check if the player's moves are correct
      playSound1();
      if(!win) {
        setTimeout(function() { 
          clearColor(); // make sure the color the player clicked is going to clear after 300 milliseconds
        }, 300);
      }
  });

  topRight.addEventListener('click', function(event) { 
      userPlay.push(2); 
      check();
      playSound2();
      if(!win) {
        setTimeout(function() {  
          clearColor();
        }, 300);
      }
  });
  
  bottomLeft.addEventListener('click', function(event) { 
      userPlay.push(3); 
      check();
      playSound3(); 
      if(!win) {
        setTimeout(function() { 
          clearColor();
        }, 300);
      }
  });
  
  bottomRight.addEventListener('click', function(event) { 
      userPlay.push(4); 
      check();
      playSound4();
      if(!win) {
        setTimeout(function() {  
          clearColor();
        }, 300);
      }
  })
  
// based on free Code Camp Simon Game tutorial 

// the above 4 functions call the complex check() function
function check() {
    if (userPlay[userPlay.length - 1] !== gamePlay[userPlay.length - 1]) 
      ace = false;
  /* condition if player wins the game - you can change 3 to 20 to 
  make the game harder so player wins after 20 rounds */
    if (userPlay.length === 3 && ace) { 
      winGame(); 
    }
  // condition if player's moves are wrong
    if (ace === false) { 
      flashYellow();
      setTimeout(function() { 
        // roundCount.innerHTML = "YOU LOSE!";
        // document.getElementById("lose-game-sound").play();
        displayResult();
   

      }, 2200);
   
      setTimeout(function() { 
        roundCount.innerHTML = round;
        clearColor();
          play();// repeating the whole game starting the game over

      }, 800);
      /* only run playSound functions when sound=true, on 
      condition that the player's moves are correct */
      sound = false; 
        
    }
    // condition if player's moves are right but has not won the game yet
    if (round === userPlay.length && ace && !win) { 
      round++;
      userPlay = []; 
      compTurn = true;
      flash = 0;
      roundCount.innerHTML = round;
      intervalId = setInterval(gameTurn, 800);
    }
  
  }
  
  // function if player has won the game
  function winGame() {
    flashYellow();
  
    // user cannot click any of the tiles while run = false
    run = false; 
    win = true;
    setTimeout(function() { 
      // document.getElementById("win-game-sound").play();
      // roundCount.innerHTML = "CONGRATS! YOU WIN!";
      displayResult();

    }, 1400);

  }

  // code snippet from 'Jack' on Stack Overflow https://stackoverflow.com/questions/13202762/html-inside-twitter-bootstrap-popover  and JSFiddle http://jsfiddle.net/z824fn6b/

  $(function(){
    $("[data-toggle=popover]").popover({
        html : true,
        content: function() {
          var content = $(this).attr("data-popover-content");
          return $(content).children(".popover-body").html();
        },
        title: function() {
          var title = $(this).attr("data-popover-content");
          return $(title).children(".popover-header").html();
        }
    });
});

// Make the fancy display for results
/* popup style based on DigiFisk founder, Aathi Elumalai's tutorial on Udemy: 
'2D Game Development W/ Javascript & CSS3- Create Memory Game' 
https://www.udemy.com/course/2d-game-development-javascript-css3-create-memory-game/ */ 
function displayResult() {

  let width = window.innerWidth;
  popupBG.style.display = "block";
  result.style.display = "block";
  result.style.left = (width/2) - (500/2) + "px"; // when a number is concatinated with a string it becomes a string//
  result.style.top = 250 + "px";

  if(userPlay.length === 3) {
    h1Results.innerHTML = "Congratulations! You won!";
    pResults.innerHTML = "You've scored " + round + " out of 3 rounds.";
    document.getElementById("win-game-sound").play();
  }
  else {
    h1Results.innerHTML = "Try again!";
    pResults.innerHTML = "You've scored " + round + " out of 3 rounds.";
    document.getElementById("lose-game-sound").play();
  }
 
}

displayResult();

const okayButton = document.getElementById("okayButton");
okayButton.addEventListener("click", okayClick);

function okayClick() {
  result.style.display = "none";
  popupBG.style.display = "none";
}

