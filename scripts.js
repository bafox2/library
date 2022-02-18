titleinput = document.querySelector('#title')
authorinput = document.querySelector('#author')
readinput = document.querySelector('#read')
submitbutton = document.querySelector('#submit')
resetbutton = document.querySelector('#reset')
table = document.querySelector('table')


let library = []

var Book = function(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
}


function addBook(title, author, read) {
    let newBook = new Book(title, author, read)
    return newBook
}

submitbutton.addEventListener('click', () => {
    if (titleinput.value && authorinput.value) {
        let new1 = addBook(titleinput.value, authorinput.value, readinput.checked)
        library.push(new1)
        console.log(library)
        createTable()
    }
    console.table(library)
})

resetbutton.addEventListener('click', () => {
    reset()
})

function reset() {
    titleinput.value = ""
    authorinput.value = ""
    readinput.checked = false
}

Book.prototype.changeRead = function() {
    if (this.read == false) {
        this.read = true
    } else {
        this.read = false
    }
};

function deleteEntry(library, title) {
    let entry = findbook(library, title)
    library.splice(entry, entry + 1)
        //this only changes the library, not the webpage itself
}

function findBook(library, title) {
    if (library.length === 0 || library === null) {
        return;
    }
    for (title of library)
        if (book.title === title) {
            return library.indexOf(title);
        }
}

function createTable() {
    library.forEach((book) => {
        let newRow = document.createElement("tr")
        let newTitle = document.createElement("td")
        newTitle.textContent = this.title.value
        let newAuthor = document.createElement("td")
        newAuthor.textContent = this.author.value
        let newRead = document.createElement("td")
        let newButton = document.createElement("button")
        newButton.textContent = this[read]
        newRead.appendChild(newButton)
        newRow.appendChild(newTitle)
        newRow.appendChild(newAuthor)
        newRow.appendChild(newRead)
        table.appendChild(newRow)
    });
}

//currentTarget for the button can be used to navigate the nodse so hat you find the name of the book

//adding a dataset to the button equal to the title could be an inelegant solution

//once we have our thing it's is Book.changeread i think

//how hou


// old working table code 
//         let newRow = document.createElement("tr")
//         let newTitle = document.createElement("td")
//         newTitle.textContent = titleinput.value
//         let newAuthor = document.createElement("td")
//         newAuthor.textContent = authorinput.value
//         let newRead = document.createElement("td")
//         let newButton = document.createElement("button")
//         newButton.textContent = readinput.checked
//       newButton.
//         reset()
//         newRead.appendChild(newButton)
//         newRow.appendChild(newTitle)
//         newRow.appendChild(newAuthor)
//         newRow.appendChild(newRead)
//         table.appendChild(newRow)