

const choice = ["Rock", "Paper", "Scissors"];

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
    console.log(
        "you chose: " + choice[p1],
        "\ncomputer chose: " + choice[cp],
    )

    if (p1 == 0 && cp == 0 || p1 == 1 && cp == 1 || p1 == 2 && cp == 2) {
        return console.log("draw");;
    } else if (p1 == 0 && cp == 1 || p1 == 1 && cp == 2 || p1 == 2 && cp == 0) {
        return console.log("lose");;
    } else {
        return console.log("win");;
    }

}

const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        playRound(playerSelection(button.id), computerPlay());
    });
});


