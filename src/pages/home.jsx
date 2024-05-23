import puppypic from "../content/Puppyholder.jpg";
import { Link } from "react-router-dom";

export default function Home() {
    return(
        <section>
            <h1>I make Games</h1>
            <h2>Wanna find out more?</h2>
            <article className="homeBox">
                <img src={puppypic} alt="" />
                <p>This is my art page</p>
                <Link to="/art">Go there</Link>
            </article>
            <article className="homeBox">
                <img src={puppypic} alt="" />
                <p>This is my about me page</p>
                <Link to="/about">Go there</Link>
            </article>
            <article className="homeBox">
                <img src={puppypic} alt="" />
                <p>This is my writing page</p>
                <Link to="/writing">Go there</Link>
            </article>
            <article className="homeBox">
                <img src={puppypic} alt="" />
                <p>This is my design page</p>
                <Link to="/design">Go there</Link>
            </article>
        </section>
    )
}