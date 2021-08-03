import React from 'react'
import './ComponentLoadingWrapper.scss'
import { ReactComponent as Lock } from '../../assets/images/minus-circle-outline.svg'

// Wrapper function for loading spinner
// Pass loading state to this component as props 'loadingState'
const ComponentLoadingWrapper = ({ loadingState = false, children }) => {
  return (
    <>
      {loadingState &&
        <div className='component-loading-container'>
          <div className='component-loading-wrapper'>
            <Lock className='component-loading' />
          </div>
        </div>}
      {children}
    </>
  )
}

export default ComponentLoadingWrapper
