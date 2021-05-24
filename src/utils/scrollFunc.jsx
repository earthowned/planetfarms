import {useState, useEffect} from 'react';
import useSizeFinder from './SizeFinder';

const useScroll = (scrollRef) => {
    const [scrollActive, setScrollActive] = useState(true);
    const [scrollLeftActive, setScrollLeftActive] = useState(false);
    
    
    const scrollRight = (scrollParam) => {
        scrollParam.current.scrollLeft += 500;
        setScrollLeftActive(true);
    }

    const scrollLeft = (scrollParam) => {
            scrollParam.current.scrollLeft = null;
            setScrollLeftActive(false)
    }

    const windowWidth = useSizeFinder();
    useEffect(() => {
        if(scrollRef.current.offsetWidth >= scrollRef.current.scrollWidth) {
        setScrollActive(false)
        };
    }, [windowWidth])

    return {scrollLeftActive, scrollActive, scrollRight, scrollLeft}
}

export default useScroll;