function getComputerChoice() {
    let answer = null;
    let result = Math.floor(Math.random() * 3);

    if (result == 0) {
        answer = "ROCK";
    } else if (result == 1) {
        answer = "PAPER";
    } else if (result == 2) {
        answer = "SCISSORS";
    }

    console.log(answer);
    return answer;
}

function getHumanChoice() {
    let answer = prompt("What's your choice?");
    console.log(answer.toUpperCase());
    return answer.toUpperCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanSelection, computerSelection) {
        if (humanSelection == computerSelection) {
            console.log("Draw!");
        } else if (
            (humanSelection == "ROCK" && computerSelection == "PAPER") ||
            (humanSelection == "PAPER" && computerSelection == "SCISSORS") ||
            (humanSelection == "SCISSORS" && computerSelection == "ROCK")
        ) {
            console.log("Computer wins!");
            ++computerScore;
        } else if (
            (humanSelection == "PAPER" && computerSelection == "ROCK") ||
            (humanSelection == "SCISSORS" && computerSelection == "PAPER") ||
            (humanSelection == "ROCK" && computerSelection == "SCISSORS")
        ) {
            console.log("Human wins!");
            ++humanScore;
        }

        console.log("Human score:", humanScore);
        console.log("Computer score:", computerScore);
    }

    // Now calling getHumanChoice and getComputerChoice inside the loop
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();  // Get human's choice
        let computerSelection = getComputerChoice();  // Get computer's choice
        playRound(humanSelection, computerSelection);
    }
}

playGame();
