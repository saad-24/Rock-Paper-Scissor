
// declare each statement in a variable for using in functions
let userscore = 0;
let compscore = 0;
const userscore_span = document.getElementById("user-score");
const compscore_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".score-board");
let result_div = document.querySelector(".result p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");


// the function takes computer choice in numbers and get the respective letter at the number index
function getcomputerchoice() {
    const choices = ['r','p','s'];
    const randomnumber = Math.floor(Math.random() * 3);
    return choices[randomnumber];
    
}


// this function directs the html what to do in case of a win
function wins() {
    userscore++;
    userscore_span.innerHTML = userscore;
    compscore_span.innerHTML = compscore;
    result_div.innerHTML = "User Wins!!";

}

// this function directs the html what to do in case of a lose
function lose() {
    compscore++;
    userscore_span.innerHTML = userscore;
    compscore_span.innerHTML = compscore;
    result_div.innerHTML = "Computer Wins!!";
    

}

// this function directs the html what to do in case of a draw
function draw() {
    result_div.innerHTML = "It's a draw!!";
    
}


// In this function we take computer choice from above function
//  and adds in userchoice and then check the following cases
//  given in switch staements

function game(userchoice) {                             
    const computerchoice = getcomputerchoice();         
    const computerchoice = getcomputerchoice();
    switch (userchoice + computerchoice) {                           
        case "rs":
        case "pr":
        case "sp":
            wins();
            break;
        case "rp":
        case "ps":
        case "sr":
            lose();
            break;
        case "rr":
        case "pp":
        case "ss":
            draw();
            break;
    }
}     

/* we can also use:
let finalchoice = userchoice + computerchoice;
    if (finalchoice = "rs") {
     wins();
    } else if (finalchoice = "pr") {
      wins();
    } else if (finalchoice = "sp") {
      wins();
    } else if (finalchoice = "rp") {
      lose();
    } else if (finalchoice = "ps") {
      lose();
    } else if (finalchoice = "sr") {
      lose();
    } else if (finalchoice = "rr") {
      draw();
    } else if (finalchoice = "pp") {
      draw();
    } else if (finalchoice = "ss") {
      draw();
   }
*/


// this function decribes the vent that need to be occured
// when a respective button from rock paper or scissor is clicked.
function main(){
    rock_div.addEventListener('click', function() {
        game("r");
    })
    
    
    paper_div.addEventListener('click', function() {
        game("p");
    })
    
    
    scissor_div.addEventListener('click', function() {
        game("s");
    })
}

main();