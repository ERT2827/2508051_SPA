import { Link } from "react-router-dom";


export default function Navbar() {
    

    return(
        <nav className="nav-style">
            <Link to="/">BTart</Link>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/art">Art</Link></li>
                <li><Link to="/about">About Me</Link></li>
                <li><Link to="/writing">Writing</Link></li>
                <li><Link to="/design">Design</Link></li>
            </ul>
        </nav>
    )
}