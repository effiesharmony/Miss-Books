const { useParams, useNavigate, Link } = ReactRouterDOM
const { useState, useEffect } = React
import { bookService } from "../services/book.service.js"
import { AddReview } from "../cmps/AddReview.jsx"
import { ReviewList } from "../cmps/ReviewList.jsx"

export function BookDetails() {

    const [book, setBook] = useState(null)
    const { bookId } = useParams()
    const navigate = useNavigate()

    function getBook() {
        bookService.get(bookId)
            .then(setBook)
            .catch(err => {
                console.log('Problem getting Book:', err)
            })
    }

    useEffect(() => {
        getBook()
    }, []
    )

    if (!book) return <div>Loading book details...</div>

    function getReadingLevel() {

        if (book.pageCount > 500) return 'Serious reading'
        else if (book.pageCount > 200) return 'Descent reading'
        else return 'Light reading'
    }

    function getBookAge() {
        let currYear = new Date().getFullYear()

        if (currYear - 10 >= book.publishedDate) return ' - Vintage'
        else if (currYear === book.publishedDate) return ' - New'
    }

    function getBookPrice() {
        if (book.listPrice.amount > 150) return 'expensive'
        if (book.listPrice.amount < 20) return 'cheap'
        return ''
    }

    const readingLevel = getReadingLevel()
    const bookAge = getBookAge()
    const bookPrice = getBookPrice()
    console.log(book)
    return (
        <React.Fragment>
            <section className="book-details">
                <button onClick={() => navigate('/books')}>Back to books</button>
                <h1>{book.title}</h1>
                <h3>{book.subtitle}</h3>
                <img src={book.thumbnail} alt="Book Image" />
                <p>Written by {book.authors}</p>
                <p>Published in {book.publishedDate}{bookAge}</p>
                <h3>Description</h3>
                <p>{book.description}</p>
                <p>Pages: {book.pageCount} - {readingLevel}</p>
                <h2 className={`${bookPrice}`}>{book.listPrice.amount} {book.listPrice.currencyCode}</h2>
                <div className="nav-btns">
                    <button onClick={() => window.location.reload()}><Link to={`/book/${book.prevBookId}`}>Previous Book</Link></button>
                    <button onClick={() => window.location.reload()} className="next-btn"><Link to={`/book/${book.nextBookId}`}>Next Book</Link></button>
                </div>

            </section>
            <section className="add-review">
                <AddReview></AddReview>
            </section>
            <section className="reviews">
                <ReviewList bookId={bookId} />
            </section>
        </React.Fragment>
    )
}