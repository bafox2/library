titleinput = document.querySelector('#title')
authorinput = document.querySelector('#author')
readinput = document.querySelector('#read')
submitbutton = document.querySelector('#submit')
resetbutton = document.querySelector('#reset')
tbody = document.querySelector('tbody')
closebuttons = document.querySelectorAll('.smite')


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
        createTable()
        reset()
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

Book.prototype.changeRead = function() {
    if (this.read == false) {
        this.read = true
        return "Read"
    } else {
        this.read = false
        return "Unread"
    }
};

function deleteEntry(library, title) {
    let entry = findBook(library, title)
    console.log(entry)
    library.splice(entry, entry + 1)
    createTable()
}

function changeEntry(library, title) {
    let entry = findBook(library, title)

    if (library[entry].read == false) {
        library[entry].read = true
        return true
    } else if (library[entry].read == true) {
        library[entry].read = false
        return false
    }
    console.log(library[entry].read)
}

function findBook(library, nameofbook) {
    if (library.length === 0 || library === null) {
        return;
    }
    for (books of library)
        if (books.title == nameofbook) {

            return library.indexOf(books);
        }
}

function createTable() {
    tbody.innerHTML = ''
    library.forEach((book) => {
        let newRow = document.createElement("tr")
        let newTitle = document.createElement("td")
        newTitle.textContent = `${book.title}`
        let newAuthor = document.createElement("td")
        newAuthor.textContent = `${book.author}`
        let newRead = document.createElement("td")
        let newButton = document.createElement("button")
        newButton.setAttribute('book', `${book.title}`)

        newButton.className = 'toggle'
        let newSmite = document.createElement("td")
        let newSmiteButton = document.createElement("button")
        newSmiteButton.setAttribute('book', `${book.title}`)
        newSmiteButton.className = 'readtoggle'
        newSmiteButton.textContent = `X`
        newSmiteButton.className = 'smite'
        newButton.innerHTML = (book.read == true) ? "Read" : "Unread"
        console.log(book.read)
        newSmite.appendChild(newSmiteButton)
        newRead.appendChild(newButton)
        newRow.appendChild(newTitle)
        newRow.appendChild(newAuthor)
        newRow.appendChild(newRead)
        newRow.appendChild(newSmiteButton)
        tbody.appendChild(newRow)
    });
    closebuttons = document.querySelectorAll('.smite')
    closebuttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            deleteEntry(library, button.getAttribute("book"))
        })
    })

    togglebuttons = document.querySelectorAll('.toggle')
    togglebuttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            let test = changeEntry(library, button.getAttribute("book"))
            console.log(e.currentTarget)

            if (test === true) {
                e.currentTarget.innerHTML = "Read"
            } else if (test === false) {
                e.currentTarget.innerHTML = "Unread"
            }
        })
    })
}