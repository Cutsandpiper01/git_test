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
	let read = prompt("read?")
	let temp = new Book(name,author,pages,read)
	getCurrentShelf().books.push(temp)
	displayBooksOnShelf()

}

function makeNewBookDiv(book){
	const shelfdiv = document.querySelector('#maincontainer')
	let bookRecord = document.createElement('div')
	bookRecord.id = "bookItem"
	bookRecord.textContent = "Book name: " + book.name + " Author: " + book.author 
	//+ " "+ book.read +" "+ book.pages
	bookRecord.addEventListener('mouseenter',function(e){bookDetailsDo(bookRecord)})
	bookRecord.addEventListener('mouseleave',function(e){bookDetailsUndo(bookRecord)})
	shelfdiv.appendChild(bookRecord)

}

//IDK if I like this I should probably do a menu rather than a hover for details but ya know
function bookDetailsDo(bookID){
	bookID.style = "scale: 150%;"

}

function bookDetailsUndo(bookID){
	bookID.style = "scale: 100%;"

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


let shelves = []
const HOL = new Book("House Of Leaves", "Mark", 300, true)

const stranger = new Book("The Stranger", "Camus", 120, false)

//remember to add to shelves list
let unit1 = new Shelf('Unit1')
let unit2 = new Shelf('Unit2')
shelves.push(unit1)
shelves.push(unit2)
//unit1.books.push(H
let currentShelf = unit1
unit1.books.push(HOL)
unit2.books.push(stranger)

//console.log(HOL.info())
//console.log(HOL.name)

displayBooksOnShelf(unit1)
addBookListenter()
addShelfChangeListenter()
//addBookToLibrary()
//console.log(shelf[0].info())