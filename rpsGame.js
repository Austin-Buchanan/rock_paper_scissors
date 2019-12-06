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
            console.log("Did not recognize your selection.")
            return 0;
    }
    
    return `You ${winState}! ${capitalize(playerSelection)} ${(winState === "win") ? "beats" : (winState === "lose") ? "loses to" : "ties with"} ${computerSelection}.`;
}

function capitalize(str){
    str = str.toLowerCase();
    let str0 = str.charAt(0).toUpperCase();
    let str1 = str.slice(1);
    return str0 + str1;
}

function game(){
    for(let i = 0; i < 5; i++){
        let playerInput = prompt("Rock, paper, or scissors?");
        let computerInput = computerPlay();
        console.log(`Computer chooses ${computerInput}.`);
        console.log(playRound(playerInput, computerInput));
    }
}


game();