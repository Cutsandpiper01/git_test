function calculate(num1,num2,operator){
	switch(operator){
		case '+':
			console.log(num1 + num2)
			return parseInt(num1) + parseInt(num2)
			break;
		case "-":
			return num1 - num2
			break;
		case "/":
			return num1 / num2
			break;
		case "*":
			return num1 * num2
			break;
		default:
		console.log('here with '+ operator)
			return operator
	}
}

function checkIfNeedCalc(x){
	if(x == '*' || x == '/' || x == '-' || x == '+'){
		if(!values[0]){
			//console.log('trying to push')
			values.push(tempStore)
		
		}
		values.push(x)
		updateLog(values[0]+""+x)
		tempStore = ""
	}else if(x == '='){
		if(values[0] && values[1] && tempStore != ''){
			values.push(tempStore)
			tempStore = ''
			console.log(values[0],values[1],values[2])
			let result = calculate(values[0],values[2],values[1])
			values = []
			//console.log(values[0],values[1],values[2])
			values.push(result)
			console.log(values[0],values[1],values[2])
			//console.log(result)
			updateLog(result)
		}else{
			console.log("Invalid =")
		}
	}else{
		tempStore = tempStore +""+ x
		updateLog(tempStore)
		//console.log(tempStore)

	}


}

function updateLog(display){
	const screen = document.querySelector('#screen')
	screen.textContent = display

}

function resetCalc(){
	values = []
	tempStore = ''
	updateLog("Result")
}

function runningCalc(){
	const one = document.querySelector('.one')
	one.addEventListener('click',function(e){checkIfNeedCalc(1)})
	const two = document.querySelector('.two')
	two.addEventListener('click',function(e){checkIfNeedCalc(2)})
	const three = document.querySelector('.three')
	three.addEventListener('click',function(e){checkIfNeedCalc(3)})

	const four = document.querySelector('.four')
	four.addEventListener('click',function(e){checkIfNeedCalc(4)})
	const five = document.querySelector('.five')
	five.addEventListener('click',function(e){checkIfNeedCalc(5)})
	const six = document.querySelector('.six')
	six.addEventListener('click',function(e){checkIfNeedCalc(6)})

	const seven = document.querySelector('.seven')
	seven.addEventListener('click',function(e){checkIfNeedCalc(7)})
	const eight = document.querySelector('.eight')
	eight.addEventListener('click',function(e){checkIfNeedCalc(8)})
	const nine = document.querySelector('.nine')
	nine.addEventListener('click',function(e){checkIfNeedCalc(9)})

	const plus = document.querySelector('.plus')
	plus.addEventListener('click',function(e){checkIfNeedCalc("+")})
	const zero = document.querySelector('.zero')
	zero.addEventListener('click',function(e){checkIfNeedCalc(0)})
	const minus = document.querySelector('.minus')
	minus.addEventListener('click',function(e){checkIfNeedCalc('-')})

	const divide = document.querySelector('.divide')
	divide.addEventListener('click',function(e){checkIfNeedCalc('/')})
	const equal = document.querySelector('.equal')
	equal.addEventListener('click',function(e){checkIfNeedCalc('=')})
	const multiply = document.querySelector('.multiply')
	multiply.addEventListener('click',function(e){checkIfNeedCalc('*')})

	const reset = document.querySelector('#reset')
	reset.addEventListener('click',function(e){resetCalc()})

}

let tempStore = '';
let values = [];
runningCalc()



