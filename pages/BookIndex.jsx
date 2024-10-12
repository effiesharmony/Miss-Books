const { useState, useEffect } = React

import { BookList } from "../cmps/BookList.jsx"
import { bookService } from "../services/book.service.js"

export function BookIndex() {

    const [books, setBooks] = useState(null)

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

    if (!books) return <div>Loading...</div>

    return (
        <section className="books">
            <BookList books={books} />
        </section>
    )
}