import { useState } from "react"

import topper from "../content/portfolio-topper.png"


export default function Portfolio(){
    const [fullSize, setFullSize] = useState();

    const [image, setImage] = useState("");
    const [imageAlt, setImageAlt] = useState("Error");

    function openFull(iMage, alt) {
        setFullSize(true);
        setImage(iMage);
        setImageAlt(alt);
    }

    function closeFull() {
        setFullSize(false);
    }

    return(
        <section className="portfolioPage">
            <section className="pageHeading">
                <img src={topper} alt="background image" />
                <h1>Portfolio</h1>
            </section>
            
            

            <section className="portfolioBody">
                <img src="artContent/worm.jpg" alt="drawing" onClick={() => openFull("artContent/worm.jpg", "drawing")}/>
                <img src="portfolio/Fourtown.jpg" alt="drawing" onClick={() => openFull("portfolio/Fourtown.jpg", "drawing")}/>
                <img src="portfolio/Insanememe.jpg" alt="drawing" onClick={() => openFull("portfolio/Insanememe.jpg", "drawing")}/>
                <img src="portfolio/Kiteman.jpg" alt="drawing" onClick={() => openFull("portfolio/Kiteman.jpg", "drawing")}/>
                <img src="portfolio/MHClub.jpg" alt="drawing" onClick={() => openFull("portfolio/MHClub.jpg", "drawing")}/>
                <img src="portfolio/Oz.jpg" alt="drawing" onClick={() => openFull("portfolio/Oz.jpg", "drawing")}/>
                <img src="portfolio/Third year poster.png" alt="drawing" onClick={() => openFull("portfolio/Third year poster.png", "drawing")}/>
                <img src="portfolio/TessDrawing.jpg" alt="drawing" onClick={() => openFull("portfolio/TessDrawing.jpg", "drawing")}/>
                </section>


            {fullSize && <section className="portfolioFullScreen">
                    <span className="closeButton" onClick={closeFull}>X</span>
                    <div>
                        <img src={image} alt={imageAlt} />
                    </div>
                </section>}

        </section>
    )
}