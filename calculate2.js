function calculate(num1,num2,operator){
	num1 = parseInt(num1)
	num2 = parseInt(num2)
	switch(operator){
		case '+':
			return num1 + num2
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
		console.log('here with '+ operator + ' resulting in an error')
			return operator
	}
}


//gotta make some wierd nested if statements here due to how I set up the final else to be digit to avoid learning if there isdigit()
function checkIfNeedCalc(x){
	if(x == '*' || x == '/' || x == '-' || x == '+'){
		if(!values[0] && tempStore != ""){
			values.push(tempStore)
			values.push(x)
			updateLog(values[0]+" "+x)
			tempStore = ""
		}else{
			updateLog("InvalidInput - Reset")
		}
		
	}else if(x == '='){
		if(values[0] && values[1] && tempStore != ''){
			values.push(tempStore)
			tempStore = ''
			console.log(values[0],values[1],values[2])
			let result = calculate(values[0],values[2],values[1])
			values = []
			values.push(result)
			console.log(values[0],values[1],values[2])
			updateLog(result)
		}else{
			updateLog("InvalidInput - Reset")
		}
	}else{
		tempStore = tempStore +""+ x
		if(values[0]){
			console.log("here")
			updateLog(values[0]+ " " + values[1]+ " " + tempStore)

		}else{
			updateLog(tempStore)
		}
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

function buttonBuilder(ref){
	const maincontainer = document.querySelector("#gridcontainer")
	const button = document.createElement("button")
	button.textContent = ref
	button.id = ref
	

	maincontainer.appendChild(button)

	button.addEventListener('click',function(e){checkIfNeedCalc(button.id)})

}

function runningCalc(){

	calcValues.forEach(item => buttonBuilder(item))

	const reset = document.querySelector('#reset')
	reset.addEventListener('click',function(e){resetCalc()})
}

//Logan doesn't like copy pasting loads of statements to build buttons, so now we use array based building
let calcValues = ['1','2','3','4','5','6','7','8','9','+','0','-','/','=','*']
let tempStore = '';
let values = [];
runningCalc()



