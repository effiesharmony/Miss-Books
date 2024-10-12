export function BookPreview({book}) {

    return (
        <article className="book-preview">
            <h2>{book.title}</h2>
            <img src={book.thumbnail} alt="Book Image" />
            <p>Price: {book.listPrice.amount}</p>
        </article>

    )
}