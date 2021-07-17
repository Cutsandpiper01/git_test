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
		interpretResult(0)
		return 0

	}else if(playerNum - compNum == -1 || playerNum-compNum == 2){
		console.log(playerNum-compNum)
		interpretResult(1)
		return 1
	}else{
		interpretResult(-1)
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

function interpretResult(tempscore){
	if(tempscore == 0){
			divUpdate("Tie")
		}else if(tempscore ==1 ){
			divUpdate("Player won round!")
			scoreUpdate(true)

		}else{
			//compscore += 1;
			
			divUpdate("Computer won round ):")
			scoreUpdate(false)
		}
}

function divUpdate(text){
	const parent = document.querySelector('#container')

	parent.textContent = text


}

function scoreUpdate(isWin){
	const score = document.querySelector('#score')
	if(isWin){
		playerscore += 1
		score.textContent = playerscore + " - " + compscore

	}else{
		compscore += 1
		score.textContent = playerscore + " - " + compscore

	}
	if(playerscore == 5){
		divUpdate("Player WINS!!")
	}
	if(compscore == 5){
		divUpdate("Computer WINS!!")
	}

}
let playerscore = 0;
let compscore = 0;


const rockB = document.querySelector('#rock')
const paperB = document.querySelector('#paper')
const scissorB = document.querySelector('#scissor')

var result = 0
rockB.addEventListener('click',function(e){result = didPlayerWin('rock')})
paperB.addEventListener("click", function(e) {result = didPlayerWin('paper')})
scissorB.addEventListener("click", function(e){result = didPlayerWin('scissor')})

