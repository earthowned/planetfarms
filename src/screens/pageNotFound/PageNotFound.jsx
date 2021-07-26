import React from 'react'
import { useHistory } from 'react-router-dom'
import SignLayout from '../../layout/signLayout/SignLayout'
import './PageNotFound.scss'

const PageNotFound = () => {
  const history = useHistory()
  return (
    <SignLayout bannerClass='not-found-page--banner'>
      <form className='sign'>
        <h1 className='welcome page-title'>404 Error</h1>
        <div className='container page-container'>
          <p className='page-sub-title'>Sorry! Page Not Found</p>
          <button className='page-button' onClick={() => history.push('/dashboard')}>Go back to Dashboard</button>
        </div>
      </form>
    </SignLayout>
  )
}

export default PageNotFound
