import React from "react";
import "./style.css";
import Dashboard from '../../components/SideBar/index'

function App() {
  return <X0300CommunityPagenews {...X0300CommunityPagenewsData} />;
}

export default App;

function X0300CommunityPagenews(props) {
  const {
    vector2,
    search,
    addNews,
    frame1969,
    address,
    text17,
    date,
    text22,
    farming,
    people,
    nature,
    carsIndustry,
    mediaNews,
    seeAllTopics,
    frame19692,
    text19,
    date2,
    frame19693,
    text21,
    date3,
    ellipse15,
    address2,
    dashboardProps,
    dashboardnavProps,
    frame3501Props,
    frame3470Props,
    frame35012Props,
    frame34702Props,
    frame35013Props,
  } = props;

  return (
    <div className="x03-0-0-community-page-news">
      <Dashboard {...dashboardProps} />
      <div className="flex-col-4">
        <Dashboardnav {...dashboardnavProps} />
        <div className="flex-row-4">
          <div className="search border-1px-onyx">
            <div className="search-outline-1">
              <div className="overlap-group-6">
                {/* <img className="vector-19" src="img/search-outline 1.png" /> */}
                <img className="vector-20" src="img/search-outline 1.png" />
              </div>
            </div>
            <input type="text" placeholder="Search..." className="search-1" />
          </div>
          <div className="add-news-button">
            <div className="add-news ibmplexsans-semi-bold-shark-16px">
              {addNews}
            </div>
          </div>
        </div>
        <div className="flex-row-5">
          <div className="news-1 border-1px-onyx">
            <div className="overlap-group4">
              <div
                className="frame-1969"
                style={{ backgroundImage: `url(${frame1969})` }}
              >
                <div className="overlap-group-7">
                  <div className="frame-3470 border-0-5px-quarter-spanish-white">
                    <div className="address ibmplexsans-regular-normal-quarter-spanish-white-14px">
                      {address}
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-1979">
                <Frame3501
                  farming={frame3501Props.farming}
                  text16={frame3501Props.text16}
                />
                <p className="text--1 ibmplexsans-regular-normal-quarter-spanish-white-16px">
                  {text17}
                </p>
                <div className="date-1 ibmplexsans-regular-normal-quarter-spanish-white-14px">
                  {date}
                </div>
              </div>
            </div>
          </div>
          <div className="filter-container border-1px-onyx">
            <p className="text-22 ibmplexsans-semi-bold-quarter-spanish-white-16px">
              {text22}
            </p>
            <div className="flex-row-6">
              <div className="filter-button-5 border-1px-onyx">
                <div className="farming-1 ibmplexsans-semi-bold-quarter-spanish-white-16px">
                  {farming}
                </div>
              </div>
              <div className="filter-button-2 border-1px-onyx">
                <div className="people ibmplexsans-semi-bold-quarter-spanish-white-16px">
                  {people}
                </div>
              </div>
              <div className="filter-button-1 border-1px-onyx">
                <div className="nature ibmplexsans-semi-bold-quarter-spanish-white-16px">
                  {nature}
                </div>
              </div>
            </div>
            <div className="flex-row-7">
              <div className="filter-button-4 border-1px-onyx">
                <div className="cars-industry ibmplexsans-semi-bold-quarter-spanish-white-16px">
                  {carsIndustry}
                </div>
              </div>
              <div className="filter-button-3 border-1px-onyx">
                <div className="media-news ibmplexsans-semi-bold-quarter-spanish-white-16px">
                  {mediaNews}
                </div>
              </div>
            </div>
            <div className="see-all-topics ibmplexsans-semi-bold-quarter-spanish-white-16px">
              {seeAllTopics}
            </div>
          </div>
        </div>
        <div className="news-2 border-1px-onyx">
          <div className="overlap-group4">
            <div className="frame-1969-1">
              <div className="overlap-group-8">
                <div className="rectangle-1201"></div>
                <Frame3470>12 min read</Frame3470>
              </div>
            </div>
            <div className="frame-3469">
              <Frame3501 farming="PEOPLE" text16="Fueling the ethanol industry" />
              <p className="text-19 ibmplexsans-regular-normal-quarter-spanish-white-16px">
                Ethanol, which is sometimes known as ethyl alcohol, is a kind of alcohol derived from corn, sugarcane,
                and grain or indirectly from paper waste.
              </p>
              <div className="date-1 ibmplexsans-regular-normal-quarter-spanish-white-14px">November 01, 2020</div>
            </div>
          </div>
        </div>
        <div className="news-3 border-1px-onyx">
          <div className="overlap-group43">
            <div
              className="frame-1969-2"
              style={{ backgroundImage: `url("img/bg-news-image-2.png")` }}
            ></div>
            <div className="rectangle-1201"></div>
            <Frame3470>{frame34702Props.children}</Frame3470>
            <div className="frame-1979-1">
              <Frame3501
                farming={frame35013Props.farming}
                text16={frame35013Props.text16}
              />
              <p className="text--1 ibmplexsans-regular-normal-quarter-spanish-white-16px">
                {text21}
              </p>
              <div className="frame-2789">
                <div className="date inter-medium-quarter-spanish-white-14px">
                  {date3}
                </div>
                <img className="ellipse-15" src={ellipse15} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// function Dashboard(props) {
//   const {
//     vector,
//     vector2,
//     vector3,
//     vector4,
//     vector5,
//     vector6,
//     vector7,
//     vector8,
//     vector9,
//     vector10,
//     vector11,
//     vector12,
//     vector13,
//     vector14,
//     vector15,
//     vector16,
//     text1,
//     text3,
//     text2,
//     text4,
//     vector17,
//     vector18,
//     text14,
//     number,
//     number2,
//     number3,
//     number4,
//     text13,
//     union,
//     vector19,
//     vector20,
//     text5,
//     graduationCap,
//     text6,
//     chevronsLeftProps,
//     chevronsLeft2Props,
//     frame2849Props,
//     frame28492Props,
//     frame28493Props,
//     frame28494Props,
//     frame28495Props,
//     frame28496Props,
//     frame2857Props,
//     frame28497Props,
//     frame28498Props,
//     frame28499Props,
//     frame2885Props,
//     frame284910Props,
//     frame28572Props,
//     frame284911Props,
//     frame284912Props,
//     frame284913Props,
//     frame28852Props,
//     frame284914Props,
//     frame284915Props,
//     frame284916Props,
//     frame284917Props,
//     frame28853Props,
//     frame284918Props,
//     frame28573Props,
//     frame284919Props,
//     frame284920Props,
//     frame284921Props,
//     frame28854Props,
//     frame284922Props,
//     frame28574Props,
//     frame284923Props,
//     frame284924Props,
//     frame284925Props,
//     frame28855Props,
//     frame2855Props,
//     frame28552Props,
//     frame28553Props,
//     frame28554Props,
//   } = props;

//   return (
//     <div className="dashboard">
//       <div className="title-icon">
//         <div className="frame">
//           <img className="vector" src={vector} />
//           <img className="vector-8" src="/img/Vector1.png" />
//           <img className="vector-1" src="img/Vector2.png" />
//           <img className="vector-2" src="img/Vector3.png" />
//           <img className="vector-1" src="img/Vector4.png" />
//           <img className="vector-2" src="img/Vector5.png" />
//         </div>
//         <div className="frame-2891 border-1px-quarter-spanish-white">
//           <div className="grid-outline-2">
//             <div className="flex-col">
//               <img
//                 className="vector-3"
//                 src="img/grid.png"
//                 style={{ height: "20px", width: "20px" }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="overlap-group1">
//         <div className="menu-list">
//           <div className="active-menu">
//             <div className="user-management">
//               <div className="flex-row">
//                 <img className="vector-5" src={vector11} />
//                 <img className="vector-3" src={vector12} />
//                 <img className="vector-5" src={vector13} />
//               </div>
//               <div className="flex-row-1">
//                 <img className="vector-6" src={vector14} />
//                 <img className="vector-9" src={vector15} />
//                 <img className="vector-6" src={vector16} />
//               </div>
//             </div>
//             <div className="text-1 ibmplexsans-semi-bold-shark-16px">
//               {text1}
//             </div>
//           </div>
//           <div className="text-3 ibmplexsans-semi-bold-quarter-spanish-white-16px">
//             {text3}
//           </div>
//           <div className="text-2 ibmplexsans-semi-bold-quarter-spanish-white-16px">
//             {text2}
//           </div>
//           <div className="text-4 ibmplexsans-semi-bold-quarter-spanish-white-16px">
//             {text4}
//           </div>
//           <div className="frame-1977"></div>
//           <div className="frame-1978"></div>
//         </div>
//         <div className="rectangle-859"></div>
//         <div className="arrow-icon">
//           <div className="chevrons-right-1">
//             <img className="vector-7" src="img/arrow-icon.png" />
//             <img className="vector-7" src="img/arrow-icon.png" />
//           </div>
//         </div>
//         <div className="calender">
//           <div className="frame-2891-1">
//             <div className="rectangle-861"></div>
//             <div className="flex-row-2">
//               <ChevronsLeft src={chevronsLeftProps.src} />
//               <div className="text-14 valign-text-middle ibmplexsans-regular-normal-ebb-14px">
//                 {text14}
//               </div>
//               <ChevronsLeft
//                 src={chevronsLeft2Props.src}
//                 className="chevrons-right"
//               />
//             </div>
//             <div className="rectangle-860"></div>
//           </div>
//           <div className="overlap-group">
//             <div className="frame-2791">
//               <div className="rectangle-859-4"></div>
//               <div className="group-1942">
//                 <div className="flex-row-3">
//                   <div className="flex-col-1">
//                     <Frame2849>{frame2849Props.children}</Frame2849>
//                     <Frame2849>{frame28492Props.children}</Frame2849>
//                     <Frame2849>{frame28493Props.children}</Frame2849>
//                     <Frame2849>{frame28494Props.children}</Frame2849>
//                     <Frame2849>{frame28495Props.children}</Frame2849>
//                     <div className="frame-288">
//                       <div className="number valign-text-middle ibmplexsans-regular-normal-ebb-14px">
//                         {number}
//                       </div>
//                       <div className="rectangle-859-2"></div>
//                     </div>
//                   </div>
//                   <div className="flex-col-1">
//                     <Frame2849>{frame28496Props.children}</Frame2849>
//                     <Frame2857>{frame2857Props.children}</Frame2857>
//                     <Frame2849>{frame28497Props.children}</Frame2849>
//                     <Frame2849>{frame28498Props.children}</Frame2849>
//                     <Frame2849>{frame28499Props.children}</Frame2849>
//                     <Frame2885>{frame2885Props.children}</Frame2885>
//                   </div>
//                   <div className="flex-col-1">
//                     <Frame2849>{frame284910Props.children}</Frame2849>
//                     <Frame2857>{frame28572Props.children}</Frame2857>
//                     <Frame2849>{frame284911Props.children}</Frame2849>
//                     <Frame2849>{frame284912Props.children}</Frame2849>
//                     <Frame2849>{frame284913Props.children}</Frame2849>
//                     <Frame2885>{frame28852Props.children}</Frame2885>
//                   </div>
//                   <div className="flex-col-1">
//                     <Frame2849>{frame284914Props.children}</Frame2849>
//                     <Frame2849>{frame284915Props.children}</Frame2849>
//                     <Frame2849>{frame284916Props.children}</Frame2849>
//                     <div className="frame-2873">
//                       <div className="number-3 valign-text-middle">
//                         {number2}
//                       </div>
//                     </div>
//                     <Frame2849>{frame284917Props.children}</Frame2849>
//                     <Frame2885>{frame28853Props.children}</Frame2885>
//                   </div>
//                   <div className="flex-col-1">
//                     <Frame2849>{frame284918Props.children}</Frame2849>
//                     <Frame2857>{frame28573Props.children}</Frame2857>
//                     <Frame2849>{frame284919Props.children}</Frame2849>
//                     <Frame2849>{frame284920Props.children}</Frame2849>
//                     <Frame2849>{frame284921Props.children}</Frame2849>
//                     <Frame2885>{frame28854Props.children}</Frame2885>
//                   </div>
//                   <div className="flex-col-1">
//                     <Frame2849>{frame284922Props.children}</Frame2849>
//                     <Frame2857>{frame28574Props.children}</Frame2857>
//                     <Frame2849>{frame284923Props.children}</Frame2849>
//                     <Frame2849>{frame284924Props.children}</Frame2849>
//                     <Frame2849>{frame284925Props.children}</Frame2849>
//                     <Frame2885>{frame28855Props.children}</Frame2885>
//                   </div>
//                 </div>
//                 <div className="flex-col-3">
//                   <Frame2855>{frame2855Props.children}</Frame2855>
//                   <div className="frame-28-1">
//                     <div className="overlap-group37">
//                       <div className="rectangle-865"></div>
//                       <div className="number-1 valign-text-middle ibmplexsans-bold-caribbean-green-14px">
//                         {number3}
//                       </div>
//                     </div>
//                     <div className="overlap-group-3">
//                       <div className="rectangle-859-3"></div>
//                       <div className="rectangle-860-2"></div>
//                     </div>
//                   </div>
//                   <Frame2855>{frame28552Props.children}</Frame2855>
//                   <Frame2855>{frame28553Props.children}</Frame2855>
//                   <Frame2855>{frame28554Props.children}</Frame2855>
//                   <div className="frame-2890">
//                     <div className="number-2 valign-text-middle ibmplexsans-regular-normal-onyx-14px">
//                       {number4}
//                     </div>
//                     <div className="rectangle-859-5"></div>
//                   </div>
//                 </div>
//               </div>
//               <div className="frame-285 border-1px-caribbean-green">
//                 <div className="text-13 valign-text-middle">{text13}</div>
//               </div>
//             </div>
//             {/* <img className="union" src={union} /> */}
//           </div>
//         </div>
//       </div>
//       <div className="library-menuu-button">
//         <div className="book">
//           <div className="overlap-group-4">
//             <img className="vector-11" src="img/book.png" />
//           </div>
//         </div>
//         <div className="text-5 ibmplexsans-semi-bold-quarter-spanish-white-16px">
//           {text5}
//         </div>
//       </div>
//       <div className="course-menu-button">
//         <div className="graduation-cap-1">
//           <img className="graduation-cap" src="img/graduation-cap 1.png" />
//         </div>
//         <div className="text-6 ibmplexsans-semi-bold-quarter-spanish-white-16px">
//           {text6}
//         </div>
//       </div>
//     </div>
//   );
// }

function ChevronsLeft(props) {
  const { src, className } = props;

  return (
    <div className={`chevrons-left ${className || ""}`}>
      <img className="vector-stroke" src="img/left.png" />
    </div>
  );
}

function Frame2849(props) {
  const { children } = props;

  return (
    <div className="frame-28">
      <div className="place valign-text-middle ibmplexsans-regular-normal-ebb-14px">
        {children}
      </div>
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
        <div className="number-1 valign-text-middle ibmplexsans-bold-caribbean-green-14px">
          {children}
        </div>
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
      <div className="number-2 valign-text-middle ibmplexsans-regular-normal-ebb-14px">
        {children}
      </div>
      <div className="rectangle-859-2"></div>
    </div>
  );
}

function Frame2855(props) {
  const { children } = props;

  return (
    <div className="frame-28-1">
      <div className="text-12 valign-text-middle ibmplexsans-regular-normal-ebb-14px">
        {children}
      </div>
      <div className="overlap-group-3">
        <div className="rectangle-859-3"></div>
        <div className="rectangle-860-2"></div>
      </div>
    </div>
  );
}

function Dashboardnav(props) {
  const {
    ragrariansI1161397,
    vector2,
    vector3,
    text15,
    vector4,
    vector5,
    vector6,
    vector7,
    avatar,
  } = props;

  return (
    <div className="dashboard-nav">
      <h1 className="ragrarians-i1161397 ibmplexsans-semi-bold-quarter-spanish-white-24px">
        {ragrariansI1161397}
      </h1>
      <div className="dashboard-account">
        <div className="person-outline-1">
          <img
            className="vector-12"
            src="img/person.png"
            style={{ height: "20px", width: "20px" }}
          />
          {/* <img className="vector-13" src="img/person.png" /> */}
          {/* <img className="vector-14" src="img/person.png" /> */}
        </div>
        <div className="text-15 ibmplexsans-semi-bold-quarter-spanish-white-16px">
          {text15}
        </div>
      </div>
      <div className="avatar-icons">
        <div className="email-outline">
          <div className="overlap-group-5">
            <img className="vector-15" src="img/email-icon.png" />
            <img className="vector-16" src="img/email-icon.png" />
          </div>
        </div>
        <div className="bell-outline">
          <div className="overlap-group1-1">
            <img className="vector-17" src="img/bell-icon.png" />
            <img className="vector-18" src="img/bell-icon.png " />
          </div>
        </div>
        <div
          className="avatar"
          style={{ backgroundImage: `url("img/avatar.png")` }}
        ></div>
      </div>
    </div>
  );
}

function Frame3501(props) {
  const { farming, text16 } = props;

  return (
    <div className="frame-3501">
      <div className="farming ibmplexsans-semi-bold-caribbean-green-14px">
        {farming}
      </div>
      <div className="text- ibmplexsans-semi-bold-quarter-spanish-white-24px">
        {text16}
      </div>
    </div>
  );
}

function Frame3470(props) {
  const { children } = props;

  return (
    <div className="frame-3470-1 border-0-5px-quarter-spanish-white">
      <div className="address-1 ibmplexsans-regular-normal-quarter-spanish-white-14px">
        {children}
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

const dashboardData = {
  vector: "/img/vector.svg",
  vector2: "/img/vector@2x.svg",
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
  text1: "Ragrarians",
  text3: "Members",
  text2: "Groups",
  text4: "Enterprises",
  vector17: "",
  vector18: "",
  text14: "January",
  number: "29",
  number2: "18",
  number3: "7",
  number4: "5",
  text13: "View calendar",
  union: "",
  vector19: "",
  vector20: "",
  text5: "Library",
  graduationCap: "",
  text6: "Courses",
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

const dashboardnavData = {
  ragrariansI1161397: "Ragrarians News",
  vector2: "",
  vector3: "",
  text15: "My dashboard",
  vector4: "",
  vector5: "",
  vector6: "",
  vector7: "",
  avatar: "",
};

const frame3501Data = {
  farming: "FARMING",
  text16: "Fueling the ethanol industry",
};

const frame3470Data = {
  children: "12 min read",
};

const frame35012Data = {
  farming: "PEOPLE",
  text16: "Fueling the ethanol industry",
};

const frame34702Data = {
  children: "12 min read",
};

const frame35013Data = {
  farming: "NATURE",
  text16: "Fueling the ethanol industry",
};

const X0300CommunityPagenewsData = {
  vector2: "",
  search: "Search…",
  addNews: "Add news",
  frame1969: "img/bg-news-image.png",
  address: "6 min read",
  text17:
    "Ethanol, which is sometimes known as ethyl alcohol, is a kind of alcohol derived from corn, sugarcane, and grain or indirectly from paper waste. It’s also the main type of alcohol in most alcoholic also the main type of alcohol in most alcoholic…",
  date: "November 01, 2020",
  text22: "Discover more of what matters to you",
  farming: "Farming",
  people: "People",
  nature: "Nature",
  carsIndustry: "Cars industry",
  mediaNews: "Media news",
  seeAllTopics: "See all topics",
  frame19692: "img/bg-news-image-2.png",
  text19:
    "Ethanol, which is sometimes known as ethyl alcohol, is a kind of alcohol derived from corn, sugarcane, and grain or indirectly from paper waste.",
  date2: "November 01, 2020",
  frame19693: "",
  text21:
    "Ethanol, which is sometimes known as ethyl alcohol, is a kind of alcohol derived from corn, sugarcane, and grain or indirectly from paper waste. It’s also the main type of alcohol in most alcoholic also the main type of alcohol in most alcoholic…",
  date3: "November 01, 2020",
  ellipse15: "",
  address2: "6 min read",
  dashboardProps: dashboardData,
  dashboardnavProps: dashboardnavData,
  frame3501Props: frame3501Data,
  frame3470Props: frame3470Data,
  frame35012Props: frame35012Data,
  frame34702Props: frame34702Data,
  frame35013Props: frame35013Data,
};
