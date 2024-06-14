import puppypic from "../content/Puppyholder.jpg";
import self from "../content/self-drawing.png"
import { Link } from "react-router-dom";

export default function Home() {
    const goText = "Go ->"
    
    return(
        <section className="homePage"> 
        {/* I'm not hugely enthused about using
        sections for my pages, but I can't really see
        a more semantic way of doing it since
        body is already in use. */}
            <section className="homeSplash">
                <img src={self} alt="A drawing of myself" />
                <h1>I make Websites</h1>
                <h2>Wanna find out more?</h2>
                <span>∇</span>
            </section>
            <article className="homeBox">
                {/* <img src={puppypic} alt="" /> */}
                <section>
                    <p>If you want to see my art, then go here.</p>
                    <Link to="/2508051_SPA/art">{goText}</Link>
                </section>
            </article>
            <article className="homeBox">
                {/* <img src={puppypic} alt="" /> */}
                <section>
                    <p>If you want to know more about me, this is the place</p>
                    <Link to="/2508051_SPA/about">{goText}</Link>
                </section>
            </article>
            <article className="homeBox">
                {/* <img src={puppypic} alt="" /> */}
                <section>
                    <p>Go here to read my academic and planning writing for this project.</p>
                    <Link to="/2508051_SPA/writing">{goText}</Link>
                </section>
            </article>
            <article className="homeBox">
                {/* <img src={puppypic} alt="" /> */}
                <section>
                    <p>Go here to learn about how I designed this site and why I made it the way I did.</p>
                    <Link to="/2508051_SPA/design">{goText}</Link>
                </section>
            </article>
        </section>
    )
}