function computerPlay () {

    switch (Math.floor(Math.random() * 3)) {
        case 0:
          return 'rock';
        case 1:
          return 'paper';
        case 2:
          return 'scissors';
        }
    }



  

  

    const playerSelection = prompt('Please choose rock, paper or scissors').toLowerCase();

      do {
      prompt
      }
      while (playerSelection 
        != "rock" && playerSelection != "paper" && playerSelection != "scissors");
        
  
  
    


  const computerSelection = computerPlay();
  
    
  

 
function playRound () {


 console.log(`The computer chose ${computerSelection} and you chose ${playerSelection}`);

 if (playerSelection === computerSelection) {
  return 'tie';

} else if (playerSelection === 'rock') {
  if (computerSelection === 'paper') {
    return 'You lose, paper smashes rock';
  } else if (computerSelection === 'scissors') {
    return 'You win, rock thumps scissors';
  }

} else if (playerSelection === 'paper') {
  if (computerSelection === 'scissors') {
    return 'You lose, scissors cut through paper';
  } else if (computerSelection === 'rock') { 
    return 'You win, paper smashes rock';
  }

} else if (playerSelection === 'scissors') {
  if (computerSelection === 'rock') {
    return 'You lose, rock smashes scissors';
  }  else if (computerSelection === 'paper') {
    return 'You win, scissors cut through paper';
  } 
}
}



function game () {

  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i <= 5; i++) {
  
    const playerSelection = prompt('choose rock paper or scissors');
    
    let tempValue = playRound(playerSelection, computerSelection);
    playerScore += tempValue[0];
    computerScore =+ tempValue[1];
 
}
  console.log(playerScore);
   (playerScore > computerScore) ? console.log('You Won Yay!!!') : (playerScore === computerScore) ? console.log('Draw!!!') : console.log('You Lose!!!');
}
game();

