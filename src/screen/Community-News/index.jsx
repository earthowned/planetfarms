import React from "react";
import "./style.css";
import SideBar from "../../components/SideBar/index";
import NavBar from "../../components/NavBar/index";
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
      <SideBar />
      <div className="flex-col-4">
        <NavBar />
        <div className="flex-row-4">
          <div className="search border-1px-onyx">
            <div className="search-outline-1">
              <div className="overlap-group-6">
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
              <Frame3501
                farming="PEOPLE"
                text16="Fueling the ethanol industry"
              />
              <p className="text-19 ibmplexsans-regular-normal-quarter-spanish-white-16px">
                Ethanol, which is sometimes known as ethyl alcohol, is a kind of
                alcohol derived from corn, sugarcane, and grain or indirectly
                from paper waste.
              </p>
              <div className="date-1 ibmplexsans-regular-normal-quarter-spanish-white-14px">
                November 01, 2020
              </div>
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
