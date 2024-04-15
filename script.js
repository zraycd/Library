const myLibrary = []
let i = 1
function addBookToLibrary(book) {
    myLibrary.push(book)
}
function displayLibrary() {
    const bookContainer = document.querySelector('.container')
    const newDiv = [
        document.createElement('div'),
        document.createElement('div'),
        document.createElement('div')
    ]
    const newBtn = [
        document.createElement('button'),
        document.createElement('button'),
        document.createElement('button')
    ]
    let newBook = document.createElement('div')
    newBook.classList.add('book')
    bookContainer.appendChild(newBook)
    myLibrary.forEach(book => {
        let bookTitle = book.title
        let bookAuthor = book.author
        let bookPageCount = book.pageCount
        let currentBook = document.querySelectorAll('.book')[i]

        newDiv[0].innerText = bookTitle
        newDiv[1].innerText = bookAuthor
        newDiv[2].innerText = bookPageCount

        newDiv[0].classList.add('title')
        newDiv[1].classList.add('author')
        newDiv[2].classList.add('pageCountt')

        newBtn[0].classList.add('readButton', 'read')
        newBtn[1].classList.add('readButton', 'unread')
        newBtn[2].classList.add('readButton', 'rm')

        newBtn[0].innerText = 'Read'
        newBtn[1].innerText = 'Unread'
        newBtn[2].innerText = 'Remove'

        currentBook.appendChild(newDiv[0])
        currentBook.appendChild(newDiv[1])
        currentBook.appendChild(newDiv[2])    

        currentBook.appendChild(newBtn[0])
        currentBook.appendChild(newBtn[1])
        currentBook.appendChild(newBtn[2])

        if (book.readStatus === 'unread') {
            newBtn[0].style.display = 'none'
            newBtn[1].style.display = 'block'
        } else {
            newBtn[0].style.display = 'block'
            newBtn[1].style.display = 'none'
        }
    })
}
class Book {
    constructor(title, author, pageCount, readStatus) {
        this.title = title.toLowerCase()
        this.author = author.toLowerCase()
        this.pageCount = pageCount
        this.readStatus = readStatus.toLowerCase()
    }
}

document.querySelector('#addBtn').addEventListener('click', (event) => {
    event.target.style.display = 'none';
    document.querySelector('.form').style.display = 'flex'
})

document.querySelector('.submit').addEventListener('click', () => {
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const pageCount = document.querySelector('#pageCount').value
    let readStatus

    if (document.querySelector('#readStatus').checked) {
        readStatus = 'read'
    } else {
        readStatus = 'unread'
    }
    let addBook = new Book(title, author, pageCount, readStatus)

    addBookToLibrary(addBook)
    displayLibrary()
    i++

    document.querySelector('#addBtn').style.display = 'block';
    document.querySelector('.form').style.display = 'none'
})