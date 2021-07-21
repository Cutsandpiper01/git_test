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


//will need to call for user input, then pass that to BOOK
function addBookToLibrary(){
	let name = prompt("name")
	let author = prompt("author")
	let pages = prompt("pages")
	let read = prompt("read?")
	let temp = new Book(name,author,pages,read)
	shelf.push(temp)

}

function makeNewBookDiv(book){
	const shelfdiv = document.querySelector('#maincontainer')
	let bookRecord = document.createElement('div')
	bookRecord.id = "bookItem"
	bookRecord.textContent = "Book name: " + book.name + " Book Author: " + book.author + " "+ book.read +" "+ book.pages
	shelfdiv.appendChild(bookRecord)

}

function displayBooksOnShelf(){
	shelf.forEach(book => makeNewBookDiv(book))


}

let shelf = []
const HOL = new Book("House Of Leaves", "Mark", 300, true)
shelf.push(HOL)
console.log(HOL.info())
console.log(HOL.name)
displayBooksOnShelf()
//addBookToLibrary()
//console.log(shelf[0].info())