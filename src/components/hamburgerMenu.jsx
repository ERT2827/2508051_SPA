import { useState } from "react";
import { Link } from "react-router-dom";
import "../specialCSS/hamMenu.css";

export default function HamburgerMenu(){
    // I used this video as the basis for my menu: https://www.youtube.com/watch?v=gAGcjlJyKk0

    const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
    const [menuClass, setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const UpdateMenu = () => {
        if(!isMenuClicked){
            setBurgerClass("burger-bar clicked");
            setMenuClass("menu visible");
            setIsMenuClicked(true);
        }else{
            setBurgerClass("burger-bar unclicked");
            setMenuClass("menu hidden");
            setIsMenuClicked(false);
        }
    }

    return(
        <nav>
            <section className="topBar">
                <div className="burger" onClick={UpdateMenu}>
                    <div className={`coral ${burgerClass}`}></div>
                    <div className={`coral ${burgerClass}`}></div>
                    <div className={`coral ${burgerClass}`}></div>
                </div>

            </section>

            <section className={menuClass}>
            <ul>
                <li><Link to="2508051_SPA/">Home</Link></li>
                <li><Link to="2508051_SPA/art">Art</Link></li>
                <li><Link to="2508051_SPA/about">About Me</Link></li>
                <li><Link to="2508051_SPA/portfolio">Portfolio</Link></li>
                <li><Link to="2508051_SPA/writing">Writing</Link></li>
                <li><Link to="2508051_SPA/design">Design</Link></li>
            </ul>
            </section>
        </nav>
    )
}