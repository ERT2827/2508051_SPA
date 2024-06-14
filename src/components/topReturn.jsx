// I got the code here: https://www.youtube.com/watch?v=8c5eMyJR9Js

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/* I didn't realize that changing page 
wasn't taking you back to the top of the new page,
but once I did in the process of making my return to top
button it started bothering me so I implemented this code to
fix it.*/

export default function TopReturn() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])
}