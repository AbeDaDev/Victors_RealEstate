

function Header(){

    return(
        <header>

            <navbar className="navbar">
                <div className="logo-container"><img src="public/logo.jpg" alt="logo" className="logo"/></div>
            
            
            <div className="links-container">
                <ul className="links">
                    <li alt="Home"><a href="">Home</a></li>
                    <li alt="Reviews"><a href="">Testimonials</a></li>
                    <li alt="Contact"><a href="">Contact</a></li>
                    <li alt="Book Appointment"><a href="">Appointments</a></li>
                </ul>
            </div>
            </navbar>

        </header>     
    );
}

export default Header