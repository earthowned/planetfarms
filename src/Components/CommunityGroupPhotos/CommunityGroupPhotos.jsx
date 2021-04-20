import React from 'react'

const CommunityGroupPhotos = () => {
    return (
        <div className="group-photo">
        <div className="group-photo-title">
          <div className="enterprise-photos-i5 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-24px">
            Group Photos
          </div>
        </div>
        <div className="flex-row-4">
          <div
            className="photo"
            style={{ backgroundImage: `url(${"/img/group-photo-2.svg"})` }}
          ></div>
          <div
            className="frame-296"
            style={{ backgroundImage: `url(${"/img/group-photo-1.svg"})` }}
          ></div>
          <div
            className="frame-296"
            style={{ backgroundImage: `url(${"/img/group-photo-3.svg"})` }}
          ></div>
          <div
            className="frame-296"
            style={{ backgroundImage: `url(${"/img/group-photo-2.svg"})` }}
          ></div>
          <div className="overlap-group1-2">
            <div
              className="frame-2969"
              style={{ backgroundImage: `url(${"/img/group-photo-1.svg"})` }}
            ></div>
            <div className="arrow">
              <div className="arrow-forward-outline-1">
                <div className="overlap-group-6">
                  <img className="group-arrow-icon" src="img/arrow-icon.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default CommunityGroupPhotos

