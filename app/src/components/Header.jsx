

function Header(){

    return(
        <header className="site-header">
            <nav className="navbar" aria-label="Primary">
                <div className="logo-container"><img src="/logo.jpg" alt="logo" className="logo"/></div>
            
            
            <div className="links-container">
                <ul className="links">
                    <li alt="Home"><a href="#top">Home</a></li>
                    <li alt="Reviews"><a href="#testimonials">Testimonials</a></li>
                    <li alt="Contact"><a href="#contact">Contact</a></li>
                    <li alt="Location"><a href="#location">Location</a></li>
                </ul>
            </div>
            </nav>
        </header>     
    );
}

export default Header
