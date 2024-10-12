const { Link, NavLink } = ReactRouterDOM

export function AppHeader({ onSetPage }) {
    return (
        <header className="app-header full main-layout">
            <section>
                <h1>🌸Miss Books🌸</h1>
                <nav className="app-nav">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/books" >Books</NavLink>
                </nav>
            </section>
        </header>
    )
}