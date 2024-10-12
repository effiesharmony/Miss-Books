const { useState, useEffect } = React
import { storageService } from "../services/async-storage.service.js"
import { ReviewPreview } from "./ReviewPreview.jsx"

export function ReviewList({ bookId }) {

    const [reviews, setReviews] = useState(null)

    useEffect(() => {
        loadReviews()
    }, [reviews]
    )

    function loadReviews() {
        storageService.query(bookId)
            .then(setReviews)
            .catch(err => {
                console.log('err:', err)
            })
    }

    function onDeleteReview(reviewId) {
        storageService.remove(bookId, reviewId)
    }

    if (!reviews) return <div>Be the first to leave a review!</div>

    return (
        <React.Fragment>
            <h2>Recent Reviews</h2>
            <ul className="review-list">
                {reviews.map(review =>
                    <li key={review.id}>
                        <ReviewPreview review={review} />
                        <section>
                            <button onClick={() => onDeleteReview(review.id)}>Delete</button>
                        </section>
                    </li>
                )}
            </ul>
        </React.Fragment>
    )
}