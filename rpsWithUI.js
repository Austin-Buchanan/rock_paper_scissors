let playerScore = 0;
let computerScore = 0;
     

function computerPlay(){
    let roll = Math.floor(Math.random() * Math.floor(3));
    switch(roll){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    let winState = "";
    const results = document.querySelector('#results');
    switch(playerSelection){
        case "rock":
            if(computerSelection === "rock"){
                winState = "tie";
            }
            if(computerSelection === "paper"){
                winState = "lose";
            }
            if(computerSelection === "scissors"){
                winState = "win";
            }
            break;
        case "paper":
            if(computerSelection === "rock"){
                winState = "win";
            }
            if(computerSelection === "paper"){
                winState = "tie";
            }
            if(computerSelection === "scissors"){
                winState = "lose";
            }
            break;
        case "scissors":
            if(computerSelection === "rock"){
                winState = "lose";
            }
            if(computerSelection === "paper"){
                winState = "win";
            }
            if(computerSelection === "scissors"){
                winState = "tie";
            }
            break;
        default:
            results.textContent = "Did not recognize your selection.";
            return 0;
    }
    
    if(winState === "win"){
        playerScore++;
    } else {
        computerScore++;
    }
    const playerCard = document.querySelector('#playerCard');
    playerCard.textContent = `Player Score: ${playerScore}`;
    const cpuCard = document.querySelector('#cpuCard');
    cpuCard.textContent = `Computer Score: ${computerScore}`;
    
    let endStatement = `You ${winState}! ${capitalize(playerSelection)} ${(winState === "win") ?
            "beats" : (winState === "lose") ? "loses to" : "ties with"} ${computerSelection}.`;
    results.textContent = endStatement;
}

function capitalize(str){
    str = str.toLowerCase();
    let str0 = str.charAt(0).toUpperCase();
    let str1 = str.slice(1);
    return str0 + str1;
}

function game(){
    const rockButton = document.querySelector('#rock');
    rockButton.addEventListener('click', (e) => {
       playRound("rock", computerPlay()); 
    });
    const paperButton = document.querySelector('#paper');
    paperButton.addEventListener('click', (e) => {
        playRound("paper", computerPlay());
    });
    const scissorsButton = document.querySelector("#scissors");
    scissorsButton.addEventListener('click', (e) => {
        playRound("scissors", computerPlay());
    });
    const resetButton = document.querySelector('#reset');
    resetButton.addEventListener('click', (e) => {
        playerScore = 0;
        computerScore = 0;
        const playerCard = document.querySelector('#playerCard');
        playerCard.textContent = `Player Score: ${playerScore}`;
        const cpuCard = document.querySelector('#cpuCard');
        cpuCard.textContent = `Computer Score: ${computerScore}`;
    });
}

game();