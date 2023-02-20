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

function playRound(playerSelection, computerSelection){
    const computerSelection = getComputerChoice();
    playerSelection = this.value;
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection == "paper" && computerSelection == "rock"){
        alert("You Win! "+playerSelection+" beats "+computerSelection);
    } else if (playerSelection == "scissor" && computerSelection == "paper"){
        alert("You Win! "+playerSelection+" beats "+computerSelection);
    }else if (playerSelection == "rock" && computerSelection == "scissor"){
        alert("You Win! "+playerSelection+" beats "+computerSelection);
    } else if (playerSelection == computerSelection){
        alert("Its a Tie!");
    } else {
        alert("You Lose! "+computerSelection+" beats "+playerSelection);
    }
}

function game(){
    playRound(playerSelection, computerSelection)
}

alert("Welcome to the game of\nRock Paper Scissors\nBest-of-Five!")
// for(let i = 0; i < 5; i++){
let playerSelection = prompt("Rock Paper Scissor Shoot!\nPick your Choice:\n(Rock / Paper / Scissor)");

playRound(playerSelection,computerSelection);
// }


let userScore = 0;
let compScore = 0;

let btn = document.querySelectorAll("button");
btn.forEach(btn => {
    addEventListener('click',playRound)
});

