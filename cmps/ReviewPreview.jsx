export function ReviewPreview({review}) {
    return (
        <article className="review-preview">
            <h3 className="reviewer-name">{review.fullName}</h3>
            <p className="rating">{'⭐'.repeat(+review.rating)}</p>
            <p className="opinion">{review.review}</p>
        </article>
    )
}