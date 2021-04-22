 import {useState, useEffect} from 'react';
 
 const useSizeFinder = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

        useEffect(() => {
            window.addEventListener("resize", function () {
            setWindowWidth(window.innerWidth);
        });

            return () => {
            window.removeEventListener("resize",function () {
            setWindowWidth(window.innerWidth);
        });
            }
        },[windowWidth])

    return windowWidth;
 }

 export default useSizeFinder;
 