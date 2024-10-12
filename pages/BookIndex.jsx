const { useState, useEffect } = React

import { BookList } from "../cmps/BookList.jsx"
import { bookService } from "../services/book.service.js"
import { BookDetails } from "./BookDetails.jsx"

export function BookIndex() {

    const [books, setBooks] = useState(null)
    const [selectedBookId, setSelectedBookId] = useState(null)

    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        bookService.query()
            .then(setBooks)
            .catch(err => {
                console.log('err:', err)
            })
    }

    function onSelectBookId(bookId) {
        setSelectedBookId(bookId)
    }

    if (!books) return <div>Loading books...</div>

    return (
        <section className="book-index">
            {!selectedBookId
                ? <BookList books={books} onSelectBookId={onSelectBookId}/>
                : <BookDetails bookId={selectedBookId} onSelectBookId={onSelectBookId}/>
            }
        </section>
    )
}

// import { BookFilter } from "../cmps/BookFilter.jsx"

// const [selectedBookId, setSelectedBookId] = useState(null)
// const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

// function onRemoveBook(bookId) {
//     bookService.remove(bookId)
//         .then(() => {
//             setBooks(books =>
//                 books.filter(book => book.id !== bookId)
//             )
//         })
//         .catch(err => {
//             console.log('Problems removing book:', err)
//         })
// }

// function onSetFilter(filterByToEdit) {
//     setFilterBy(prevFilter => ({...prevFilter, ...filterByToEdit}))
// }

// function onSelectBookId(bookId) {
//     setSelectedBookId(bookId)
// }

// return (
//     <section className="book-index">
//         {!selectedBookId
//             ? <React.Fragment>
//                 <BookFilter onSetFilter={onSetFilter} filterBy={filterBy} />
//                 <BookList onSelectBookId={onSelectBookId} onRemoveBook={onRemoveBook} books={books} />
//             </React.Fragment>
//             : <BookDetails onBack={() => setSelectedBookId(null)} bookId={selectedBookId} />
//         }
//     </section>
// )