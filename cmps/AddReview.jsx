const { useParams } = ReactRouterDOM
const { useState, useEffect } = React
import { bookService } from "../services/book.service.js"

export function AddReview() {

    const { bookId } = useParams()

    function onSaveReview(ev) {
        ev.preventDefault()
        const { fullName, rating, readAt, review } = ev.target.elements
        const fullReview = {
            fullName: fullName.value,
            rating: rating.value,
            redAt: readAt.value,
            review: review.value
        }

        bookService.addReview(bookId, fullReview)
        fullName.value = ''
        rating.value = 5
        readAt.value = null
        review.value = ''
    }

    return (
        <form onSubmit={onSaveReview} className="add-review">
            <h2>Rate this book!</h2>
            <label htmlFor="fullName">Your Name </label>
            <input type="text" placeholder="Full Name" id="fullName" />
            <br />
            <label htmlFor="rating">Rating(0-5) </label>
            <input type="range" min="0" max="5" id="rating" />
            <br />
            <label htmlFor="readAt">I finished the book at </label>
            <input type="date" id="readAt" />
            <br />
            <label htmlFor="review">Your opinion </label>
            <br />
            <textarea id="review" placeholder="I thought this book was..."></textarea>
            <br />
            <button type="submit">Send Review</button>
        </form>
    )
}