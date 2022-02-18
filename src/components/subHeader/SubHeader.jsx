import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { NavTabsContainer } from "common/containers";

import Filter from "../filter/Filter";
import SearchComponent from "../searchComponent/SearchComponent";

import "./SubHeader.scss";

const SubHeader = ({ search, setSearch, nav, setCreateActive, btnName }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
  }, [search, dispatch, history, userInfo]);

  const options = useMemo(() => {
    return nav.map((item) => ({ value: item.link, label: item.label }));
  }, [nav]);

  return (
    <div className="sub-header-main-container">
      <div className="sub-header-left-container">
        <NavTabsContainer options={options} />

        <SearchComponent
          search={search}
          setSearch={setSearch}
          className="search-btn margin-0"
        />
      </div>
      <div className="sub-header-right-container">
        <div className="row-1">
          <div className="sub-header-btn-container">
            <button
              type="button"
              className="default-btn"
              onClick={() => setCreateActive(true)}
            >
              {btnName}
            </button>
          </div>
        </div>

        <div className="row-2">
          <Filter />
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
