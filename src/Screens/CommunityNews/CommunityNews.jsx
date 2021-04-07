import {useState} from "react";
import "./community-news.css";
import { Link } from "react-router-dom";
import NewsCard from "../../Components/NewsCard/NewsCard";
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout';
import NewsAddModal from "../../Components/NewAddModal/NewsAddModal";

function CommunityPagenews() {
  const [addModal, setAddModal] = useState(false);

  return (
    <>
    {addModal && <NewsAddModal />}
    <DashboardLayout title="Ragrarians News">
    <div className="x03-0-0-community-page-news">
      <div className="flex-col-4">
        <div className="flex-row-2">
          <div className="search border-1px-onyx">
            <div className="search-outline-1">
              <div className="overlap-group-6">
                <img className="vector-20" src="img/search-outline 1.png" />
              </div>
            </div>
            <input type="text" placeholder="Search..." className="search-1" />
          </div>
          <button className="default-btn" onClick={() => setAddModal(true)}>Add News</button>
        </div>

        <div className="flex-row-5">
          <Link to="/community-page-news-view">
            <NewsCard />
          </Link>

          <div className="filter-container border-1px-onyx">
            <p className="text-22 ibmplexsans-semi-bold-quarter-spanish-white-16px">
              Discover more of what matters to you
            </p>
            <div className="flex-row-6">
              <div className="filter-button-5 border-1px-onyx">
                <div className="farming-1 ibmplexsans-semi-bold-quarter-spanish-white-16px">
                  Farming
                </div>
              </div>
              <div className="filter-button-2 border-1px-onyx">
                <div className="people ibmplexsans-semi-bold-quarter-spanish-white-16px">
                  People
                </div>
              </div>
              <div className="filter-button-1 border-1px-onyx">
                <div className="nature ibmplexsans-semi-bold-quarter-spanish-white-16px">
                  Nature
                </div>
              </div>
            </div>
            <div className="flex-row-7">
              <div className="filter-button-4 border-1px-onyx">
                <div className="cars-industry ibmplexsans-semi-bold-quarter-spanish-white-16px">
                  Cars Industry
                </div>
              </div>
              <div className="filter-button-3 border-1px-onyx">
                <div className="media-news ibmplexsans-semi-bold-quarter-spanish-white-16px">
                  Media News
                </div>
              </div>
            </div>
            <div className="see-all-topics ibmplexsans-semi-bold-quarter-spanish-white-16px">
              See All Topics
            </div>
          </div>
        </div>
      </div>
    </div>
    </DashboardLayout>
    </>
  );
}


export default CommunityPagenews;