import { useState } from "react";

import artinfo from "../artData/artInfo.json"

/* It took me a while to decide whether I would hand make
the layout for the art page or do it with an algorithm, but
ultimately I decided to hand make it. Because I feel
as though doing everything myself gives me more control,
as well as more time to think about how each day's entry
can be made to fit into the overall narrative of the
piece as well as possible. */

export default function Art() {
    const [fullScreenActive, setFullScreenActive] = useState(false);

    const [dayTitle, setDayTitle] = useState("");
    const [dayImage, setDayImage] = useState("");
    /* I won't lie it took me an embarassingly long amount
    of time to learn I can use the public folder to bypass needing
    to import images. Well, you live and learn */
    const [dayDesc, setDayDesc] = useState("An image lol");
    const [dayText, setDayText] = useState("");

    const handleOpen = (day) => {
        console.log(day.image);
        
        setDayTitle(day.title);
        setDayImage(day.image);
        setDayDesc(day.image_desc);
        setDayText(day.textContent);

        
        setFullScreenActive(true);
    }

    const handleClose = () =>{
        setFullScreenActive(false);

        setDayTitle("Error");
        setDayImage(" ");
        setDayDesc(" ");
        setDayText("");
    }
    
    return(
        <>
            <div className="topPad"/>

            <h2 className="mobileWarning">Warning: This content is not optimized for mobile devices. Please view it on a full sized screen.</h2>
            {/* It's a cop out I know, but I just didn't have time to
            do anything better unfortunately.  */}
            
            <section className="artSection">
                <article className="artSub">
                    <div className="artBox" onClick={() => handleOpen(artinfo.May1)}>
                        <p>May 1</p>
                        <img src={artinfo.May1.image} alt={artinfo.May1.image_desc} />
                        <h2>{artinfo.May1.title}</h2>
                    </div>
                    <div className="artBox" onClick={() => handleOpen(artinfo.May2)}>
                        <p>May 2</p>
                        <img src={artinfo.May2.image} alt={artinfo.May2.image_desc} />
                        <h2>{artinfo.May2.title}</h2>
                    </div>
                </article>
                <article className="artSub">
                    <div className="artBox" onClick={() => handleOpen(artinfo.May3)}>
                        <p>May 3</p>
                        <img src={artinfo.May3.image} alt={artinfo.May3.image_desc} />
                        <h2>{artinfo.May3.title}</h2>
                    </div>
                    <div className="artBox" onClick={() => handleOpen(artinfo.May4)}>
                        <p>May 4</p>
                        <img src={artinfo.May4.image} alt={artinfo.May4.image_desc} />
                        <h2>{artinfo.May4.title}</h2>
                    </div>
                </article>
            </section>
            <section className="artSection">
                <article className="artSub">
                    <div className="artBox" onClick={() => handleOpen(artinfo.May5)}>
                        <p>May 5</p>
                        <img src={artinfo.May5.image} alt={artinfo.May5.image_desc} />
                        <h2>{artinfo.May5.title}</h2>
                    </div>
                    <div className="artBox" onClick={() => handleOpen(artinfo.May6)}>
                        <p>May 6</p>
                        <img src={artinfo.May6.image} alt={artinfo.May6.image_desc} />
                        <h2>{artinfo.May6.title}</h2>
                    </div>
                </article>
                <article className="artSub">
                    <div className="artBox" onClick={() => handleOpen(artinfo.May7)}>
                        <p>May 7</p>
                        <img src={artinfo.May7.image} alt={artinfo.May7.image_desc} />
                        <h2>{artinfo.May7.title}</h2>
                    </div>
                    <div className="artBox DSS8" onClick={() => handleOpen(artinfo.May8)}>
                        <p>May 8</p>
                        <img src={artinfo.May8.image} alt={artinfo.May8.image_desc} />
                        <h2>{artinfo.May8.title}</h2>
                    </div>
                </article>
            </section>
            <section className="artSection orangeIn">
                <article className="artSub">
                    <div className="artBox" onClick={() => handleOpen(artinfo.May9)}>
                        <p>May 9</p>
                        <img src={artinfo.May9.image} alt={artinfo.May9.image_desc} />
                        <h2>{artinfo.May9.title}</h2>
                    </div>
                </article>
                <article className="artSub">
                    <div className="artBox" onClick={() => handleOpen(artinfo.May10)}>
                        <p>May 10</p>
                        <img src={artinfo.May10.image} alt={artinfo.May10.image_desc} />
                        <h2>{artinfo.May10.title}</h2>
                    </div>
                    <div className="artBox DSS11" onClick={() => handleOpen(artinfo.May11)}>
                        <p>May 11</p>
                        <img src={artinfo.May11.image} alt={artinfo.May11.image_desc} />
                        <h2>{artinfo.May11.title}</h2>
                    </div>
                </article>
            </section>
            <section className="artSection pinkIn">
                <article className="artSub">
                    <div className="artBox" onClick={() => handleOpen(artinfo.May12)}>
                        <p>May 12</p>
                        <img src={artinfo.May12.image} alt={artinfo.May12.image_desc} />
                        <h2>{artinfo.May12.title}</h2>
                    </div>
                </article>
                <article className="artSub">
                    <div className="artBox DSS13" onClick={() => handleOpen(artinfo.May13)}>
                        <p>May 13</p>
                        <img src={artinfo.May13.image} alt={artinfo.May13.image_desc} />
                        <h2>{artinfo.May13.title}</h2>
                    </div>
                    <div className="artBox DSS14" onClick={() => handleOpen(artinfo.May14)}>
                        <p>May 14</p>
                        <img src={artinfo.May14.image} alt={artinfo.May14.image_desc} />
                        <h2>{artinfo.May14.title}</h2>
                    </div>
                </article>
            </section>
            <section className="artSection pink">
                <article className="artSub">
                    <div className="artBox DSS15" onClick={() => handleOpen(artinfo.May15)}>
                        <p>May 15</p>
                        <img src={artinfo.May15.image} alt={artinfo.May15.image_desc} />
                        <h2>{artinfo.May15.title}</h2>
                    </div>
                    <img src="artContent/annotation.png" alt="An annotation for one of the images" className="annoStyle"/>
                    <div className="artBox" onClick={() => handleOpen(artinfo.May16)}>
                        <p>May 16</p>
                        <img src={artinfo.May16.image} alt={artinfo.May16.image_desc} />
                        <h2>{artinfo.May16.title}</h2>
                    </div>
                </article>
                <article className="artSub">
                    <div className="artBox" onClick={() => handleOpen(artinfo.May17)}>
                        <p>May 17</p>
                        <img src={artinfo.May17.image} alt={artinfo.May17.image_desc} />
                        <h2>{artinfo.May17.title}</h2>
                    </div>
                    <div className="artBox DSS18" onClick={() => handleOpen(artinfo.May18)}>
                        <p>May 18</p>
                        <img src={artinfo.May18.image} alt={artinfo.May18.image_desc} />
                        <h2>{artinfo.May18.title}</h2>
                    </div>
                </article>
            </section>
            <section className="artSection blueIn">
                <article className="artSub">
                    <div className="artBox DSS19" onClick={() => handleOpen(artinfo.May19)}>
                        <p>May 19</p>
                        <img src={artinfo.May19.image} alt={artinfo.May19.image_desc} />
                        <h2>{artinfo.May19.title}</h2>
                    </div>
                    <div className="artBox" onClick={() => handleOpen(artinfo.May20)}>
                        <p>May 20</p>
                        <img src={artinfo.May20.image} alt={artinfo.May20.image_desc} />
                        <h2>{artinfo.May20.title}</h2>
                    </div>
                </article>
                <article className="artSub">
                    <div className="artBox" onClick={() => handleOpen(artinfo.May21)}>
                        <p>May 21</p>
                        <img src={artinfo.May21.image} alt={artinfo.May21.image_desc} />
                        <h2>{artinfo.May21.title}</h2>
                    </div>
                </article>
            </section>
            <section className="artSection blue">
                <article className="artSub">
                    <div className="artBox DSS22" onClick={() => handleOpen(artinfo.May22)}>
                        <p>May 22</p>
                        <img src={artinfo.May22.image} alt={artinfo.May22.image_desc} />
                        <h2>{artinfo.May22.title}</h2>
                    </div>
                </article>
                <article className="artSub">
                    <div className="artBox" onClick={() => handleOpen(artinfo.May23)}>
                        <p>May 23</p>
                        <img src={artinfo.May23.image} alt={artinfo.May23.image_desc} />
                        <h2>{artinfo.May23.title}</h2>
                    </div>
                    <div className="artBox" onClick={() => handleOpen(artinfo.May24)}>
                        <p>May 24</p>
                        <img src={artinfo.May24.image} alt={artinfo.May24.image_desc} />
                        <h2>{artinfo.May24.title}</h2>
                    </div>
                </article>
            </section>
            <section className="artSection blue">
                <article className="artSub">
                    <div className="artBox" onClick={() => handleOpen(artinfo.May25)}>
                        <p>May 25</p>
                        <img src={artinfo.May25.image} alt={artinfo.May25.image_desc} />
                        <h2>{artinfo.May25.title}</h2>
                    </div>
                    <div className="artBox DSS26" onClick={() => handleOpen(artinfo.May26)}>
                        <p>May 26</p>
                        <img src={artinfo.May26.image} alt={artinfo.May26.image_desc} />
                        <h2>{artinfo.May26.title}</h2>
                    </div>
                </article>
                <article className="artSub">
                    <div className="artBox DSS27" onClick={() => handleOpen(artinfo.May27)}>
                        <p>May 27</p>
                        <img src={artinfo.May27.image} alt={artinfo.May27.image_desc} />
                        <h2>{artinfo.May27.title}</h2>
                    </div>
                    <div className="artBox" onClick={() => handleOpen(artinfo.May28)}>
                        <p>May 28</p>
                        <img src={artinfo.May28.image} alt={artinfo.May28.image_desc} />
                        <h2>{artinfo.May28.title}</h2>
                    </div>
                </article>
            </section>
            <section className="artSection RSA" onClick={() => handleOpen(artinfo.May29)}>
                <div className="artBox DSS29">
                    <p>May 29</p>
                    <img src={artinfo.May29.image} alt={artinfo.May29.image_desc} />
                    <h2>{artinfo.May29.title}</h2>
                </div>
            </section>
            <section className="artSection sunset">
                <article className="artSub">
                    <div className="artBox DSS30" onClick={() => handleOpen(artinfo.May30)}>
                        <p>May 30</p>
                        <img src={artinfo.May30.image} alt={artinfo.May30.image_desc} />
                        <h2>{artinfo.May30.title}</h2>
                    </div>
                </article>
                <article className="artSub">
                    <div className="artBox DSS31" onClick={() => handleOpen(artinfo.May31)}>
                        <p>May 31</p>
                        <img src={artinfo.May31.image} alt={artinfo.May31.image_desc} />
                        <h2>{artinfo.May31.title}</h2>
                    </div>
                </article>
            </section>
            


            {/* This code is specifically for the full screen box. */}

            {fullScreenActive && <section className="fullScreen">
                    <span className="closeButton" onClick={handleClose}>X</span>
                    <section>
                        <img src={dayImage} alt={dayDesc} />
                        <h2>{dayTitle}</h2>
                        <p>{dayText}</p>
                    </section>
                </section>}
                
        
        </>
    )
}