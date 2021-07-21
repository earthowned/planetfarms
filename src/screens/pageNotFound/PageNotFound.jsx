import React from 'react'
import { useHistory } from 'react-router-dom'
import Logo from '../../components/logo/Logo'
import Banner from '../../components/signInSignUp/Banner'
import './PageNotFound.scss'

const PageNotFound = () => {
    const history = useHistory();
    return (
        <div className='page-layout'>
            <div className='wrapper'>
                <div className='form'>
                    <div className='icons'>
                        <Logo />
                    </div>
                    <div className="content">
                        <h1 className="page-title">404 Error</h1>
                        <p className="page-sub-title">Sorry! Page Not Found</p>
                        <button className="page-button" onClick={() => history.push('/dashboard')}>Go back to Dashboard</button>
                    </div>
                </div>
                <Banner />
            </div>
        </div>
    )
}

export default PageNotFound
