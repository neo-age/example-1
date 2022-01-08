import './Navbar.css'
import navbarLogo from '../Navbar/logo.svg';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-wrapper">
                <div className="navleft">
                <Link to="/"><img src={navbarLogo} alt="" className="navbar-logo" /></Link>
                </div>
                <div className="navmiddle">
                    <ul className="navmenulink">
                        <li className="navmenuitem"><NavLink activeClassName="active" to="/">Home</NavLink></li>
                        <li className="navmenuitem"><NavLink activeClassName="active" to="/Moreinfo">About Us</NavLink></li>
                        <li className="navmenuitem"><NavLink activeClassName="active" to="/Moreinfo">Contact Us</NavLink></li>
                        <li className="navmenuitem"><NavLink activeClassName="active" to="/Moreinfo">careers</NavLink></li>
                    </ul>
                </div>
                <div className="navright">
                    <button className="signin"><Link to="/Moreinfo">Sign In</Link></button>
                    <button className="signup"><Link to="/Moreinfo">Sign Up</Link></button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
