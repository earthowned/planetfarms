import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../components/button/Button";
import Filter from "../../components/filter/Filter";
import NewsCard from "../../components/newsCard/NewsCard";
import Pagination from "../../components/pagination/Pagination";
import SearchComponent from "../../components/searchComponent/SearchComponent";

import CommunityRight from "./CommunityRight";

import useSizeFinder from "../../utils/sizeFinder";
import { searchNews, listNews } from "../../actions/newsActions";

const CommunityPagenews = (props) => {
  const { addNews, setAddModal, deleteNewsCard } = props;

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
    <>
      <div className="community-page-news">
        <div className="community-news-second-header">
          <div className="search-container-news">
            <SearchComponent
              search={search}
              showEditIcon={false}
              setSearch={setSearch}
              className="search-btn margin-0"
            />
          </div>

          <Button
            type="button"
            name={addNews}
            onClick={() => setAddModal(true)}
          />
        </div>

        <div className="community-page-news-section">
          <div className="community-news-cards">
            <NewsCard
              news={news}
              editCard={props.editCard}
              deleteNewsCard={deleteNewsCard}
            />
            <Pagination
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              resourceList={newsList}
            />
          </div>
          {windowWidth < 1200 ? <Filter /> : <CommunityRight />}
        </div>
      </div>
    </>
  );
};

export default CommunityPagenews;
