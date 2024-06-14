import { Link } from "react-router-dom";
import NavList from "./navList";


export default function Navbar() {
    

    return(
        <nav className="nav-style">
            <Link to="2508051_SPA/" className="bigTitle"><span>BT</span>art</Link>
            <NavList/>
        </nav>
    )
}