import { useState, useEffect } from 'react'
import useSizeFinder from './SizeFinder'

const useScroll = (scrollRef) => {
  const [scrollActive, setScrollActive] = useState(true)
  const [scrollLeftActive, setScrollLeftActive] = useState(false)
  const [right, setRight] = useState(0)
  const [left, setLeft] = useState(0)
  const [width, setWidth] = useState()

  const scrollRight = () => {
    scrollRef.current.scrollBy(500, 0)
    setRight(existingnum => (500 + existingnum))
    setLeft(0)
    setScrollLeftActive(true)
  }

  const scrollLeft = () => {
    scrollRef.current.scrollBy(-500, 0)
    setRight(0)
    setLeft(existingnum => (500 + existingnum))
    setScrollActive(true)
  }

  const windowWidth = useSizeFinder()
  useEffect(() => {
    if ((scrollRef.current.scrollWidth - right) <= 450) {
      setScrollActive(false)
    }

    if ((scrollRef.current.scrollWidth - left) <= 450) {
      setScrollLeftActive(false)
    }
  }, [right, left])

  useEffect(() => {
    if (scrollRef.current.offsetWidth >= scrollRef.current.scrollWidth) {
      setScrollActive(false)
    } else {
      setScrollActive(true)
    }
    // setWidth(scrollRef.current.scrollWidth);
  }, [windowWidth])

  return { scrollLeftActive, scrollActive, scrollRight, scrollLeft }
}

export default useScroll
