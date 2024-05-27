import { useState } from "react";
import crabDance from "../content/crab-rave.gif"

// Wireframe imports
import frameHome from "../content/wireframes/Wireframe_home.png";
import frameAbout from "../content/wireframes/Wireframe_me.png";
import frameDesign from "../content/wireframes/Wireframe_design.png";
import frameWriting from "../content/wireframes/Wireframe_writing.png";
import frameArt from "../content/wireframes/Wireframe_art.png";
import frameNavbar from "../content/wireframes/Wireframe_Navbar.png";
import siteMap from "../content/wireframes/Site-map.png";
import Diagonal from "../components/diagonal";


export default function Design() {

    // I used this code to make my crab toggle work: https://gist.github.com/dacre-denny/676fe01ab4d8f8fa764d52201e9f967c
    
    const [crarbStyle, setCrarbStyle] = useState('true');

    const toggleCrab = () => setCrarbStyle(!crarbStyle);

    return(
        <>
            <h1 className="pageHeading">Design</h1>

            <Diagonal/>

            <article id="intent" className="designArticle">
                <h2>Design intentions.</h2>
                <p>My primary goal for making my IM4 website is to make a site that is slick and clean while being fundamentally me. So, that begs the question, what does fundamentally me look like?</p>
                <p>Well, for one, I think it’s minimal but not soulless. I believe understatement is king until it’s time to bring out the big guns, so in line with that my plan is to build my site around a minimal color palette with splashes of brightness in impactful ways. My primary inspiration is <a href="https://intl.nothing.tech/">Nothing Phone</a>, who are themselves drawing from <a href="https://www.apple.com/">Apple</a> but with a more exciting spin. I want to do what they do, where they utilize the strengths of corporate minimalism (accessibility, scalability) but with a sense of freshness built from their unique brand identity. To do that, I plan on relying upon these pillars:</p>
                <ul>
                    <li>A color palette, one which is cohesive, appealing and minimal without becoming boring. I also plan on creating strong associations with color, which will allow me to guide the user by using the visual language I create.</li>
                    <li>Strong visual language. I want this site to be coherent and visible. In the past, I’ve over complicated my layout, so now I plan to keep it as coherent as possible.</li>
                    <li>Deliberate and planned design. I want to create wireframes and design documents like these to properly understand my design, before I even start working on any kind of project.</li>
                    <li>A little bit of <button type="button" onClick={toggleCrab}>excitement</button></li>
                </ul>
            </article>

            <Diagonal/>

            <article className="designArticle">
                <h2>Planning and Wireframes</h2>
                <span className="wireframes"><img src={frameHome} alt="" /><img src={frameAbout} alt="" /><img src={frameDesign} alt="" /></span>
                <span className="wireframes"><img src={frameNavbar} alt="" /><img src={frameWriting} alt="" /><img src={siteMap} alt="" /></span>
                <span className="wireframes"><img src={frameArt} alt="" /></span>
                <p>Creating a planning bible by putting together a collection of wireframes and my intention has been extremely useful in this process. </p>
                <p>The design intention helped me to grasp the feeling I was looking for, which makes it a lot easier to invoke it than it would be if I just started working and then went backwards.</p>
                <p>Once I had the feeling I was looking for using my design intention, I then moved onto constructing wireframes. These were not intended to be the final and complete layouts for each page, but rather served as the template for how I would lay each one out. I'm big on scalability, so being able to make everything in a series of components I can plug into my site to add more content has proved to be a solution that works for me. The wireframes helped me plan those modules, and also gave me a vision to work towards.</p>
                <p>Once all that was done, I then started working on an art piece to subvert the look of the site. As you can see, I'm still not there yet, but I will get there eventually, using asymetric layouts and "ugly" design principals to create something that looks completely different to everything else in the site.</p>
            </article>

            <Diagonal/>

            <article className="designArticle">
                <h2>What's next?</h2>
                <p>Well the biggest next step is the art piece.</p>
                <p>The core of the site, the planning process has helped me crystallize how I plan on making it more than just a glorified blog. My current plan is to do so by subverting the rest of the site, using the sterile nature of it to create something so utterly organic that it shocks the system. That alone should be enough for an art piece, but it then being a diary of personal experiences is the spice I hope to use to take it over the top.</p>
                <p>Beyond that, I just want to refine this site. I don't think this will be my final final portfolio site, I'm planning to build that on a proper single page site I think, so that it's easy to host and maintain. But I do want this site to look nice, because it's the last one I'll do before that big portfolio site, so I definitely need to go all out. </p>
                <p>Some pressing issues include cleaning up the home page, adding thumbnails for the other parts of the site, adding a little more functionalality (such as skip buttons on the writing page or a return to top button) and just generally making sure everything works properly. This site is minimalist, so there shouldn't be too much work involved, but I still want everything to look nice.</p>
                <p>I need to update my style guide as well. Because while my design intention does serve as a good foundation for me, I need to reflect on more elements such as my line based design language, the font used, the colors, all those kinds of things. </p>
                <p>Finally, and this is a big one, I want to get this site running properly on mobile. It sort of works currently, but I think there's still a long way to go before it's properly usable on a small screen device. That'll be the hardest thing to do, but also the most rewarding since it'll let me share my site more widely to friends and family. </p>
                <p>Ultimately this site is a first iteration. It can't be perfect because time doesn't allow it, so I've done as much as I can to make it great, and the rest is now all work for another day.</p>
            </article>

            {!crarbStyle && <>
                <div className="color-overlay" onClick={toggleCrab}></div>
                <img src={crabDance} alt="" className="crabby" onClick={toggleCrab}/>
            </>
            }

        </>
    )
}