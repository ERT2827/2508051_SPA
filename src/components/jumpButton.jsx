import CheckScroll from "./checkScroll";

// This is the code for the jump to top button
export default function JumpButton() {
    var scrollDir = CheckScroll();
    
    var jumpStyle = {
        bottom: scrollDir ? '-100px' : '12px'
    }

    return(
        <button className="topButton" style={jumpStyle} onClick={() => {
            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
        }}>
            ↑
        </button>
    )
}