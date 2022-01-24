import { Link } from "react-router-dom";

const CommunityRight = ({
  text,
  farming,
  people,
  nature,
  carsIndustry,
  mediaNews,
  seeAllTopics,
}) => {
  return (
    <div className="community-news-right-bar">
      <div className="community-news-right-bar-inner-container">
        <h4>{text}</h4>
        <div className="community-news-filter-container">
          <h4>{farming}</h4>
          <h4>{people}</h4>
          <h4>{nature}</h4>
          <h4>{carsIndustry}</h4>
          <h4>{mediaNews}</h4>
        </div>
        <Link to="/community-switching" className="nav-link">
          {seeAllTopics}
        </Link>
      </div>
    </div>
  );
};

export default CommunityRight;
