console.log("Hello World")

const gameboard = (() => {
	//todo decide how empty should look. Goal is to only ever have this status in here
	var gamestate = [['5','5','5'],
					 ['5','5','5'],
					 ['5','5','5']];
	//console.log(a + "    and "+ b)

	//This will be a cool function to change game state. Slick!
	const coordUpdate = (XO,xcord,ycord) => 

	//No clue how to do this as of now. How to make each div square??? Do I want to rerender each time or update?
	const renderBoard = () => {




	}



	return{renderBoard}
})();

const Player = (name) => {
	var score = 0;
	const getName = () => name;
	const getScore = () => score;
	const increaseScore = () => score += 1;

	return{getName,getScore, increaseScore}
}

console.log(gameboard)
const player1 = Player('Kalen')
//player1.getName()
console.log(player1.getName())
player1.increaseScore()
console.log(player1.getScore())
