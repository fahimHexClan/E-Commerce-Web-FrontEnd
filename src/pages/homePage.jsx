import{ Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="home-container">
            <nav className="navbar">
                <h1 className="logo">E-Commerce</h1>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </nav>

            <header className="hero">
                <h2>Welcome to Our Store</h2>
                <p>Discover the latest trends and shop your favorite items!</p>
                <button className="shop-button" onClick={() => alert('Button Clicked!')}>Get Started</button>
            </header>
            <Link to="/login">LogIn</Link>
        </div>
    );
}
