alert("Welcome to Game Activity!")

// GameMenuPrompt()

JackAndPoy()

function GameMenuPrompt(){
    let choice = prompt( "Please choose a game \n" +
    "1. Jack and Poy\n" +
    "2. Guessing Number\n" +
    "3. Exit")

    if(choice == 1){
        JackAndPoy()
    }else if(choice == 2){
        GuessingNumber()
    }else if(choice == 3){
        Exit()
    }
    else{
        alert("Invalid Input: Please enter the correct number of the game.")
        GameMenuPrompt()
    }
}


function JackAndPoy(){
    alert("Welcome to Jack And Poy!")
    let rounds = userRounds()
    let selector = ["Scissors","Rock","Paper"]
    let round_count = 1;
    let playerScore = 0
    let computerScore = 0
  
    while(round_count<=rounds){
        alert(`Round ${round_count}`)

        let playerPick = pickValue()   
        let computer_pick = selector[Math.floor(Math.random() * 3)]
   
        let gameResult = `PLAYER: ${playerPick}\n` +
                         `COMPUTER: ${computer_pick}\n`  
       

        if(playerPick == computer_pick){
            alert(gameResult+="IT'S A TIE")
        }else{
            let isPlayerWin = false
            switch(playerPick){
                case "Rock":
                    isPlayerWin = (computer_pick == "Scissors")
                    break;
                case "Paper" :
                    isPlayerWin = (computer_pick == "Rock") 
                    break;
                case "Scissors" :
                    isPlayerWin = (computer_pick == "Paper") 
                    break;
            }
            if(isPlayerWin){
                playerScore++
                result = "YOU WIN!"
            }else if(!isPlayerWin){
                computerScore++
                result = "YOU LOSE!"
            }
            alert(gameResult+=result)
        }
        round_count++
    }

    let  gameFinalResult = "" 

    if(playerScore == computerScore){
        gameFinalResult = "IT's A TIE!"
    }else if(playerScore < computerScore){
        gameFinalResult = "YOU LOSE!"
    }else{
        gameFinalResult = "YOU WIN!"
    }

    alert(
        `Player Score: ${playerScore}\n` +
        `Computer Score: ${computerScore}\n` +
        `Game Result: ${gameFinalResult}`
    )

    playAgain()
    
}


function GuessingNumber(){
    alert("Welcome to Guessing Number!")
    let levelRange = guessNumberLevel()
    let count = 1
    let numberOfAttempt = 1
    let computerGuessNumber = Math.floor(Math.random() * levelRange ) + 1
    while(count <= levelRange){
        
        userGuess = userGuessNumber(levelRange)
        if(parseInt(userGuess) == computerGuessNumber){
            alert(`Congratulations! You guessed the correct number ${computerGuessNumber} in attempt ${numberOfAttempt}`)
            break
        }else if(parseInt(userGuess) < computerGuessNumber){
            alert(`Too Low! Try a highest number.`)
            numberOfAttempt++
        }else if(parseInt(userGuess) > computerGuessNumber){
            alert(`Too High! Try a lowest number.`)
            numberOfAttempt++
        }

        count++
    }

    playAgain()

}


function Exit(){
    alert("Game over! Thank you") 
}

function pickValue(){
    
    let pick = prompt(
        "Choices: \n" +
        " 1. Scissor\n" +
        " 2. Rock\n" + 
        " 3. Paper\n\n" +
        "Enter the number of pick:"
    )

    switch(parseInt(pick)){
        case 1: 
            return "Scissors"
        case 2:
            return "Rock"
        case 3: 
            return "Paper"
        default :
            alert("Invalid Input: Please enter the correct number") 
            return pickValue()
    }    
}


function guessNumberLevel(){
    
    let level = prompt(
        "Please choose a level: \n" +
        " 1. Easy 1-10\n" +
        " 2. Medium 1-20\n" + 
        " 3. Hard 1-30\n\n" +
        "Enter the number of level:"
    )

    switch(parseInt(level)){
        case 1: 
            return 10
        case 2:
            return 20
        case 3: 
            return 30
        default :
            alert("Invalid Input: Please enter the correct number") 
            return guessNumberLevel()
    }    
}

function userGuessNumber(levelRange){
    let userGuess = prompt(`Enter number between 1 to ${levelRange}`)
    if(userGuess>=1 && userGuess<=levelRange){
        return userGuess
    }else{
        alert("Invalid Input: Please enter the correct number")  
        return userGuessNumber(levelRange)
    }
}

function userRounds(){
    let rounds = prompt(`Enter the number of rounds:`)
    if(!isNaN(rounds)){
        return parseInt(rounds)
    }else{
        alert("Invalid Input: Please enter the correct number")  
        return userRounds()
    }
}


function playAgain(){
    let playGame = prompt("Do you want to play again? Yes or No :")
    if(playGame == 'yes'){
        JackAndPoy()
    }else if(playGame == 'no'){
        Exit()
    }else{
        alert("Invalid Input: Please enter 'yes' or 'no'.")  
        return playAgain()
    }
}