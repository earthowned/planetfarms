import React from "react";
import "./style.css"

function DashboardComponent() {
  return (

    <div className="x10-1-0-my-dashboard">
      {/* comes from another branch */}
      <Sidebar {...SidebarData} />
      <div className="flex-col-5">
              {/* comes from another branch */}
        <DashboardHeader {...dashboardHeaderData} />
        <div className="dashboard-hero border-1px-onyx">
          <div className="dashboard-info">
            <img className="dashboard-profile-pic" src="./img/DashboardProfilePic.png" alt="dashboard-profile" />
            <div className="flex-col-6">
              <div className="info-my-detail">
                <div className="mikhail-ugryumov ibmplexsans-semi-bold-quarter-spanish-white-24px">
                  Mikhail Ugryumov
                </div>
                <p className="text- ibmplexsans-regular-normal-monsoon-16px">Last visit: 5 hours ago</p>
              </div>
              <div className="info-my-community">
                <div className="text- ibmplexsans-regular-normal-monsoon-16px">Follow 8 communities</div>
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
          <div className="achivements border-1px-onyx">
            <div className="award">
              <div className="overlap-group-9">
                <img className="vector-23" src="./img/award.png" />
              </div>
            </div>
            <div className="achievements ibmplexsans-semi-bold-quarter-spanish-white-16px">Achievements</div>
          </div>
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
          {/* Tiles .. 1 */}
          <div className="flex-col-8">
            <MyLibraryTiles src="./img/my-group-tile.png" />
            <MyCourseTiles className="my-course-tiles" text8="Be happy, find your self! Motivation 2020" />
            <MyGroupTiles className="my-group-tile" src="./img/myGroupTile.png" />
          </div>
          {/* Tiles .. 2 */}
          <div className="flex-col-2">
           <MyLibraryTiles src="./img/my-group-tile.png" />
            <MyCourseTiles overlapGroup8="" text8="Be happy, find your self! Motivation 2020" />
            <MyGroupTiles className="my-group-tile" src="" />
          </div>
          {/* Tiles .. 3 */}
          <div className="flex-col-2">
            <MyCourseTiles overlapGroup8="" text8="Be happy, find your self! Motivation 2020" className="frame-3061" />
            <div className="add-more-tiles border-1px-onyx">
              <div className="plus-1">
                <div className="overlap-group-13">
                  {/* <img className="vector-36" src="./img/plus-1.png" /> */}
                  <img className="vector-36" src="./img/plus-1.png" />
                </div>
              </div>
              <div className="add-course">Add course</div>
            </div>
            <MyCourseTiles
              overlapGroup8=""
              text8="Be happy, find your self! Motivation 2020"
              className="frame-3061-1"
            />
          </div>
          <div className="flex-col-2">
            <div className="overlap-group3">
              <MyCourseTiles
                overlapGroup8=""
                text8="Be happy, find your self! Motivation 2020"
                className="frame-3064"
              />
              <MoreIconGroup vector2="" />
            </div>
            <div className="overlap-group4">
              <MyCourseTiles
                overlapGroup8=""
                text8="Be happy, find your self! Motivation 2020"
                className="frame-3064"
              />
              <MoreIconGroup vector2="" />
            </div>
          </div>
          <div className="flex-col-9">
            <div className="overlap-group5">
              <div className="frame-3063">
                <div className="frame-1971">
                  <div className="play-button-1"></div>
                </div>
                <p className="text--3 valign-text-middle inter-medium-white-16px">
                  Be happy, find your self! Motivation 2020
                </p>
              </div>
              <MoreIconGroup vector2="" className="frame-2970" />
            </div>
            <div className="overlap-group-7">
              <div className="frame-3063">
                <div className="frame-1971">
                  <div className="play-button-1"></div>
                </div>
                <p className="text--3 valign-text-middle inter-medium-white-16px">
                  Be happy, find your self! Motivation 2020
                </p>
              </div>
              <MoreIconGroup vector2="" className="frame-2970" />
            </div>
            <div className="overlap-group-7">
              <div className="frame-3063">
                <div className="frame-1971">
                  <div className="play-button-1"></div>
                </div>
                <p className="text--3 valign-text-middle inter-medium-white-16px">
                  Be happy, find your self! Motivation 2020
                </p>
              </div>
              <MoreIconGroup vector2="" className="frame-2970" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardComponent;


function Sidebar(props) {
  const {
    vector2,
    vector3,
    vector4,
    vector5,
    vector6,
    vector7,
    vector8,
    vector9,
    vector10,
    vector11,
    vector12,
    vector13,
    vector14,
    vector15,
    vector16,
    text14,
    text16,
    text15,
    text17,
    vector17,
    vector18,
    text21,
    number,
    number2,
    number3,
    number4,
    text20,
    union,
    vector19,
    vector20,
    text18,
    graduationCap,
    text19,
    chevronsLeftProps,
    chevronsLeft2Props,
    frame2849Props,
    frame28492Props,
    frame28493Props,
    frame28494Props,
    frame28495Props,
    frame28496Props,
    frame2857Props,
    frame28497Props,
    frame28498Props,
    frame28499Props,
    frame2885Props,
    frame284910Props,
    frame28572Props,
    frame284911Props,
    frame284912Props,
    frame284913Props,
    frame28852Props,
    frame284914Props,
    frame284915Props,
    frame284916Props,
    frame284917Props,
    frame28853Props,
    frame284918Props,
    frame28573Props,
    frame284919Props,
    frame284920Props,
    frame284921Props,
    frame28854Props,
    frame284922Props,
    frame28574Props,
    frame284923Props,
    frame284924Props,
    frame284925Props,
    frame28855Props,
    frame2855Props,
    frame28552Props,
    frame28553Props,
    frame28554Props,
  } = props;

  return (
    <div className="sidebar">
      <div className="frame-1945">
        <div className="frame">
          <img className="vector" src="" />
          <img className="vector-10" src={vector2} />
          <img className="vector-1" src={vector3} />
          <img className="vector-2" src={vector4} />
          <img className="vector-1" src={vector5} />
          <img className="vector-2" src={vector6} />
        </div>
        <div className="frame-2891 border-1px-quarter-spanish-white">
          <div className="grid-outline-2">
            <div className="flex-col">
              <img className="vector-3" src={vector7} />
              <img className="vector-4" src={vector8} />
            </div>
            <div className="flex-col-3">
              <img className="vector-3" src={vector9} />
              <img className="vector-4" src={vector10} />
            </div>
          </div>
        </div>
      </div>
      <div className="overlap-group11">
        <div className="frame-1944">
          <div className="frame-1953">
            <div className="user-management">
              <div className="flex-row">
                <img className="vector-5" src={vector11} />
                <img className="vector-3" src={vector12} />
                <img className="vector-5" src={vector13} />
              </div>
              <div className="flex-row-1">
                <img className="vector-6" src={vector14} />
                <img className="vector-11" src={vector15} />
                <img className="vector-6" src={vector16} />
              </div>
            </div>
            <div className="text-1 ibmplexsans-semi-bold-white-16px">{text14}</div>
          </div>
          <div className="text-16 ibmplexsans-semi-bold-quarter-spanish-white-14px">{text16}</div>
          <div className="text-15 ibmplexsans-semi-bold-quarter-spanish-white-14px">{text15}</div>
          <div className="text-17 ibmplexsans-semi-bold-quarter-spanish-white-14px">{text17}</div>
          <div className="frame-1977"></div>
          <div className="frame-1978"></div>
        </div>
        <div className="rectangle-859"></div>
        <div className="frame-2303">
          <div className="chevrons-right-1">
            <img className="vector-7" src={vector17} />
            <img className="vector-7" src={vector18} />
          </div>
        </div>
        <div className="calander">
          <div className="frame-2891-1">
            <div className="rectangle-861"></div>
            <div className="flex-row-2">
              <ChevronsLeft src={chevronsLeftProps.src} />
              <div className="text-21 valign-text-middle ibmplexsans-regular-normal-ebb-14px">{text21}</div>
              <ChevronsLeft src={chevronsLeft2Props.src} className="chevrons-right" />
            </div>
            <div className="rectangle-860"></div>
          </div>
          <div className="overlap-group">
            <div className="frame-2791">
              <div className="rectangle-859-4"></div>
              <div className="group-1942">
                <div className="flex-row-3">
                  <div className="flex-col-1">
                    <Frame2849>{frame2849Props.children}</Frame2849>
                    <Frame2849>{frame28492Props.children}</Frame2849>
                    <Frame2849>{frame28493Props.children}</Frame2849>
                    <Frame2849>{frame28494Props.children}</Frame2849>
                    <Frame2849>{frame28495Props.children}</Frame2849>
                    <div className="frame-288">
                      <div className="number valign-text-middle ibmplexsans-regular-normal-ebb-14px">{number}</div>
                      <div className="rectangle-859-2"></div>
                    </div>
                  </div>
                  <div className="flex-col-1">
                    <Frame2849>{frame28496Props.children}</Frame2849>
                    <Frame2857>{frame2857Props.children}</Frame2857>
                    <Frame2849>{frame28497Props.children}</Frame2849>
                    <Frame2849>{frame28498Props.children}</Frame2849>
                    <Frame2849>{frame28499Props.children}</Frame2849>
                    <Frame2885>{frame2885Props.children}</Frame2885>
                  </div>
                  <div className="flex-col-1">
                    <Frame2849>{frame284910Props.children}</Frame2849>
                    <Frame2857>{frame28572Props.children}</Frame2857>
                    <Frame2849>{frame284911Props.children}</Frame2849>
                    <Frame2849>{frame284912Props.children}</Frame2849>
                    <Frame2849>{frame284913Props.children}</Frame2849>
                    <Frame2885>{frame28852Props.children}</Frame2885>
                  </div>
                  <div className="flex-col-1">
                    <Frame2849>{frame284914Props.children}</Frame2849>
                    <Frame2849>{frame284915Props.children}</Frame2849>
                    <Frame2849>{frame284916Props.children}</Frame2849>
                    <div className="frame-2873">
                      <div className="number-3 valign-text-middle ibmplexsans-bold-shark-14px">{number2}</div>
                    </div>
                    <Frame2849>{frame284917Props.children}</Frame2849>
                    <Frame2885>{frame28853Props.children}</Frame2885>
                  </div>
                  <div className="flex-col-1">
                    <Frame2849>{frame284918Props.children}</Frame2849>
                    <Frame2857>{frame28573Props.children}</Frame2857>
                    <Frame2849>{frame284919Props.children}</Frame2849>
                    <Frame2849>{frame284920Props.children}</Frame2849>
                    <Frame2849>{frame284921Props.children}</Frame2849>
                    <Frame2885>{frame28854Props.children}</Frame2885>
                  </div>
                  <div className="flex-col-1">
                    <Frame2849>{frame284922Props.children}</Frame2849>
                    <Frame2857>{frame28574Props.children}</Frame2857>
                    <Frame2849>{frame284923Props.children}</Frame2849>
                    <Frame2849>{frame284924Props.children}</Frame2849>
                    <Frame2849>{frame284925Props.children}</Frame2849>
                    <Frame2885>{frame28855Props.children}</Frame2885>
                  </div>
                </div>
                <div className="flex-col-4">
                  <Frame2855>{frame2855Props.children}</Frame2855>
                  <div className="frame-28-1">
                    <div className="overlap-group36">
                      <div className="rectangle-865"></div>
                      <div className="number-1 valign-text-middle ibmplexsans-bold-caribbean-green-14px">{number3}</div>
                    </div>
                    <div className="overlap-group-3">
                      <div className="rectangle-859-3"></div>
                      <div className="rectangle-860-2"></div>
                    </div>
                  </div>
                  <Frame2855>{frame28552Props.children}</Frame2855>
                  <Frame2855>{frame28553Props.children}</Frame2855>
                  <Frame2855>{frame28554Props.children}</Frame2855>
                  <div className="frame-2890">
                    <div className="number-2 valign-text-middle ibmplexsans-regular-normal-onyx-14px">{number4}</div>
                    <div className="rectangle-859-5"></div>
                  </div>
                </div>
              </div>
              <div className="frame-285 border-1px-caribbean-green">
                <div className="text-20 valign-text-middle">{text20}</div>
              </div>
            </div>
            <img className="union" src={union} />
          </div>
        </div>
      </div>
      <div className="frame-1947">
        <div className="book">
          <div className="overlap-group-5">
            <img className="vector-12" src={vector19} />
            <img className="vector-13" src={vector20} />
          </div>
        </div>
        <div className="text-18 ibmplexsans-semi-bold-quarter-spanish-white-16px">{text18}</div>
      </div>
      <div className="frame-1948">
        <div className="graduation-cap-1">
          <img className="graduation-cap" src={graduationCap} />
        </div>
        <div className="text-19 ibmplexsans-semi-bold-quarter-spanish-white-16px">{text19}</div>
      </div>
    </div>
  );
}


function ChevronsLeft(props) {
  const { src, className } = props;

  return (
    <div className={`chevrons-left ${className || ""}`}>
      <img className="vector-stroke" src={src} />
    </div>
  );
}


function Frame2849(props) {
  const { children } = props;

  return (
    <div className="frame-28">
      <div className="place valign-text-middle ibmplexsans-regular-normal-ebb-14px">{children}</div>
      <div className="overlap-group-1">
        <div className="rectangle-859-1"></div>
        <div className="rectangle-860-1"></div>
      </div>
    </div>
  );
}


function Frame2857(props) {
  const { children } = props;

  return (
    <div className="frame-28">
      <div className="overlap-group-2">
        <div className="number-1 valign-text-middle ibmplexsans-bold-caribbean-green-14px">{children}</div>
        <div className="rectangle-86"></div>
      </div>
      <div className="overlap-group-1">
        <div className="rectangle-859-1"></div>
        <div className="rectangle-860-1"></div>
      </div>
    </div>
  );
}


function Frame2885(props) {
  const { children } = props;

  return (
    <div className="frame-288">
      <div className="number-2 valign-text-middle ibmplexsans-regular-normal-ebb-14px">{children}</div>
      <div className="rectangle-859-2"></div>
    </div>
  );
}


function Frame2855(props) {
  const { children } = props;

  return (
    <div className="frame-28-1">
      <div className="su-i57106648926 valign-text-middle ibmplexsans-regular-normal-ebb-14px">{children}</div>
      <div className="overlap-group-3">
        <div className="rectangle-859-3"></div>
        <div className="rectangle-860-2"></div>
      </div>
    </div>
  );
}


function DashboardHeader(props) {
  const { ragrariansI1454626, vector2, vector3, text1, vector4, vector5, vector6, vector7, frame1951 } = props;

  return (
    <div className="dashboard-header">
      <h1 className="ragrarians-i1454626 ibmplexsans-semi-bold-quarter-spanish-white-24px">{ragrariansI1454626}</h1>
      <div className="frame-2848">
        <div className="person-outline-1">
          <img className="vector-14" src="" />
          <img className="vector-15" src={vector2} />
          <img className="vector-16" src={vector3} />
        </div>
        <div className="text-1 ibmplexsans-semi-bold-quarter-spanish-white-16px">{text1}</div>
      </div>
      <div className="frame-1973">
        <div className="email-outline">
          <div className="overlap-group-8">
            <img className="vector-17" src={vector4} />
            <img className="vector-18" src={vector5} />
          </div>
        </div>
        <div className="bell-outline">
          <div className="overlap-group1">
            <img className="vector-19" src={vector6} />
            <img className="vector-20" src={vector7} />
          </div>
        </div>
        <div className="frame-1951" style={{ backgroundImage: `url(${frame1951})` }}></div>
      </div>
    </div>
  );
}


function SeeAllButton(props) {
  const { children } = props;

  return (
    <div className="frame-4 border-0-5px-quarter-spanish-white">
      <div className="default-i905517 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
        {children}
      </div>
    </div>
  );
}


function MyLibraryTiles(props) {
  const { src, className } = props;

  return (
    <div className={`my-library-tiles border-1px-onyx ${className || ""}`}>
      <img className="frame-2926" src={"./img/my-group-tile.png"} />
    </div>
  );
}


function Frame3060(props) {
  const { overlapGroup1, playButton1, text4, className } = props;

  return (
    <div className={`frame-3060 border-1px-abbey ${className || ""}`}>
      <div className="overlap-group-4" style={{ backgroundImage: `url(${overlapGroup1})` }}>
        <div className="frame-1971-1">
          <div className="play-button-1-1" style={{ backgroundImage: `url(${playButton1})` }}></div>
        </div>
        <p className="text--1 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">{text4}</p>
      </div>
    </div>
  );
}


function MyCourseTiles(props) {
  const { overlapGroup8, text8, className } = props;

  return (
    <div className={`my-course-tiles2 border-1px-abbey ${className || ""}`}>
      <div className="overlap-group8" style={{ backgroundImage: `url(${overlapGroup8})` }}>
      <img className="frame-2926" src={"./img/my-group-tile.png"} />
      </div>
    </div>
  );
}

function MyGroupTiles(props) {
  const { overlapGroup8, text8, className } = props;

  return (
    <div className={`my-group-tile border-1px-abbey ${className || ""}`}>
      <div className="overlap-group8" style={{ backgroundImage: `url(${overlapGroup8})` }}>
        <p className="text--2 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">{text8}</p>
      </div>
    </div>
  );
}


function MoreIconGroup(props) {
  const { vector2, className } = props;

  return (
    <div className={`more-icon-group ${className || ""}`}>
      <div className="arrow-forward-outline-1">
        <div className="overlap-group-6">
          <img className="vector-8" src="" />
          <img className="vector-9" src={vector2} />
        </div>
      </div>
    </div>
  );
}
const chevronsLeftData = {
    src: "",
};

const chevronsLeft2Data = {
    src: "",
};

const frame2849Data = {
    children: "Mo",
};

const frame28492Data = {
    children: "1",
};

const frame28493Data = {
    children: "8",
};

const frame28494Data = {
    children: "15",
};

const frame28495Data = {
    children: "22",
};

const frame28496Data = {
    children: "Tu",
};

const frame2857Data = {
    children: "2",
};

const frame28497Data = {
    children: "9",
};

const frame28498Data = {
    children: "16",
};

const frame28499Data = {
    children: "23",
};

const frame2885Data = {
    children: "30",
};

const frame284910Data = {
    children: "We",
};

const frame28572Data = {
    children: "3",
};

const frame284911Data = {
    children: "10",
};

const frame284912Data = {
    children: "17",
};

const frame284913Data = {
    children: "24",
};

const frame28852Data = {
    children: "1",
};

const frame284914Data = {
    children: "Th",
};

const frame284915Data = {
    children: "4",
};

const frame284916Data = {
    children: "11",
};

const frame284917Data = {
    children: "25",
};

const frame28853Data = {
    children: "2",
};

const frame284918Data = {
    children: "Fr",
};

const frame28573Data = {
    children: "5",
};

const frame284919Data = {
    children: "12",
};

const frame284920Data = {
    children: "19",
};

const frame284921Data = {
    children: "26",
};

const frame28854Data = {
    children: "3",
};

const frame284922Data = {
    children: "Sa",
};

const frame28574Data = {
    children: "6",
};

const frame284923Data = {
    children: "13",
};

const frame284924Data = {
    children: "20",
};

const frame284925Data = {
    children: "27",
};

const frame28855Data = {
    children: "4",
};

const frame2855Data = {
    children: "Su",
};

const frame28552Data = {
    children: "14",
};

const frame28553Data = {
    children: "21",
};

const frame28554Data = {
    children: "28",
};

const SidebarData = {
    vector2: "",
    vector3: "",
    vector4: "",
    vector5: "",
    vector6: "",
    vector7: "",
    vector8: "",
    vector9: "",
    vector10: "",
    vector11: "",
    vector12: "",
    vector13: "",
    vector14: "",
    vector15: "",
    vector16: "",
    text14: "Ragrarians",
    text16: "Members",
    text15: "Groups",
    text17: "Enterprises",
    vector17: "",
    vector18: "",
    text21: "January",
    number: "29",
    number2: "18",
    number3: "7",
    number4: "5",
    text20: "View calendar",
    union: "",
    vector19: "",
    vector20: "",
    text18: "Library",
    graduationCap: "",
    text19: "Courses",
    chevronsLeftProps: chevronsLeftData,
    chevronsLeft2Props: chevronsLeft2Data,
    frame2849Props: frame2849Data,
    frame28492Props: frame28492Data,
    frame28493Props: frame28493Data,
    frame28494Props: frame28494Data,
    frame28495Props: frame28495Data,
    frame28496Props: frame28496Data,
    frame2857Props: frame2857Data,
    frame28497Props: frame28497Data,
    frame28498Props: frame28498Data,
    frame28499Props: frame28499Data,
    frame2885Props: frame2885Data,
    frame284910Props: frame284910Data,
    frame28572Props: frame28572Data,
    frame284911Props: frame284911Data,
    frame284912Props: frame284912Data,
    frame284913Props: frame284913Data,
    frame28852Props: frame28852Data,
    frame284914Props: frame284914Data,
    frame284915Props: frame284915Data,
    frame284916Props: frame284916Data,
    frame284917Props: frame284917Data,
    frame28853Props: frame28853Data,
    frame284918Props: frame284918Data,
    frame28573Props: frame28573Data,
    frame284919Props: frame284919Data,
    frame284920Props: frame284920Data,
    frame284921Props: frame284921Data,
    frame28854Props: frame28854Data,
    frame284922Props: frame284922Data,
    frame28574Props: frame28574Data,
    frame284923Props: frame284923Data,
    frame284924Props: frame284924Data,
    frame284925Props: frame284925Data,
    frame28855Props: frame28855Data,
    frame2855Props: frame2855Data,
    frame28552Props: frame28552Data,
    frame28553Props: frame28553Data,
    frame28554Props: frame28554Data,
};

const dashboardHeaderData = {
    ragrariansI1454626: "My dashboard",
    vector2: "",
    vector3: "",
    text1: "My dashboard",
    vector4: "",
    vector5: "",
    vector6: "",
    vector7: "",
    frame1951: "",
};

