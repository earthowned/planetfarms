import { useEffect, useState } from 'react'
import './RadioBox.scss'

const Radiobox = () => {
  const [active, setActive] = useState(false)

  function changeCheckbox () {
    setActive(!active)
  }

  return (
    <div className={active ? 'outer-box-radio active' : 'outer-box-radio'} onClick={() => changeCheckbox()}>
      {active && <img src='/img/radio-tick.svg' alt='checkbox-for-terms' />}
    </div>
  )
}

export default Radiobox
