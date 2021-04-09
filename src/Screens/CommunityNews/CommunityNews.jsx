import {useState} from "react";
import "./community-news.css";
import { Link } from "react-router-dom";
import NewsCard from "../../Components/NewsCard/NewsCard";
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout';
import SearchComponent from '../../Components/SearchComponent/SearchComponent'
import NewsAddModal from "../../Components/NewAddModal/NewsAddModal";

function App() {
  const [addModal, setAddModal] = useState(false);

  return <DashboardLayout title="Ragrarians News">{addModal && <NewsAddModal />}<CommunityPagenews {...X0300CommunityPagenewsData} setAddModal={setAddModal}/></DashboardLayout>;
}

export default App;

function CommunityPagenews(props) {
  
  
    const {
    addNews,
    text22,
    farming,
    people,
    nature,
    carsIndustry,
    mediaNews,
    seeAllTopics,
    setAddModal
  } = props;


  return (
    <>
    <div className="community-page-news">
      
        <div className="community-news-second-header">

          <div className="search-bar search border-1px-onyx">
            <div className="search-outline-1">
              <div className="overlap-group-6">
                <img className="vector-20" src="img/search-outline 1.png" />
              </div>
            </div>
            <input type="text" placeholder="Search..." className="search-1" />
          </div>

          <button className="default-btn default-btn-variation" onClick={() => setAddModal(true)}>{addNews}</button>

        </div>

        <div className="community-news-cards">
          <Link to="/community-page-news-view">
            <NewsCard />
          </Link>
        </div>

        <div className="community-news-right-bar">
          <div className="community-news-right-bar-inner-container">
          <h4>{text22}</h4>
          <div className="community-news-filter-container">
            <h6>{farming}</h6>
            <h6>{people}</h6>
            <h6>{nature}</h6>
            <h6>{carsIndustry}</h6>
            <h6>{mediaNews}</h6>
          </div>
          <Link to="/community-switching" className="nav-link">{seeAllTopics}</Link>
          </div>
         </div>

    </div>
    
    </>
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