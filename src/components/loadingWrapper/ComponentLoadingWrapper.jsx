import React from 'react'
import './ComponentLoadingWrapper.scss'
import { ReactComponent as Lock } from '../../assets/images/minus-circle-outline.svg'

// Wrapper function for loading spinner
// Pass loading state to this component as props 'loadingState'
const ComponentLoadingWrapper = ({ loadingState = true, children }) => {
  return (
    <div>
      {loadingState &&
        <div className='loading-spinner-container'>
          <div className='loading-spinner-wrapper'>
            <Lock className='loading-spinner' />
          </div>
        </div>}
      {children}
    </div>
  )
}

export default ComponentLoadingWrapper
