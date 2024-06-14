import { useState } from "react";
import crabDance from "../content/crab-rave.gif";

import topper from "../content/design-topper.png"

//Other Imports
import colPal from "../content/wireframes/Color-palette.png";
import siteMap from "../content/wireframes/Site-map.png"

export default function Design() {

    // I used this code to make my crab toggle work: https://gist.github.com/dacre-denny/676fe01ab4d8f8fa764d52201e9f967c
    
    const [crarbStyle, setCrarbStyle] = useState('true'); //The useState for the crab toggle

    const toggleCrab = () => setCrarbStyle(!crarbStyle); //The function for toggling the crab

    return(
        <section className="designPage">
            <section className="pageHeading">
                <img src={topper} alt="background image" />
                <h1>Design</h1>
            </section>
            
            <img src={siteMap} alt="The sitemap for the site" className="sectionImage"/>
            
            <h2 className="sectionHeading">Initial design</h2>

            <section className="designSection">
                <article id="intent" className="designArticle">
                    <h3>Design intentions.</h3>
                    <p>My primary goal for making my IM4 website is to make a site that is slick and clean while being fundamentally me. So, that begs the question, what does fundamentally me look like?</p>
                    <p>Well, for one, I think it’s minimal but not soulless. I believe understatement is king until it’s time to bring out the big guns, so in line with that my plan is to build my site around a minimal color palette with splashes of brightness in impactful ways. My primary inspiration is <a href="https://intl.nothing.tech/">Nothing Phone</a>, who are themselves drawing from <a href="https://www.apple.com/">Apple</a> but with a more exciting spin. I want to do what they do, where they utilize the strengths of corporate minimalism (accessibility, scalability) but with a sense of freshness built from their unique brand identity. To do that, I plan on relying upon these pillars:</p>
                    <ul>
                        <li>A color palette, one which is cohesive, appealing and minimal without becoming boring. I also plan on creating strong associations with color, which will allow me to guide the user by using the visual language I create.</li>
                        <li>Strong visual language. I want this site to be coherent and visible. In the past, I’ve over complicated my layout, so now I plan to keep it as coherent as possible.</li>
                        <li>Deliberate and planned design. I want to create wireframes and design documents like these to properly understand my design, before I even start working on any kind of project.</li>
                        <li>A little bit of <button type="button" onClick={toggleCrab}>excitement</button></li>
                    </ul>
                </article>

                <article className="designArticle">
                    <h3>Planning and Wireframes</h3>
                    <span className="wireframes"><img src="design/Old_Wireframe_home.png" alt="Wireframe for the home page" /><img src="design/Old_Wireframe_me.png" alt="Wireframe for the about section" /><img src="design/Old_Wireframe_design.png" alt="Wireframe for the design section" /><img src="design/Old_Wireframe_writing.png" alt="Wireframe for the writing section" /></span>
                    <span className="wireframes"><img src="design/Old_Wireframe_Navbar.png" alt="Wireframe for the navbar" /><img src="design/Old_Wireframe_art.png" alt="Early wireframe for the art piece" /><img src={siteMap} alt="Sitemap diagram" /></span>
                    <p>Creating a planning bible by putting together a collection of wireframes and my intention has been extremely useful in this process. </p>
                    <p>The design intention helped me to grasp the feeling I was looking for, which makes it a lot easier to invoke it than it would be if I just started working and then went backwards.</p>
                    <p>Once I had the feeling I was looking for using my design intention, I then moved onto constructing wireframes. These were not intended to be the final and complete layouts for each page, but rather served as the template for how I would lay each one out. I'm big on scalability, so being able to make everything in a series of components I can plug into my site to add more content has proved to be a solution that works for me. The wireframes helped me plan those modules, and also gave me a vision to work towards.</p>
                    <p>Once all that was done, I then started working on an art piece to subvert the look of the site. As you can see, I'm still not there yet, but I will get there eventually, using asymetric layouts and "ugly" design principals to create something that looks completely different to everything else in the site.</p>
                </article>

                <article className="designArticle">
                    <h3>What's next?</h3>
                    <p>Well the biggest next step is the art piece.</p>
                    <p>The core of the site, the planning process has helped me crystallize how I plan on making it more than just a glorified blog. My current plan is to do so by subverting the rest of the site, using the sterile nature of it to create something so utterly organic that it shocks the system. That alone should be enough for an art piece, but it then being a diary of personal experiences is the spice I hope to use to take it over the top.</p>
                    <p>Beyond that, I just want to refine this site. I don't think this will be my final final portfolio site, I'm planning to build that on a proper single page site I think, so that it's easy to host and maintain. But I do want this site to look nice, because it's the last one I'll do before that big portfolio site, so I definitely need to go all out. </p>
                    <p>Some pressing issues include cleaning up the home page, adding thumbnails for the other parts of the site, adding a little more functionalality (such as skip buttons on the writing page or a return to top button) and just generally making sure everything works properly. This site is minimalist, so there shouldn't be too much work involved, but I still want everything to look nice.</p>
                    <p>I need to update my style guide as well. Because while my design intention does serve as a good foundation for me, I need to reflect on more elements such as my line based design language, the font used, the colors, all those kinds of things. </p>
                    <p>Finally, and this is a big one, I want to get this site running properly on mobile. It sort of works currently, but I think there's still a long way to go before it's properly usable on a small screen device. That'll be the hardest thing to do, but also the most rewarding since it'll let me share my site more widely to friends and family. </p>
                    <p>Ultimately this site is a first iteration. It can't be perfect because time doesn't allow it, so I've done as much as I can to make it great, and the rest is now all work for another day.</p>
                </article>
            </section>

            <img src={colPal} alt="Old color palette" className="sectionImage" />

            <h2 className="sectionHeading">Improving the site</h2>

            <section className="designSection">
                <article className="designArticle">
                    <h3>Improving the site for the final submission.</h3>
                    <p>I won't lie, my first submission of this site went pretty terribly. I think I was in a huge slump at the time, which led to me half-assing the submission and missing many of the stated goals. With that in mind, I want to make a clear list of improvements to the site for myself, which I can then implement to improve it and hopefully gain better marks than I did in the previous assignment.</p>
                    <p>Firstly, I need to improve my design section. To that end, I have a few things I need to add:</p>
                    <ul>
                        <li>Annotated wireframes: I need to add updated and annotated wireframes, which shouldn't be too hard since I don't plan to change the site too much beyond the framework I established in the previous versions. I also think that I should create annotated versions of the current site to supplement the wireframes.</li>
                        <li>Color Palette: Something I feel so stupid for missing last time, I have an intended color palette for the site, which I then plan on subverting in the art section. I just need to note it down properly.</li>
                        <li>Style Guide: I have an unnofficial style guide in the form of my design intention, but having a proper style guide as well will help.</li>
                    </ul>
                    <p>After that, my next big step is implementing the artwork itself, which is going to be a difficult but fun process. The plan is to make it with reactivity in mind, which is going to take quite a bit of scaling work but should result in something that looks really cool and completes the goal of subverting the rest of the site using the art.</p>
                    <p>The final step to completing my site (besides making sure all my code is up to standard and bug fixing) is going to be making the site properly reactive. The most important step in this is making a mobile menu as opposed to the top bar, but there's also likely just a number of things I'll need to do to get the site running properly on mobile.</p>
                    <p>I also have a few other things to add: A return to top button, a bottom bar, alt text and animations. The last part is the hardest, since this site is so simple that I can't really think of places where stuff like that can be added, but I'll keep looking and hopefully I'll find something I can do to add more flare.</p>
                </article>
                
                <article className="designArticle">
                    <h3 id="pal">Color palette</h3>
                    <img src={colPal} alt="The color palette for the site"/>
                    <p>I'm going with a deliberately simple color palette for this site since I want to use it to contrast with the visual overload of my art piece. To that end, I've chosen five colours for it to consist of:</p>
                    <ul>
                        <li>Black: For backgrounds and text on white backgrounds. The public and design content of the site are distinguished by the public content having a black background, while the design content has a white background. I chose black for text because it reads well, while as a background it's easy on the eyes similar to in dark modes.</li>
                        <li>White: For text on black backgrounds. I chose it because it reads well and contrasts on black.</li>
                        <li>Whitesmoke: For backgrounds. I chose to use it instead of pure white because it is slightly easier on the eyes, making it nicer to look at than pure blinding white.</li>
                        <li>Antiquewhite: For important text. The slightly off white color is used to draw the viewer to it, without making it massively distracting. This is useful for UI, where I want to highlight something slightly more.</li>
                        <li>Red: For extremely important text. I'm yet to find a use case for this on the site, but I'm reserving it in the event that I do need it.</li>
                    </ul>
                    <p>Hierarchy is important in this color palette, as is consistency, because the intention is to use it to subtly guide the user through the experience of the site, making sure they understand where they are and what they should do next with signposting anything too heavily. A mixture of subtlety and direction.</p>
                </article>
            </section>

            <img className="sectionImage" src="design/palette2.png" alt="Final color palette" />

            <h2 className="sectionHeading">Final design</h2>

            <section className="designSection">
                <article className="designArticle">
                    <h3>Style Guide:</h3>
                    <p>This section will focus on the font, visual hierarchy, layout and philosophy of the site. For the color palette please see <a href="#pal">here</a>.</p>
                    {/* Add smooth scrolling to this link*/}
                    <h4>Font:</h4>
                    <p>I've chosen to use the Segoe UI font for the majority of the site, which is simple and readable. My goal with it is to be strong and functional, which I believe the font accomplishes by being a solid sans serif type face which is widely supported and requires no tinkering.</p>
                    <p>I then deliberately subvert this font in my art piece, which is going to be in the most hated of all fonts: Comic Sans. This is because I want the font to be deliberately strange and arbitrary, a reflection of the beautiful imperfection I'm aiming for in my art piece.</p>
                    <h4>Visual Hierarchy:</h4>
                    <p>Visual hierarchy is extremely important to me in this site, being one of the main reasons for it being so minimal. This is because it allows me to design the maximum possible amount of the user experience, as opposed to the visual clutter I accidentally create shaping the way that the user navigates the site. My main tools of visual hierarchy are the size of things and their indentation. The size of things allows me to draw the users eyes to things from largest to smallest in accordance with web design principles. The indentation allows me to clearly denote seperate sections using the gap between them. Both also allow me to denote which sections are most important, as well as subsections. Add my color design to this, and you have a site which is easy to scan through and locate the information which you are looking for. </p>
                    <h4>Philosophy:</h4>
                    <p>The primary goal of the site at this point is to create a contrast of two extremes. I want the majority of the site to be minimal and functional, which I will the contrast with the maximalist art piece in hopes that it increases the impact of the piece even further. Because I don't just want to create an art piece that sits in a vacuum on the site (not that I would, but still) and this is the way I feel best does that.</p>
                    <p>I won't lie, seeing what everyone else is doing, I kind of feel like this site sucks. Like really sucks. But I don't know what to do now to fix that. I'm in so deep with this idea that I can't just rework the whole thing to make it better, but I also feel bad because this site is the result of a huge creative rut I've been in basically this whole year for whatever reason. The result of this is a site where I halfass almost everything because my motivation is next to none, except now I do actually have motivation to something because of how badly the last assignment went, but not enough motivation to do anything drastic, leaving me spinning my wheels and continuing to make slop like this. And I hate it.</p>
                </article>

                <article className="designArticle">
                    <h3>Art piece design.</h3>
                    <img src="design/final_artframe.png" alt="Art wireframe" />
                    <p>This wireframe shows the intended design for my art piece. I want to make something which is personal to me, which subverts the typical design language of internet art to create something unique.</p>
                    <p>I personally believe that the best internet art is -to some extent- ugly. This is because it's really easy to make something clean and minimal online, but making something that feels hand crafted is a lot harder. I have a lot more respect for the latter, which is why I aim to achieve that hand crafted feeling in my design.</p>
                    <p>The next goal with this art piece is to convey a journey. If you look closely, you can see that I've demarcated areas with different colors and the movement of elements to represent different parts of the month. Because even in one month, a lot can change, and I aim to represent that with this art piece.</p>
                    <p>Something this wireframe doesn't show is the variance between days created by how each day has a unique image to go along with it. Initially, each day was supposed to be a drawing, but as time went on I realized that doing so would not be enough to truly capture the variety that I felt in this past month, so I changed it to be more multimodal.</p>
                    <p></p>
                </article>

                <article className="designArticle">
                    <h3>New Wireframes</h3>
                    <span className="wireframes"><img src="design/Wireframe_home.png" alt="Home wireframe" /><img src="design/Wireframe_me.png" alt="About me wireframe" /><img src="design/Wireframe_portfolio.png" alt="Portfolio wireframe" /></span>
                    <span className="wireframes"><img src="design/Wireframe_writing.png" alt="About me wireframe" /><img src="design/Wireframe_design.png" alt="Design wireframe" /><img src="design/final_artframe.png" alt="Art wireframe" /></span>
                    <p>I've created a whole new set of wireframes for a few reasons. The first and most important is that I needed to annotate my frames. Both to make it easier to see my thought process, and because I needed to think my site through more, which is something that annotations do.</p>
                    <p>The next reason is another important one: I've changed the site a lot between submissions, and so I need to update my wireframes to reflect that. After all, I'm using these as the template to build my site, so I need to be able to work off them.</p>
                    <p>The third and final reason relates to the increased amount of color in the site: the new wireframes serve as a good way to test color. They let me see how things will mesh together at a high level, which makes implementing them into the site so much easier.</p>
                    <p>All of this is important as always because I need a plan to work off for my site. Without it, I would waste far too much time tinkering to see what I like, which would be a death sentence when time is already so limited. It's especially helpful in react, which allows the user to so easily implement their vision from their brain to the screen.</p>
                </article>

                <article className="designArticle">
                    <h3>New Color Palette</h3>
                    <img src="design/palette2.png" alt="Final color palette" />
                    <p>I've created a new color palette for the site because my most universal criticism is that the black and white aesthetic was making the site look unfinished. This new palette hopes to give the site a more cohesive feeling, while also making navigation easier since each page is color coded to allow for immediate identification and a better mental mapping of the site (something which takes from level design principles in game design).</p>
                    <p>My core colors are still black and white, since I want to maintain an easily readable visual experience, but I've also given each page a unique color as well.</p>
                    <p>The page colors are primarily chosen with grouping in mind. Similar to how the front side has an upward sloping aesthetic and the back has a downward sloping one, the front side of the site uses warm colors while the back uses cooler ones to create a deliberate distinction.</p>
                    <p>I've also chosen to make the backgrounds a more visually appealing off white color, which I refer to as Pikuyellow, since I feel it gives the site more of an identity. I've also combined it with a paper like effect to give the site a feeling of texture, which combines with the shadows to make a really cool effect.</p>
                    <p>Overall, I believe this palette does a good job of reaching it's intended purpose: creating a unique but cohesive visual scheme to tie the site together and set it apart from other portfolio sites.</p>
                    <p></p>
                </article>
            </section>

            <h2 className="sectionHeading">Wireframes</h2>
                
            <section className="wireframeSection">
                <h3>Current wireframes</h3>
                <img src="design/Wireframe_home.png" alt="Home wireframe" />
                <img src="design/Wireframe_me.png" alt="Home wireframe" />
                <img src="design/Wireframe_portfolio.png" alt="Home wireframe" />
                <img src="design/final_artframe.png" alt="Home wireframe" />
                <img src="design/Wireframe_writing.png" alt="Home wireframe" />
                <img src="design/Wireframe_design.png" alt="Home wireframe" />

                <h3>Old wireframes</h3>
                <img src="design/Old_Wireframe_home.png" alt="Wireframe for the home page" />
                <img src="design/Old_Wireframe_me.png" alt="Wireframe for the home page" />
                <img src="design/Old_Wireframe_art.png" alt="Wireframe for the home page" />
                <img src="design/Old_Wireframe_writing.png" alt="Wireframe for the home page" />
                <img src="design/Old_Wireframe_design.png" alt="Wireframe for the home page" />
                <img src={siteMap} alt="Wireframe for the home page" />

            </section>

           

            {!crarbStyle && <>
                <div className="color-overlay" onClick={toggleCrab}></div>
                <img src={crabDance} alt="" className="crabby" onClick={toggleCrab}/>
            </>
            }

        <section/>

        </section>
    )
}