function gridMaker(x,y){
	const maincontainer = document.querySelector("#gridcontainer")
	let rowpercent = 100.0/y
	let columnpercent = 100.0/x
	for (var i = 0; i < x; i++){
		let row = document.createElement('div')
		row.id = "row"
		row.style.cssText = "width: 100%; height: "+rowpercent+"%;"
		maincontainer.appendChild(row)
		for (let j = 0; j < y; j++){
			//console.log(i+"   "+ j)
			let column = document.createElement('div')
			//column.textContent = i+" "+ j
			column.id = "etch"
			//column.style.cssText = 'display: inline;'
			column.style.cssText = "display: inline-block; background-color: #00FFFF; white-space: nowrap; width:"+columnpercent+"%; height: 100%;"
			row.appendChild(column)

		}
	}
	const etchs = document.querySelectorAll("#etch")
	etchs.forEach((etchitem) => {etchitem.addEventListener('mouseenter',function(e){colorChange(etchitem,columnpercent)})})


}

function colorChange(element,columnpercent){
	console.log(element)
	element.style.cssText = "display: inline-block; background-color: #FF7F00; white-space: nowrap; width:"+columnpercent+"%; height: 100%;"

}

function clearBoard(){
	//const maincontainer = document.querySelector("#gridcontainer")
	let toremove = document.querySelectorAll("#row")
	toremove.forEach((divCase) => divCase.parentNode.removeChild(divCase))
	toremove = document.querySelectorAll("#etch")
	toremove.forEach((divCase) => divCase.parentNode.removeChild(divCase))
	promptBoard()

}

function promptBoard(){
	var x = prompt('Enter total board columns: ')
	var y = prompt('Enter total board rows:')
	gridMaker(x,y)
}

const resetB = document.querySelector('#reset')
resetB.addEventListener('click',function(e){clearBoard()})
gridMaker(10,10)