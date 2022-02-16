const choice = ["Rock","Paper","Scissors"];

function computerPlay(){
    let random = Math.floor(Math.random() *3);
    return random;
}

function playerSelection(){
    const input = prompt("What's your choise?");
    const adjusted = choice.map(value => value.toLowerCase());
    if (adjusted.includes(input.toLocaleLowerCase())) {
        return adjusted.indexOf(input.toLocaleLowerCase());
    }else{
        console.log("Please pick either rock paper or scissor");
    }
}
function playRound(playerSelection,computerPlay){
    let cp = computerPlay;
    let p1 = playerSelection;
    
    if (p1==0&&cp==0||p1==1&&cp==1||p1==2&&cp==2) {
        return "draw";
    }else if (p1==0&&cp==1||p1==1&&cp==2||p1==2&&cp==0) {
        return "lose";
    }else{
        return "win";
    }
    
}

const player = playerSelection();
const computer = computerPlay();

console.log(
    "you chose: "+choice[player],
    "\ncomputer chose: "+choice[computer],
    "\nresult: "+playRound(player,computer)
)