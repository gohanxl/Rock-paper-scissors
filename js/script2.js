let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById("userScoreSpan");
const compScoreSpan = document.getElementById("compScoreSpan");
const scoreboard_div = document.querySelector(".gameScore");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

var userChoice;

function getComputerChoice(){
    const choices = ["r", "s", "p"];
    const randomNumber =  Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(uChoice, cChoice){
    userScore++;
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = computerScore;
    result_div.innerHTML = ` ${convertToWord(uChoice)} beats ${convertToWord(cChoice)}. You win!`
}

function lose(uChoice, cChoice){
    computerScore++;
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(uChoice)} loses to ${convertToWord(cChoice)}. You lost!`
}

function draw(uChoice, cChoice){
    result_div.innerHTML = `${convertToWord(uChoice)} equals to ${convertToWord(cChoice)}. Draw!`
}

function game(uChoice){

    const cChoice = getComputerChoice();
    switch (uChoice + cChoice){
        
        case "rs":
        case "pr":
        case "sp":
            win(uChoice, cChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(uChoice, cChoice);
            break;
        case "ss":
        case "rr":
        case "pp":
            draw(uChoice, cChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', function(){
        game("r");
    })

    paper_div.addEventListener('click', function(){
        game("p");
    })

    scissors_div.addEventListener('click', function(){
        game("s");
    })
}

main();

/*do{

    do{

        userChoice = prompt("Ingrese piedra, papel o tijera");
        
    }while(userChoice !== "pa" && userChoice !== "t" && userChoice !== "pi");

    console.log(userChoice);
    console.log(computerChoice = getComputerChoice());
    game(userChoice, computerChoice);

    var playAgain = prompt("Quieres jugar de nuevo?");

}while(playAgain === "Si" || playAgain.toLowerCase() === "si" || playAgain.toUpperCase() === "SI");

console.log("See ya later alligator ;)");*/