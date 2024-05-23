

const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];
const setStyle = (el, rule, val) => (el.style[rule] = val);


const colorSwap = () => {
    //I used this code as my foundation: https://www.30secondsofcode.org/js/s/get-set-add-styles-to-html-element/
    console.log(getStyle(document.getElementById('intent'), 'color'))

    if (getStyle(document.getElementById('intent'), 'color') == "rgb(255, 255, 255)") {
        setStyle(document.getElementById('intent'), 'color', "black")
        setStyle(document.getElementById('intent'), 'background-color', "white")
    }else{
        setStyle(document.getElementById('intent'), 'color', "white")
        setStyle(document.getElementById('intent'), 'background-color', "black")
    }
}

export default function Design() {
    colorSwap()

    return(
        <>
            <h1>Design</h1>

            <article id="intent" className="designArticle">
                <h2>Design intentions.</h2>
                <p>My primary goal for making my IM4 website is to make a site that is slick and clean while being fundamentally me. So, that begs the question, what does fundamentally me look like?</p>
                <p>Well, for one, I think it’s minimal but not soulless. I believe understatement is king until it’s time to bring out the big guns, so in line with that my plan is to build my site around a minimal color palette with splashes of brightness in impactful ways. My primary inspiration is <a href="https://intl.nothing.tech/">Nothing Phone</a>, who are themselves drawing from <a href="https://www.apple.com/">Apple</a> but with a more exciting spin. I want to do what they do, where they utilize the strengths of corporate minimalism (accessibility, scalability) but with a sense of freshness built from their unique brand identity. To do that, I plan on relying upon these pillars:</p>
                <ul>
                    <li>A color palette, one which is cohesive, appealing and minimal without becoming boring. I also plan on creating strong associations with color, which will allow me to guide the user by using the visual language I create.</li>
                    <li>Strong visual language. I want this site to be coherent and visible. In the past, I’ve over complicated my layout, so now I plan to keep it as coherent as possible.</li>
                    <li>Deliberate and planned design. I want to create wireframes and design documents like these to properly understand my design, before I even start working on any kind of project.</li>
                    <li>A little bit of <button>excitement</button></li>
                
                
                </ul>
            
            </article>
        </>
    )
}