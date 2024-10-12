const { useState, useEffect } = React
import { bookService } from "../services/book.service.js"

export function BookDetails({ bookId, onSelectBookId }) {

    const [book, setBook] = useState(null)

    function getBook() {
        bookService.get(bookId)
            .then(setBook)
    }

    useEffect(() => {
        getBook()
    }, []
    )

    if (!book) return <div>Loading book details...</div>

    return (
        <section className="book-details">
            <h1>{book.title}</h1>
            <h3>{book.subtitle}</h3>
            <img src={book.thumbnail} alt="Book Image" />
            <p>Written by {book.authors}</p>
            <p>Published in {book.publishedDate}</p>
            <h3>Description</h3>
            <p>{book.description}</p>
            <p>Pages: {book.pageCount}</p>
            <h2>{book.listPrice.amount} {book.listPrice.currencyCode}</h2>
            <button onClick={() => onSelectBookId(null)}>Back</button>
        </section>
    )
}