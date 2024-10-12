import { OnSale } from "../cmps/OnSale.jsx"

export function BookPreview({ book }) {
 
    let sale = ''
    if (book.listPrice.isOnSale) {
        sale = <OnSale></OnSale>
    }

    return (
        <article className="book-preview">
            <h2>{book.title}</h2>
            <section className="book-img">
                <img src={book.thumbnail} alt="Book Image" />
                {sale}
            </section>
            <p>Price: {book.listPrice.amount}</p>
        </article>
    )
}