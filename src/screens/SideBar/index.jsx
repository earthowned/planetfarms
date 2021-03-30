import React from "react";
function Dashboard(props) {
  return (
    <div className="dashboard">
      <div className="title-icon">
        <div className="frame">
          <img className="vector" src="img/vector.png" />
          <img className="vector-8"  src="/img/Vector1.png"/>
          <img className="vector-1"  src="img/Vector2.png" />
          <img className="vector-2" src="img/Vector3.png" />
          <img className="vector-1" src="img/Vector4.png" />
          <img className="vector-2" src="img/Vector5.png"/>
        </div>
        <div className="frame-2891 border-1px-quarter-spanish-white">
          <div className="grid-outline-2">
            <div className="flex-col">
            <img
               className="vector-3"
                 src="img/grid.png"
                 style={{ height: "20px", width: "20px" }}
               />
            </div>
          
          </div>
        </div>
      </div>
      <div className="overlap-group">
        <div className="menu-list">
          <div className="active-menu" >
            <div className="user-management">
              <div className="flex-row" >
                <img className="vector-5" src="img/ragarians-icons.png"  />
          <img className="vector-3" src="" />
          <img className="vector-5" src="" />
              </div>
              <div className="flex-row-1">
                <img className="vector-6" src="" />
                <img className="vector-9" src="" />
                <img className="vector-6" src="" />
              </div>
            </div>
            <div className="text-1 ibmplexsans-semi-bold-shark-16px">Ragrarians</div>
          </div>
          <div className="text-3 ibmplexsans-semi-bold-quarter-spanish-white-16px">Members</div>
          <div className="text-2 ibmplexsans-semi-bold-quarter-spanish-white-16px">Groups</div>
          <div className="text-4 ibmplexsans-semi-bold-quarter-spanish-white-16px">Enterprises</div>
          <div className="frame-1977"></div>
          <div className="frame-1978"></div>
        </div>
        <div className="rectangle-859"></div>
        <div className="arrow-icon">
          <div className="chevrons-right-1">
          <img className="vector-7" src="img/arrow-icon.png" />
           <img className="vector-7" src="img/arrow-icon.png" />
          </div>
        </div>
      </div>
      <div className="library-menuu-button">
        <div className="book">
          <div className="overlap-group1-1">
          <img className="vector-11" src="img/book.png" />
          </div>
        </div>
        <div className="text-5 ibmplexsans-semi-bold-quarter-spanish-white-16px">Library</div>
      </div>
      <div className="course-menu-button">
        <div className="graduation-cap-1">
        <img className="graduation-cap" src="img/graduation-cap 1.png" />
        </div>
        <div className="text-6 ibmplexsans-semi-bold-quarter-spanish-white-16px">Courses</div>
      </div>
    </div>
  );
}
export default Dashboard




