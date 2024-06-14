import { useRef, useState } from "react";

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
    }
    
    return(
        <>
            <div className="topPad"/>
            
            <section className="artSection">
                <article className="artSub">
                    <div className="artBox" onClick={() => handleOpen(artinfo.May1)}>
                        <p>May 1</p>
                        <img src={artinfo.May1.image} alt="" />
                        <h2>{artinfo.May1.title}</h2>
                    </div>
                    <div className="artBox" onClick={() => handleOpen("May2")}>
                        <p>May 2</p>
                        <img src={artinfo.May2.image} alt="" />
                        <h2>{artinfo.May2.title}</h2>
                    </div>
                </article>
                <article className="artSub">
                    <div className="artBox" onClick={() => handleOpen(artinfo.May3)}>
                        <p>May 3</p>
                        <img src={artinfo.May3.image} alt="" />
                        <h2>{artinfo.May3.title}</h2>
                    </div>
                    <div className="artBox" onClick={() => handleOpen(artinfo.May4)}>
                        <p>May 4</p>
                        <img src={artinfo.May4.image} alt="" />
                        <h2>{artinfo.May4.title}</h2>
                    </div>
                </article>
            </section>
            <section className="artSection">
                <article className="artSub">
                    <div className="artBox" onClick={() => handleOpen("May5")}>
                        <p>May 5</p>
                        <img src={artinfo.May5.image} alt="" />
                        <h2>{artinfo.May5.title}</h2>
                    </div>
                    <div className="artBox" onClick={() => handleOpen("May6")}>
                        <p>May 6</p>
                        <img src={artinfo.May6.image} alt="" />
                        <h2>{artinfo.May6.title}</h2>
                    </div>
                </article>
                <article className="artSub">
                    <div className="artBox" onClick={() => handleOpen("May7")}>
                        <p>May 7</p>
                        <img src={artinfo.May7.image} alt="" />
                        <h2>{artinfo.May7.title}</h2>
                    </div>
                    <div className="artBox DSS8" onClick={() => handleOpen("May8")}>
                        <p>May 8</p>
                        <img src={artinfo.May8.image} alt="" />
                        <h2>{artinfo.May8.title}</h2>
                    </div>
                </article>
            </section>
            <section className="artSection orangeIn">
                <article className="artSub">
                    <div className="artBox" onClick={() => handleOpen("May9")}>
                        <p>May 9</p>
                        <img src={artinfo.May9.image} alt="" />
                        <h2>{artinfo.May9.title}</h2>
                    </div>
                </article>
                <article className="artSub">
                    <div className="artBox" onClick={() => handleOpen("May10")}>
                        <p>May 10</p>
                        <img src={artinfo.May10.image} alt="" />
                        <h2>{artinfo.May10.title}</h2>
                    </div>
                    <div className="artBox DSS11" onClick={() => handleOpen("May11")}>
                        <p>May 11</p>
                        <img src={artinfo.May11.image} alt="" />
                        <h2>{artinfo.May11.title}</h2>
                    </div>
                </article>
            </section>
            <section className="artSection pinkIn">
                <article className="artSub">
                    <div className="artBox" onClick={() => handleOpen("May12")}>
                        <p>May 12</p>
                        <img src={artinfo.May12.image} alt="" />
                        <h2>{artinfo.May12.title}</h2>
                    </div>
                </article>
                <article className="artSub">
                    <div className="artBox DSS13" onClick={() => handleOpen("May1")}>
                        <p>May 13</p>
                        <img src={artinfo.May13.image} alt="" />
                        <h2>{artinfo.May13.title}</h2>
                    </div>
                    <div className="artBox DSS14" onClick={() => handleOpen("May1")}>
                        <p>May 14</p>
                        <img src={artinfo.May14.image} alt="" />
                        <h2>{artinfo.May14.title}</h2>
                    </div>
                </article>
            </section>
            <section className="artSection pink">
                <article className="artSub">
                    <div className="artBox DSS15" onClick={() => handleOpen("May1")}>
                        <p>May 15</p>
                        <img src={artinfo.May15.image} alt="" />
                        <h2>{artinfo.May15.title}</h2>
                    </div>
                    <img src="artContent/annotation.png" alt="An annotation for one of the images" className="annoStyle"/>
                    <div className="artBox" onClick={() => handleOpen("May1")}>
                        <p>May 16</p>
                        <img src={artinfo.May16.image} alt="" />
                        <h2>{artinfo.May16.title}</h2>
                    </div>
                </article>
                <article className="artSub">
                    <div className="artBox" onClick={() => handleOpen("May1")}>
                        <p>May 17</p>
                        <img src={artinfo.May17.image} alt="" />
                        <h2>{artinfo.May17.title}</h2>
                    </div>
                    <div className="artBox DSS18" onClick={() => handleOpen("May1")}>
                        <p>May 18</p>
                        <img src={artinfo.May18.image} alt="" />
                        <h2>{artinfo.May18.title}</h2>
                    </div>
                </article>
            </section>
            <section className="artSection blueIn">
                <article className="artSub">
                    <div className="artBox DSS19" onClick={() => handleOpen("May1")}>
                        <p>May 19</p>
                        <img src={artinfo.May19.image} alt="" />
                        <h2>{artinfo.May19.title}</h2>
                    </div>
                    <div className="artBox" onClick={() => handleOpen("May1")}>
                        <p>May 20</p>
                        <img src={artinfo.May20.image} alt="" />
                        <h2>{artinfo.May20.title}</h2>
                    </div>
                </article>
                <article className="artSub">
                    <div className="artBox" onClick={() => handleOpen("May1")}>
                        <p>May 21</p>
                        <img src={artinfo.May21.image} alt="" />
                        <h2>{artinfo.May22.title}</h2>
                    </div>
                </article>
            </section>
            <section className="artSection blue">
                <article className="artSub">
                    <div className="artBox DSS22" onClick={() => handleOpen("May1")}>
                        <p>May 22</p>
                        <img src={artinfo.May22.image} alt="" />
                        <h2>{artinfo.May22.title}</h2>
                    </div>
                </article>
                <article className="artSub">
                    <div className="artBox" onClick={() => handleOpen("May1")}>
                        <p>May 23</p>
                        <img src={artinfo.May23.image} alt="" />
                        <h2>{artinfo.May23.title}</h2>
                    </div>
                    <div className="artBox" onClick={() => handleOpen("May1")}>
                        <p>May 24</p>
                        <img src={artinfo.May24.image} alt="" />
                        <h2>{artinfo.May24.title}</h2>
                    </div>
                </article>
            </section>
            <section className="artSection blue">
                <article className="artSub">
                    <div className="artBox" onClick={() => handleOpen("May1")}>
                        <p>May 25</p>
                        <img src={artinfo.May25.image} alt="" />
                        <h2>{artinfo.May25.title}</h2>
                    </div>
                    <div className="artBox DSS26" onClick={() => handleOpen("May1")}>
                        <p>May 26</p>
                        <img src={artinfo.May26.image} alt="" />
                        <h2>{artinfo.May26.title}</h2>
                    </div>
                </article>
                <article className="artSub">
                    <div className="artBox DSS27" onClick={() => handleOpen("May1")}>
                        <p>May 27</p>
                        <img src={artinfo.May27.image} alt="" />
                        <h2>{artinfo.May27.title}</h2>
                    </div>
                    <div className="artBox" onClick={() => handleOpen("May1")}>
                        <p>May 28</p>
                        <img src={artinfo.May28.image} alt="" />
                        <h2>{artinfo.May28.title}</h2>
                    </div>
                </article>
            </section>
            <section className="artSection RSA">
                <div className="artBox DSS29">
                    <p>May 29</p>
                    <img src={artinfo.May29.image} alt={artinfo.May29.image_desc} />
                    <h2>{artinfo.May29.title}</h2>
                </div>
            </section>
            <section className="artSection sunset">
                <article className="artSub">
                    <div className="artBox DSS30">
                        <p>May 30</p>
                        <img src={artinfo.May30.image} alt="" />
                        <h2>{artinfo.May30.title}</h2>
                    </div>
                </article>
                <article className="artSub">
                    <div className="artBox DSS31">
                        <p>May 31</p>
                        <img src={artinfo.May31.image} alt="" />
                        <h2>{artinfo.May31.title}</h2>
                    </div>
                </article>
            </section>
            


            {/* This code is specifically for the full screen box. */}

            {fullScreenActive && <section className="fullScreen">
                    <span className="closeButton" onClick={handleClose}>X</span>
                    <div>
                        <img src={dayImage} alt={dayDesc} />
                        <h2>{dayTitle}</h2>
                        <p>{dayText}</p>
                    </div>
                </section>}
                
        
        </>
    )
}