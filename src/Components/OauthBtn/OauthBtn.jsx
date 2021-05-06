import React from 'react'
import './o-auth-btn.css'

function OauthBtn ({loginWithGoogle, loginWithFacebook, google, facebook, name}) {
  return (
            <div className="oauth-wrapper">
              <h4>{name}</h4>
              <div className="o-auth-btn-wrapper">
                  <button onClick={ loginWithGoogle } className="google-btn">
                    <img src="/img/google-icon.svg" alt="google-icon" />
                    <h4>{google}</h4>
                  </button>

                  <button onClick={ loginWithFacebook } className="facebook-btn">
                    <img src="/img/facebook-icon.svg" alt="facebook-icon" />
                    <h4>{facebook}</h4>
                  </button>
              </div>
            </div>
  )
}

export default OauthBtn
