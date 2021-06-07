import { useState, useMemo } from 'react'

const useToggleOnFocus = (initialState = false) => {
  const [show, toggle] = useState(initialState)

  const eventHandlers = useMemo(
    () => ({
      onFocus: () => toggle(true),
      onBlur: () => toggle(false)
    }),
    []
  )

  return { show, eventHandlers }
}
export default useToggleOnFocus
