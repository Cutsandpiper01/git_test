function round(){
	var playerEntry = prompt("Please enter Rock, Paper, or Scissors.")

	return(didPlayerWin(playerEntry))
}

function didPlayerWin(player){
	player = player.toLowerCase();
	const playerNum = inputToNumber(player)
	const compNum = Math.floor(Math.random() * 3)
	console.log(compNum)
	console.log(playerNum)
	if(playerNum - compNum == 0){
		return 0
	}else if(playerNum - compNum == -1 || playerNum-compNum == 2){
		console.log(playerNum-compNum)
		return 1
	}else{
		return -1
	}
}

function inputToNumber(input){
	if(input == "rock"){
		return 1;
	} else if(input == "scissor" || input == "scissors"){
		return 2;

	}else{
		return 0;
	}

}

function game(){
	let playerscore = 0;
	let compscore = 0;
	for (var i = 0; i <= 4; i++) {
		let tempscore = round()
		if(tempscore == 0){
			console.log("Round Tie")
		}else if(tempscore ==1 ){
			console.log("Player won round!")
			playerscore += 1

		}else{
			compscore += 1;
			console.log("Computer won round ):")
		}
	console.log("Score is " + playerscore + " you to " +compscore+ " computer.")

	}
}

game()