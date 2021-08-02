function Book(name, author, pages,read){
	this.author = author
	this.name = name
	this.pages = pages
	this.read = read

	this.info = function(){
		information = this.author + " wrote " + this.name+ ". It is  "+ this.pages + " pages long. Read status: " + this.read
		return information
	}

}

function Shelf(name){
	this.name = name
	this.books = []


}


//will need to call for user input, then pass that to BOOK
function addBookToLibrary(){
	let name = prompt("name")
	let author = prompt("author")
	let pages = prompt("pages")
	let read
	let readunedit = prompt("read: Must be true or false")
	if(readunedit.toLowerCase() == 'true'){
		//console.log("here")
		read = true
	}else{
		read = false
	}
	//console.log(read)
	let temp = new Book(name,author,pages,read)
	getCurrentShelf().books.push(temp)
	saveToLocalStorage()
	displayBooksOnShelf()

}

function makeNewBookDiv(book){
	const shelfdiv = document.querySelector('#maincontainer')
	let bookRecord = document.createElement('div')
	bookRecord.id = "bookItem"
	bookRecord.textContent = "Book name: " + book.name + " Author: " + book.author 
	//+ " "+ book.read +" "+ book.pages
	bookRecord.addEventListener('mouseenter',function(e){bookDetailsDo(bookRecord, book)})
	bookRecord.addEventListener('mouseleave',function(e){bookDetailsUndo(bookRecord, book)})
	shelfdiv.appendChild(bookRecord)

}

//IDK if I like this I should probably do a menu rather than a hover for details but ya know
function bookDetailsDo(bookID, book){
	bookID.style = "scale: 150%; z-index: 3; background: white; white-space: pre; font-size: 9px;"
	bookID.textContent = "Book name: \r\n" + book.name + "\r\n\n"
	bookID.textContent += "Author: \r\n" + book.author + "\r\n\n"
	bookID.textContent += "Book pages: \r\n" + book.pages + "\r\n\n Was book read? \r\n " 
	let labelTF = document.createElement('label')
	let inputTF = document.createElement('input')

	let labeldel = document.createElement('label')
	let inputdel = document.createElement('input')

	labeldel.id = "labeldel"
	inputdel.id = "inputdel"
	//let spanTF = document.createElement('span')


	labeldel.style += " background: black; right: 0px; top: 0px;"
	inputdel.style += " background: black;"
	labelTF.style += " background: black;"
	inputTF.style += " background: black;"
	//spanTF.style += " background: black;"


	inputdel.type = 'checkbox'
	inputTF.type = 'checkbox'
	//spanTF.classList.add('slider')
	labeldel.classList.add('switch')
	labelTF.classList.add('switch')
	//inputTF.style += 'value: yes;'
	

	if(book.read == true){
		inputTF.checked = 'checked'
	}


	bookID.appendChild(labelTF)
	labelTF.appendChild(inputTF)

	bookID.appendChild(labeldel)
	labeldel.appendChild(inputdel)
	//inputTF.appendChild(spanTF)

	//console.log(inputTF.checked)
	//console.log(inputTF.value)

}

function bookDetailsUndo(bookID, book){
	//bad code but it works, should add uniquness to check
	lableTF = bookID.querySelector('label')
	inputTF = lableTF.querySelector('input')


	labeldel = bookID.querySelector('#labeldel')
	inputdel = labeldel.querySelector('#inputdel')


	if(inputdel.checked){
		//console.log("will DEL")
		deleteBook(bookID, book)
	}else{
		readvalue = inputTF.checked
		//console.log(readvalue)
		book.read = readvalue
	}


	bookID.style = "scale: 100%;"
	bookID.textContent = "Book name: " + book.name + " Author: " + book.author 
	//bookID.parentNode.removeChild()

}

//the way I am doing this is bad and slow and will delete books with the same name. Should have used UUIDS, it is fast tho at render. Heck it
function deleteBook(bookID, book){
	for(let i = 0; i < currentShelf.books.length; i++){
		if(currentShelf.books[i].name = book.name){
			currentShelf.books.splice(i,1)
			break;
		}

	}
	bookID.parentNode.removeChild(bookID)

}

function areBookNamesSame(stored, check){
	if(stored == check){


	}
}

function displayBooksOnShelf(){
	clearShelf()
	currentShelf.books.forEach(book => makeNewBookDiv(book))

}

function getCurrentShelf(){
	return currentShelf
}


function clearShelf(){
	let toremove = document.querySelectorAll("#bookItem")
	toremove.forEach((divCase) => divCase.parentNode.removeChild(divCase))

}

function addBookListenter() {
	const addBook = document.querySelector('#addbook')
	addBook.addEventListener('click',function(e){addBookToLibrary()})
}

function addShelfChangeListenter() {
	const changeshelf = document.querySelector('#changeshelf')
	changeshelf.addEventListener('click',function(e){changeShelfMenu()})
}

function changeShelfMenu(){
	const body = document.querySelector('#body')
	let menu = document.createElement('div')
	menu.id = 'selection'
	body.appendChild(menu)

	shelves.forEach(shelf => createShelfButton(menu,shelf) )


}

function createShelfButton(menu, shelf){
	let shelfButton = document.createElement('button')
	shelfButton.textContent = shelf.name
	shelfButton.id = 'shelfitem'
	shelfButton.addEventListener('click',function(e){createShelfButtonHelper(shelf)})
	menu.appendChild(shelfButton)

}

function createShelfButtonHelper(shelf){
	currentShelf = shelf
	deleteMenus()
	displayBooksOnShelf()

}

function deleteMenus(){
	let shelfitems = document.querySelectorAll("#shelfitem")
	shelfitems.forEach((divCase) => divCase.parentNode.removeChild(divCase))
	let selectionmenu = document.querySelectorAll("#selection")
	selectionmenu.forEach((divCase) => divCase.parentNode.removeChild(divCase))
	


}

function isStorageAvailable(type){
	var storage
	try {
		storage = window[type]
		var x = '__storage_test__'
		storage.setItem(x,x)
		storage.removeItem(x)
		return true

	}catch(e){
		console.log(e)
		return false
	}

}

function saveToLocalStorage(){
	clearLocalStorage()
	if(isStorageAvailable('localStorage')){
		localStorage.setItem("shelves", JSON.stringify(shelves))
		//shelves.forEach(shelf => saveToLocalStrorageHelper(shelf))
		

	}

}


function loadFromLocalStorage(){
	var shelvesStored = JSON.parse(localStorage.shelves)
	shelvesStored.forEach(shelfstored => loadFromLocalStorageHelperShelves(shelfstored))
	console.log(shelvesStored[1])
	console.log(shelvesStored[0].name)
}

function loadFromLocalStorageHelperShelves(shelfstored){
	let temp = new Shelf(shelfstored.name)
	shelfstored.books.forEach(bookstored => loadFromLocalStorageHelperBooks(bookstored,temp))
	shelves.push(temp)
}

function loadFromLocalStorageHelperBooks(bookstored,shelftemp){
	let temp = new Book(bookstored.name, bookstored.author,bookstored.pages,bookstored.read)
	shelftemp.books.push(temp)
}

function clearLocalStorage(){
	localStorage.clear()
}


let shelves = []

//const HOL = new Book("House Of Leaves", "Mark", 300, true)
//const stranger = new Book("The Stranger", "Camus", 120, false)

//remember to add to shelves list
/*let unit1 = new Shelf('Unit1')
let unit2 = new Shelf('Unit2')

shelves.push(unit1)
shelves.push(unit2)
//unit1.books.push(H

let currentShelf = unit1
unit1.books.push(HOL)
unit2.books.push(stranger)

//console.log(HOL.info())
//console.log(HOL.name)
*/

loadFromLocalStorage()
let currentShelf = shelves[0]
displayBooksOnShelf(shelves[0])
addBookListenter()
addShelfChangeListenter()

//addBookToLibrary()
//console.log(shelf[0].info())