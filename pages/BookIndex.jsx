const { useState, useEffect } = React

import { BookList } from "../cmps/BookList.jsx"
import { bookService } from "../services/book.service.js"
import { BookDetails } from "./BookDetails.jsx"
import { BookFilter } from "../cmps/BookFilter.jsx"

export function BookIndex() {

    const [books, setBooks] = useState(null)
    const [selectedBookId, setSelectedBookId] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        bookService.query(filterBy)
            .then(setBooks)
            .catch(err => {
                console.log('err:', err)
            })
    }

    function onSelectBookId(bookId) {
        setSelectedBookId(bookId)
    }

    function onSetFilter(newFilterBy){
        setFilterBy(prevFilter => ({...prevFilter, ...newFilterBy}))
    }

    if (!books) return <div>Loading books...</div>

    return (
        <section className="book-index">
            {!selectedBookId
                ? <React.Fragment>
                    <BookFilter onSetFilter={onSetFilter} filterBy={filterBy}/>
                    <BookList books={books} onSelectBookId={onSelectBookId}/>
                </React.Fragment>
                : <BookDetails bookId={selectedBookId} onSelectBookId={onSelectBookId}/>
            }
        </section>
    )
}


// const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

// function onSetFilter(filterByToEdit) {
//     setFilterBy(prevFilter => ({...prevFilter, ...filterByToEdit}))
// }
