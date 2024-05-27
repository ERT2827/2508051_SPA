import puppypic from "../content/Puppyholder.jpg";
import self from "../content/self-drawing.png"
import { Link } from "react-router-dom";

export default function Home() {
    return(
        <section className="homePage">
            <article className="homeSplash">
                <img src={self} alt="A drawing of myself" />
                <h1>I make Websites</h1>
                <h2>Wanna find out more?</h2>
            </article>
            <article className="homeBox">
                {/* <img src={puppypic} alt="" /> */}
                <section>
                    <p>Go here to look at my art</p>
                    <nav><Link to="/2508051_SPA/art">Go there</Link></nav>
                </section>
            </article>
            <article className="homeBox">
                {/* <img src={puppypic} alt="" /> */}
                <section>
                    <p>If you want to know more about me, this is the place</p>
                    <Link to="/2508051_SPA/about">Go there</Link>
                </section>
            </article>
            <article className="homeBox">
                {/* <img src={puppypic} alt="" /> */}
                <section>
                    <p>Go here to read my academic and planning writing for this project.</p>
                    <Link to="/2508051_SPA/writing">Go there</Link>
                </section>
            </article>
            <article className="homeBox">
                {/* <img src={puppypic} alt="" /> */}
                <section>
                    <p>Go here to learn about how I designed this site and why I made it the way I did.</p>
                    <Link to="/2508051_SPA/design">Go there</Link>
                </section>
            </article>
        </section>
    )
}