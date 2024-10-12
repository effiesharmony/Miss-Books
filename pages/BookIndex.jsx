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