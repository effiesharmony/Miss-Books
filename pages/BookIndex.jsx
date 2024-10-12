const { useState, useEffect } = React

import { BookList } from "../cmps/BookList.jsx"
import { bookService } from "../services/book.service.js"
import { BookFilter } from "../cmps/BookFilter.jsx"

export function BookIndex() {

    const [books, setBooks] = useState(null)
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

    function onSetFilter(newFilterBy){
        setFilterBy(prevFilter => ({...prevFilter, ...newFilterBy}))
    }

    if (!books) return <div>Loading books...</div>

    return (
        <section className="book-index">
                 <React.Fragment>
                    <BookFilter onSetFilter={onSetFilter} filterBy={filterBy}/>
                    <BookList books={books}/>
                </React.Fragment>
        </section>
    )
}