let compScore = 0;
let userScore = 0;

const userChoices = document.querySelectorAll(".user-options .choose"); 
const msg = document.querySelector("#msg");
const you = document.querySelector("#userScore"); 
const comp = document.querySelector("#compScore"); 

const genCompChoice = () => {
    const options = ["stone", "paper", "scissor"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];     
};

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game Was Draw!";
    msg.style.backgroundColor = "purple";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        console.log(userScore);
        msg.innerText = `Win! You chose ${userChoice}, comp chose ${compChoice}`; 
        msg.style.backgroundColor = "green";
        you.innerText = userScore;
        console.log("You Win!");
    } else {
        compScore++;
        console.log(compScore);
        console.log("You Lose!");
        msg.innerText = `Lose! You chose ${userChoice}, comp chose ${compChoice}`;
        comp.innerText = compScore;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice is ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice is ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "stone") {
            userWin = compChoice === "paper" ? false :  true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "stone" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

userChoices.forEach((choice) => { 
    choice.addEventListener("click", function() {
        userChoices.forEach((option) => {
            option.classList.remove("chosen");
        });

        this.classList.add("chosen");

        let userChoice = this.getAttribute("id");
        playGame(userChoice);
    });
});
