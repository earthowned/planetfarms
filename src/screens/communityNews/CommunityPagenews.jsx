import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import NewsCard from "../../components/newsCard/NewsCard";
import SearchComponent from "../../components/searchComponent/SearchComponent";
import Filter from "../../components/filter/Filter";
import useSizeFinder from "../../utils/sizeFinder";
import { searchNews, listNews } from "../../actions/newsActions";
import Pagination from "../../components/pagination/Pagination";
import CommunityRight from "./CommunityRight";

const CommunityPagenews = (props) => {
  const {
    addNews,
    text22,
    farming,
    people,
    nature,
    carsIndustry,
    mediaNews,
    seeAllTopics,
    setAddModal,
    deleteNewsCard,
    editCard,
  } = props;

  const windowWidth = useSizeFinder();

  const userLogin = useSelector((state) => state.userLogin);
  const { success: newsCreateSuccess } = useSelector(
    (state) => state.addNewNews
  );
  const { success: newsDeleteSuccess } = useSelector(
    (state) => state.newsDelete
  );
  const { success: newsUpdateSuccess } = useSelector(
    (state) => state.newsUpdate
  );
  const { userInfo } = userLogin;
  const history = useHistory();
  const [search, setSearch] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    if (search) dispatch(searchNews(search));
    if (!search) dispatch(listNews({ sort: "", pageNumber }));
  }, [
    search,
    dispatch,
    history,
    userInfo,
    pageNumber,
    newsCreateSuccess,
    newsDeleteSuccess,
    newsUpdateSuccess,
  ]);

  const newsList = useSelector((state) => state.listNews);

  const news = newsList.searchNews ? newsList.searchNews : newsList.news;
  return (
    <div className="community-page-news">
      <div className="community-news-second-header">
        <div className="search-container-news">
          <SearchComponent
            search={search}
            setSearch={setSearch}
            className="search-btn margin-0"
          />
        </div>
        <button
          type="button"
          className="default-btn default-btn-variation"
          onClick={() => setAddModal(true)}
        >
          {addNews}
        </button>
      </div>
      <div className="community-page-news-section">
        <div className="community-news-cards">
          <NewsCard
            news={news}
            editCard={editCard}
            deleteNewsCard={deleteNewsCard}
          />
          <Pagination
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            resourceList={newsList}
          />
        </div>
        {windowWidth < 1200 ? (
          <Filter />
        ) : (
          <CommunityRight
            text={text22}
            farming={farming}
            people={people}
            nature={nature}
            carsIndustry={carsIndustry}
            mediaNews={mediaNews}
            seeAllTopics={seeAllTopics}
          />
        )}
      </div>
    </div>
  );
};

export default CommunityPagenews;
