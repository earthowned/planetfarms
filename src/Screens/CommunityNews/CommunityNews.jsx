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

const CommunityRight=({text,farming,people,nature,carsIndustry,mediaNews,seeAllTopics})=>{
  return(
    <>
    
    <div className="community-news-right-bar">
          <div className="community-news-right-bar-inner-container">
          <h4>{text}</h4>
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

    </>
  )
}

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
          <SearchComponent className={"search border-1px-onyx"} />
          <button className="default-btn default-btn-variation" onClick={() => setAddModal(true)}>{addNews}</button>
        </div>
        <div className="community-news-cards">
          <Link to="/community-page-news-view">
            <NewsCard />
          </Link>
        </div>
        <CommunityRight text={text22} farming={farming} people={people} nature={nature} carsIndustry={carsIndustry} mediaNews={mediaNews} seeAllTopics={seeAllTopics} />
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