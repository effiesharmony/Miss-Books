const { useState, useEffect } = React

export function BookFilter({ filterBy, onSetFilter }) {

    const [newFilterBy, setNewFilterBy] = useState({ ...filterBy })

    useEffect(() => {
        onSetFilter(newFilterBy)
    }, [newFilterBy])

    function handleTitleChange(ev) {
        const { value } = ev.target
        setNewFilterBy(prevFilter => ({ ...prevFilter, title: value }))
    }

    function handlePriceChange(ev) {
        const { value } = ev.target
        setNewFilterBy(prevFilter => ({ ...prevFilter, maxPrice: value }))
    }

    const { title, maxPrice } = newFilterBy
    return (
        <section className="book-filter">
            <form>
                <label htmlFor="title">Book title</label>
                <input onChange={handleTitleChange} type="text" value={title} id="title" placeholder="Enter book title here"/>

                <label htmlFor="price">Price</label>
                <input onChange={handlePriceChange} type="number" min="0" value={maxPrice} id="price" placeholder="Max price"/>
            </form>
        </section>
    )

}