import { Link } from "react-router-dom";

const tags = ["Farming", "People", "Nature", "Cars industry", "Media news"];

const CommunityRight = () => {
  return (
    <div className="community-news-right-bar">
      <h4>Discover more of what matters to you</h4>

      <div className="community-news-filter-container">
        {tags.map((tag) => (
          <div key={tag} className="news-container">
            <h4>{tag}</h4>
          </div>
        ))}
      </div>

      <Link to="/community-switching" className="nav-link">
        See all topics
      </Link>
    </div>
  );
};

export default CommunityRight;
