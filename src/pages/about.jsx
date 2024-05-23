import puppypic from "../content/Puppyholder.jpg";

export default function About() {
    return(
        <>
            <section>
                <h2>Presenting:</h2>
                <h1>Me.</h1>
                <img src={puppypic} alt="" />
            </section>
            <section>
                <article>
                    <p>I am a silly lil guy with silly lil thoughts and silly lil habits.
                        I am 29 years old, and I live in the villa district of the town of morioh.
                    </p>
                </article>
            </section>
            <section>
                <ul className="aboutImages">
                    <img src={puppypic} alt="" />
                    <img src={puppypic} alt="" />
                    <img src={puppypic} alt="" />
                </ul>
            </section>
        </>
    )
}