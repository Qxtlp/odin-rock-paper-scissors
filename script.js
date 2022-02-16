const choice = ["Rock","Paper","Scissors"];

function computerPlay(){
    let random = Math.floor(Math.random() *3);
    return choice[random];
}

function playerSelection(){
    const input = prompt("What's your choise?");
    const adjusted = choice.map(value => value.toLowerCase());
    if (adjusted.includes(input.toLocaleLowerCase())) {
        return adjusted.indexOf(input.toLocaleLowerCase());
    }else{
        console.log("There's no such option on rock-paper-scissor game");
    }
}

let cp = computerPlay();
let player = playerSelection();
console.log(cp);
console.log(player);
playerSelection();