
const buttons = document.querySelectorAll("button");
const choiceStatus = document.querySelector("#choice");
const roundStatus = document.querySelector("#status");
const gameResult = document.querySelector("#result");

buttons.forEach((button) => {

    button.addEventListener("click", () => {
        game(playerSelection(button.id));
    });
});


const choice = ["Rock", "Paper", "Scissors"];
let pPoints = 0;
let cPoints = 0;

function computerPlay() {
    let random = Math.floor(Math.random() * 3);
    return random;
}

function playerSelection(input) {
    //const input = prompt("What's your choise?");
    const adjusted = choice.map(value => value.toLowerCase());
    if (adjusted.includes(input.toLocaleLowerCase())) {
        return adjusted.indexOf(input.toLocaleLowerCase());
    } else {
        console.log("Please pick either rock paper or scissor");
    }
}
function playRound(playerSelection, computerPlay) {
    let cp = computerPlay;
    let p1 = playerSelection;
    choiceStatus.textContent =
        "you chose: " + choice[p1] +
        "\ncomputer chose: " + choice[cp];

    if (p1 == 0 && cp == 0 || p1 == 1 && cp == 1 || p1 == 2 && cp == 2) {
        return 0;
    } else if (p1 == 0 && cp == 1 || p1 == 1 && cp == 2 || p1 == 2 && cp == 0) {
        return 2;
    } else {
        return 1;
    }

}
function game(playerSelection) {

    let result = playRound(playerSelection, computerPlay());
    switch (result) {
        case 0:
            roundStatus.textContent = "Result: Draw";
            break;
        case 1:
            roundStatus.textContent ="Result: Player won the round";
            pPoints++;
            break;
        case 2:
            roundStatus.textContent ="Result: Computer won the round";
            cPoints++;
            break;
    }
    gameResult.textContent = 
    "player point : "+pPoints+
    " Computer point : "+cPoints;
    if (pPoints == 5) {
        return alert("player won the game");
    } else if (cPoints == 5) {
        return alert("computer won the game");
    }

}


