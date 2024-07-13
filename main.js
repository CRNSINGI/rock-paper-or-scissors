const getUserChoice = (userInput) => {
userInput = userInput.toLowerCase(); 
if(userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
    return userInput
} else {
    console.log('Error, please type: rock,paper or scissors.');
}
} // user choice start of the gaome and  different capitalizations 

const getComputerChoice = () => { 
    const randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0: 
          return 'rock';
        case 1:
          return 'paper';
        case 2: 
          return 'scissors';
    }
}; // math.random and math fllor to get the whole number from 0 to 2; 

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'This game is a tie!';
    } /// tie condition 
    if (userChoice === 'rock') {
        if(computerChoice === 'paper') {
        return "Sorry, computer won";
    } else { 
        return "Congratulations, you won!";
    } // not  a tie condition 
    } 

    if (userChoice === 'paper') {
        if(computerChoice === 'scissors') {
            return "Sorry, computer won!";
        } else { 
            return "Congratulations, you won!";
        }

    }

    };