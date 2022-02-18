//todo
//fix constructor
//figure out button thing

titleinput = document.querySelector('#title')
authorinput = document.querySelector('#author')
readinput = document.querySelector('#read')
submitbutton = document.querySelector('#submit')
resetbutton = document.querySelector('#reset')
table = document.querySelector('table')


let library = []

function Book() {
    this.title = title;
    this.author = author;
    this.read = read;
}

function addBook(title, author, read) {
    let newBook = new Book(title, author, readinput.checked)
}

submitbutton.addEventListener('click', () => {
    if (titleinput.value && authorinput.value) {
        const BookAdd = addBook(titleinput.value, authorinput.value, readinput.checked)
        library.push(this.Book)
        console.log(library)
        let newRow = document.createElement("tr")
        let newTitle = document.createElement("td")
        newTitle.textContent = titleinput.value
        let newAuthor = document.createElement("td")
        newAuthor.textContent = authorinput.value
        let newRead = document.createElement("td")
        let newButton = document.createElement("button")
        newButton.textContent = readinput.checked
        reset()
        newRead.appendChild(newButton)
        newRow.appendChild(newTitle)
        newRow.appendChild(newAuthor)
        newRow.appendChild(newRead)
        table.appendChild(newRow)
    }
})

resetbutton.addEventListener('click', () => {
    reset()
})

function reset() {
    titleinput.value = ""
    authorinput.value = ""
    readinput.checked = false
}


// let newRow = document.createElement("tr")
// let newTitle = document.createElement("td")
// newTitle.textContent = titleinput.value
// let newAuthor = document.createElement("td")
// newAuthor.textContent = authorinput.value
// let newRead = document.createElement("td")
// let newButton = document.createElement("button")
// newButton.textContent = readinput.checked
// reset()
// newRead.appendChild(newButton)
// newRow.appendChild(newTitle)
// newRow.appendChild(newAuthor)
// newRow.appendChild(newRead)
// table.appendChild(newRow)