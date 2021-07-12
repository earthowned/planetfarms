import { useState } from 'react'
import useHideOnClick from '../../utils//useHideOnClick'

import './Material.scss'

const Material = ({ name }) => {
  const [isActive, setIsActive] = useState(false)
  const domNode = useHideOnClick(() => {
    setIsActive(false)
  })
  return (
    <div className='document-wrapper'>
      <div className='document' ref={domNode}>
        <img src='/img/pdf.svg' alt='document type' />
        <h4>{name}</h4>
        <img
          src='/img/more-horizontal.svg'
          alt='horizontal icon'
          onClick={() => setIsActive(!isActive)}
        />

        {isActive && (
          <div
            className={
              isActive
                ? 'document-download-toggle'
                : 'document-download-toggle hide'
            }
          >
            <div>
              <img src='/img/download-icon.svg' alt='download icon' />{' '}
              <span>Download</span>
            </div>
            <div>
              <img src='/img/book-outlined.svg' alt='library icon' />{' '}
              <span>Add to my library</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Material
