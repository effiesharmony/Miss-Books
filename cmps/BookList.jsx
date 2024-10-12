import { BookPreview } from "./BookPreview.jsx";

export function BookList({books, onRemoveBook, onSelectBookId}) {

    return (
        <ul className="book-list">
            {books.map(book =>
                <li key={book.id}>
                    <BookPreview book={book} />
                    <section>
                       
                    </section>
                </li>
            )}
        </ul>
    )
}

