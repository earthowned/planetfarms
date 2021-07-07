import { useEffect, useRef } from 'react'

const useHideOnClick = (handler) => {
  let domNode = useRef()
  useEffect(() => {
    let hideShowHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler()
      }
    }
    document.addEventListener('mousedown', hideShowHandler)

    return () => {
      document.removeEventListener('mousedown', hideShowHandler)
    }
  })
  return domNode
}

export default useHideOnClick
