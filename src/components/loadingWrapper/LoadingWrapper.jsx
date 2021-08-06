import React from 'react'
import './LoadingWrapper.scss'
import { ReactComponent as Lock } from '../../assets/images/minus-circle-outline.svg'

// Wrapper function for loading spinner
// Pass loading state to this component as props 'loadingState'
const LoadingWrapper = ({ loadingState = true, children }) => {
  return (
    <>
      {loadingState &&
        <div className='loading-container'>
          <div className='loading-wrapper'>
            <Lock className='loading' />
          </div>
        </div>}
      {children}
    </>
  )
}

export default LoadingWrapper
