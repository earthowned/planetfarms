import React from "react";
import "./main-dashboard.css";
import {  Link } from "react-router-dom";
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout';


function DashboardComponent() {
  return (
    <DashboardLayout>
    <div className="x10-1-0-my-dashboard">
      {/* comes from another branch */}
      <div className="flex-col-5">
              {/* comes from another branch */}
        <div className="dashboard-hero border-1px-onyx">
          <div className="dashboard-info">
            <img className="dashboard-profile-pic" src="./img/DashboardProfilePic.png" alt="dashboard-profile" />
            <div className="flex-col-6">
              <div className="info-my-detail">
                <div className="mikhail-ugryumov ibmplexsans-semi-bold-quarter-spanish-white-24px">
                  Mikhail Ugryumov
                </div>
                <p className="text-1 ibmplexsans-regular-normal-monsoon-16px">Last visit: 5 hours ago</p>
              </div>
              <div className="info-my-community">
                <div className="text-1 ibmplexsans-regular-normal-monsoon-16px">Follow 8 communities</div>
                <div className="my-communities">My communities</div>
              </div>
            </div>
          </div>
          {/* my-profile  */}
          <div className="dashboard-my-profile border-1px-onyx">
            <div className="user">
              <img className="vector-21" src="./img/user.png" />
            </div>
            <div className="my-profile ibmplexsans-semi-bold-quarter-spanish-white-16px">My Profile</div>
          </div>
          {/* achivements  */}
          <Link to="/achievements" className="achivements border-1px-onyx">
            <div className="award">
              <div className="overlap-group-9">
                <img className="vector-23" src="./img/award.png" />
              </div>
            </div>
            <div className="achievements ibmplexsans-semi-bold-quarter-spanish-white-16px">Achievements</div>
          </Link>
          {/* surveys */}
          <div className="surveys border-1px-onyx">
            <div className="check-square-1">
              <div className="overlap-group-10">
                <img className="vector-25" src="./img/check-square1.png" />
              </div>
            </div>
            <div className="surveys-1 ibmplexsans-semi-bold-quarter-spanish-white-16px">Surveys</div>
          </div>
        </div>

        {/* Main Tile */}
        <div className="dashboard-main-container border-1px-onyx">
          <div className="flex-col-7">
            <div className="my-library-tile">
              <div className="book-1">
                <div className="overlap-group-11">
                  <img className="vector-28" src="./img/book.png" alt="book" />
                </div>
              </div>
              <div className="my-library ibmplexsans-semi-bold-quarter-spanish-white-24px">My library</div>
              <SeeAllButton>See all items</SeeAllButton>
            </div>
            <div className="x-tile">
              <div className="book-open-1">
                <div className="overlap-group-12">
                  <img className="vector-30" src="./img/book-open-1.png" />
                </div>
              </div>
              <div className="my-courses ibmplexsans-semi-bold-quarter-spanish-white-24px">My courses</div>
              <SeeAllButton>See all items</SeeAllButton>
            </div>
            <div className="x-tile">
              <div className="users-1">
                <div className="flex-row-4">
                  <img className="vector-31" src="./img/users-1.png" />
                </div>
              </div>
              <div className="my-groups ibmplexsans-semi-bold-quarter-spanish-white-24px">My groups</div>
              <SeeAllButton>See all items</SeeAllButton>
            </div>
          </div>

          {/* library .. 1 */}
          <div className="flex">
            <div className="flex-row-2">
              <MyLibraryTiles overlapGroup8={"./img/my-group-tile.png"} text8="Be happy, find your self! Motivation 2020" className="frame-3061"  />
              <MyLibraryTiles src={"./img/Frame3060.png"} className="frame-3061" />
              <MyLibraryTiles src={"./img/Frame3061.png"}  className="frame-3061"/>
              <MyLibraryTiles src={"./img/Frame3061.png"}  className="frame-3061"/>
            </div>
            {/* courses */}
            <div className="flex-row-2">
              <MyCourseTiles src={"./img/MyCourseTiles2.png"} overlapGroup8="" text8="Be happy, find your self! Motivation 2020" className="frame-3061" />
              <MyCourseTiles src={"./img/MyCourseTiles2.png"} overlapGroup8="" text8="Be happy, find your self! Motivation 2020" className="frame-3061" />
              <MyCourseTiles src={"./img/AddMoreTiles.png"}/>
            </div>

            {/* group */}
            <div className="flex-row-2">
              <MyGroupTiles overlapGroup8={"./img/myGroupTile.png"} text8="Be happy, find your self! Motivation 2020" className="frame-3061" />
              <MyGroupTiles overlapGroup8={"./img/framelib3016.png"} text8="Be happy, find your self! Motivation 2020" className="frame-3061" />
              <MyGroupTiles overlapGroup8={"./img/framelib3061.png"} text8="Be happy, find your self! Motivation 2020" className="frame-3061" />
              <MyGroupTiles overlapGroup8={"./img/myGroupTile.png"} text8="Be happy, find your self! Motivation 2020" className="frame-3061" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </DashboardLayout>
  );
}

export default DashboardComponent;


function SeeAllButton(props) {
  const { children } = props;

  return (
    <div className="frame-4 border-0-5px-quarter-spanish-white">
      <div className="default-i905517 ibmplexsans-semi-bold-quarter-spanish-white-16px">
        {children}
      </div>
    </div>
  );
}


function MyLibraryTiles(props) {
  const { src, overlapGroup8, text8, className } = props;
  return (
    <div className={`my-group-tile border-1px-abbey ${className || ""}`}>
      <div className="overlap-group8" style={{ backgroundImage: `url(${overlapGroup8})` }}>
      <img className="frame-2926" src={src} alt='my-group-tile' />
      </div>
    </div>
  );
}

function MyCourseTiles(props) {
  const { src, overlapGroup8, text8, className } = props;
  return (
    <div className={`my-group-tile border-1px-abbey ${className || ""}`}>
      <div className="overlap-group8" style={{ backgroundImage: `url(${overlapGroup8})` }}>
      <img className="frame-2926" src={src} />
      </div>
    </div>
  );
}

function MyGroupTiles(props) {
  const { src, overlapGroup8, text8, className } = props;
  return (
    <div className={`my-group-tile border-1px-abbey ${className || ""}`}>
      <div className="overlap-group8" style={{ backgroundImage: `url(${overlapGroup8})` }}>
        <p className="text--2 ibmplexsans-semi-bold-quarter-spanish-white-16px">{text8}</p>
      </div>
    </div>
  );
}

