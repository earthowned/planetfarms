import React from "react";
import "./community-news.css";
// import SideBar from "../../Components/Sidebar/index";
import NavBar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";
import NewsCard from "../../Components/NewsCard/NewsCard";
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout';
function App() {
  return <DashboardLayout title="Ragrarians News"><X0300CommunityPagenews {...X0300CommunityPagenewsData} /></DashboardLayout>;
}

export default App;

function X0300CommunityPagenews(props) {
  const {
    addNews,
    text22,
    farming,
    people,
    nature,
    carsIndustry,
    mediaNews,
    seeAllTopics,
  } = props;

  return (
    <div className="x03-0-0-community-page-news">
      {/* <SideBar /> */}
      <div className="flex-col-4">
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
          <Link  to="/community-page-news-view" >
            <NewsCard />
          </Link>

          <div className="filter-container border-1px-onyx" >
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
            <Link to="community-switching">
           
            <div className="see-all-topics ibmplexsans-semi-bold-quarter-spanish-white-16px">
              {seeAllTopics}
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const X0300CommunityPagenewsData = {
  search: "Search…",
  addNews: "Add news",
  text22: "Discover more of what matters to you",
  farming: "Farming",
  people: "People",
  nature: "Nature",
  carsIndustry: "Cars industry",
  mediaNews: "Media news",
  seeAllTopics: "See all topics",
};
