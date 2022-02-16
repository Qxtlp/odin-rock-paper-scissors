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
        return 0;
    }else if (p1==0&&cp==1||p1==1&&cp==2||p1==2&&cp==0) {
        return 2;
    }else{
        return 1;
    }
    
}

function game(){
    let pPoints=0;
    let cPoints=0;
    for (let i = 0; i < 5; i++) {
        let player = playerSelection();
        let computer = computerPlay();
        let result = playRound(player,computer);
        console.log(
            "you chose: "+choice[player],
            "\ncomputer chose: "+choice[computer],
        )
        switch (result) {
            case 0:
                console.log("Result: Draw");
                break;
            case 1:
                console.log("Result: Player won the round");
                pPoints++;
                break;
            case 2:
                console.log("Result: Computer won the round");
                cPoints++;
                break;
        }
    }
    if (pPoints==cPoints) {
        return "Draw"
    }else if (pPoints>cPoints) {
        return "Player won the game"
    }else{
        return "Computer won the game"
    }
}

console.log(game());


