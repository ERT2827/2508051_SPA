import { Link } from "react-router-dom";


export default function NavList() {
    return(
        <ul>
                <li><Link to="2508051_SPA/">Home</Link></li>
                <li><Link to="2508051_SPA/about">About Me</Link></li>
                <li><Link to="2508051_SPA/portfolio">Portfolio</Link></li>
                <li><Link to="2508051_SPA/art">Art</Link></li>
                <li><Link to="2508051_SPA/writing">Writing</Link></li>
                <li><Link to="2508051_SPA/design">Design</Link></li>
        </ul>
    )
}