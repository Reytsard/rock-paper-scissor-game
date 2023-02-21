/*Rock Paper Scissor game
first: we need to prompt a greeting for the game 
second: we should make the side of the computer to have a choice
third: we should prompt the user to have a choice

Pseudocode:
The game will start
the computer will pick a choice
the user will picj a choice
if computer's choice is better than user's choice
display that the user lose
else if users choice is better than the computer
display that the user won
if computer and user have the same choice
display that it is a tie

picking of the choice
roll for computer: we can use number to pick what choice 
1 -> Rock
2 -> Paper
3 -> Scissor 
*/

//computerRoll
function getComputerChoice(){
    let a = Math.floor(Math.random() * 3 + 1);
    switch(a){
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissor";
    }
}

function playRound(playerSelection){
    // playerSelection = this.value;
    
    let computerSelection = getComputerChoice().toLowerCase();
    let screen = document.querySelector('#screen');
    let userScoreHTML = document.querySelector('#userScore');
    let compScoreHTML = document.querySelector('#compScore');

    if(playerSelection == "paper" && computerSelection == "rock"){
        screen.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        userScore++;
        userScoreHTML.textContent = `${userScore}`;
    } else if (playerSelection == "scissor" && computerSelection == "paper"){
        screen.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        userScore++;
        userScoreHTML.textContent = `${userScore}`;
    }else if (playerSelection == "rock" && computerSelection == "scissor"){
        screen.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        userScore++;
        userScoreHTML.textContent = `${userScore}`;
    } else if (playerSelection == computerSelection){
        screen.textContent = `It's A Tie`;
    } else {
        screen.textContent = "You Lose! "+computerSelection+" beats "+playerSelection;
        compScore++;
        compScoreHTML.textContent = `${compScore}`;
    }

}
function checkScore(){
    if(userScore == 5){
        let header = document.querySelector(".header");
        header.textContent = `You WON!!! You have defeated the computer`;
        rckbtn.disabled = true;
        pprbtn.disabled = true;
        scrbtn.disabled = true;
    }else if(compScore == 5){
        let header = document.querySelector(".header");
        header.innerHTML = `<strong>You LOST!!! You have been defeated by the computer</strong>`;
        rckbtn.disabled = true;
        pprbtn.disabled = true;
        scrbtn.disabled = true;
    }
}

// function game(){
//     playRound(playerSelection, computerSelection);
// }

// alert("Welcome to the game of\nRock Paper Scissors\nBest-of-Five!")
// for(let i = 0; i < 5; i++){
// let playerSelection = prompt("Rock Paper Scissor Shoot!\nPick your Choice:\n(Rock / Paper / Scissor)");

// playRound(playerSelection,computerSelection);
// }


let userScore = 0;
let compScore = 0;

let rckbtn = document.querySelector("#rockButton");
rckbtn.addEventListener('click',() => {
    playRound('rock');
    checkScore();
});

let pprbtn = document.querySelector("#paperButton");
pprbtn.addEventListener('click',() => {
    playRound('paper');
    checkScore();
});

let scrbtn = document.querySelector("#scissorButton");
scrbtn.addEventListener('click',() => {
    playRound('scissor');
    checkScore();
}); 



