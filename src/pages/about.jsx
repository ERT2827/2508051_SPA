import puppypic from "../content/Puppyholder.jpg";
import halfMan from "../content/About-drawing.png"

import NYHA from "../content/portfolio/Third year poster.png"
import kite from "../content/portfolio/Kiteman.jpg"
import party from "../content/portfolio/Fourtown.jpg"

export default function About() {
    return(
        <section className="aboutPage">
            <section className="aboutSplash">
                <img src={halfMan} alt="A drawing that mixes me with a construction skeleton" />
                <h2>Presenting:</h2>
                <h1>Me.</h1>
            </section>
            <section className="aboutBody">
                <article>
                    <p>Hey, I'm Bruce.</p>     
                    <p>I'm 21 years old, and I hail from South Africa. Johannesburg to be exact.</p>  
                    <p>I'm a student of the University of the Witswatersrand, where I've studied digital arts with a focus on this "digital" side of things. I can code, make games, build websites and much more thanks to a flexible mindset mixed with the greatest skill of all: being quick to pick up more skills.</p>  
                    <p>Beyond that, I'm a person with lots of interests and experience. I've done odd jobs since I was 17, and now I'm currently working as a delivery driver when I'm not studying.</p> 
                    <p>In my personal time, I've made a comic, built a game or two, done a whole lot of writing and I also really, really like LEGO. Like an insane amount. </p>      
                    <p>As a worker, I'm reliable and consistent. I chip away at every problem until it's done. In a team, I'm highly flexible and more than willing to listen to instructions. I'd also say I'm a bit of a people person, so I can get along well with my coworkers to keep morale high.</p>
                    <p>Overall, life's good. I'm running around like crazy as my family gets ready to go to Italy (!?!!), and enjoying my new relationship as I get ready to finish up with university and move onto a new stage of my life. One where I at least get paid for all this stuff.</p>
                </article>
                <article>
                    <ul className="aboutImages">
                        <img src={NYHA} alt="" />
                        <img src={kite} alt="" />
                        <img src={party} alt="" />
                    </ul>
                </article>
            </section>
        </section>   
    )
}