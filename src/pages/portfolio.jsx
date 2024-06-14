import { useRef, useState } from "react"

import topper from "../content/portfolio-topper.png"


export default function Portfolio(){
    const [fullSize, setFullSize] = useState();

    const [image, setImage] = useState("");
    const [imageAlt, setImageAlt] = useState("");

    function openFull(iMage, alt) {
        setFullSize(true);
        setImage(iMage);
        setImage(alt);
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
                <img src="artContent/worm.jpg" alt="" onClick={() => openFull("artContent/worm.jpg", "")}/>
                <img src="artContent/worm.jpg" alt="" onClick={() => openFull("artContent/worm.jpg", "")}/>
                <img src="artContent/worm.jpg" alt="" onClick={() => openFull("artContent/worm.jpg", "")}/>
                <img src="artContent/worm.jpg" alt="" onClick={() => openFull("artContent/worm.jpg", "")}/>
                <img src="artContent/worm.jpg" alt="" onClick={() => openFull("artContent/worm.jpg", "")}/>
                <img src="artContent/worm.jpg" alt="" onClick={() => openFull("artContent/worm.jpg", "")}/>
                <img src="artContent/worm.jpg" alt="" onClick={() => openFull("artContent/worm.jpg", "")}/>
                <img src="artContent/worm.jpg" alt="" onClick={() => openFull("artContent/worm.jpg", "")}/>
                <img src="artContent/worm.jpg" alt="" onClick={() => openFull("artContent/worm.jpg", "")}/>
                <img src="artContent/worm.jpg" alt="" onClick={() => openFull("artContent/worm.jpg", "")}/>
                <img src="artContent/worm.jpg" alt="" onClick={() => openFull("artContent/worm.jpg", "")}/>
                <img src="artContent/worm.jpg" alt="" onClick={() => openFull("artContent/worm.jpg", "")}/>
            </section>


            {fullSize && <section className="fullScreen">
                    <span className="closeButton" onClick={closeFull}>X</span>
                    <div>
                        <img src={image} alt={imageAlt} />
                    </div>
                </section>}

        </section>
    )
}