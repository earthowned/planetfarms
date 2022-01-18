import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Filter from "../filter/Filter";
import SearchComponent from "../searchComponent/SearchComponent";
import data from "./headerData";
import "./CoursesHeader.scss";
import useSizeFinder from "../../utils/sizeFinder";

const CoursesHeader = ({ setCreateCourse }) => {
  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;
  const { pathname } = useLocation();
  // const history = useHistory();
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   if (!userInfo) {
  //     history.push('/login')
  //   }
  // }, [search, dispatch, history, userInfo])

  // function createCollection() {
  //   setActive(true);
  //   setCreateCollection(true);
  // }

  const windowWidth = useSizeFinder();
  return (
    <div className="courseHeader">
      <div className="container">
        {windowWidth > 839 ? (
          <>
            <ul className="lists">
              {data.map(({ name, slug }) => {
                return (
                  <li key={slug}>
                    <Link
                      className={`nav-link ${
                        pathname === `${slug}`
                          ? "list list-active"
                          : "library-list-item"
                      }`}
                      to={`${slug}`}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="searchBox">
              <SearchComponent
                search={search}
                setSearch={setSearch}
                className="search-btn margin-0"
              />
            </div>
          </>
        ) : (
          <>
            <Filter data={data} newFilter="new" />
            <div className="searchBox">
              <SearchComponent
                search={search}
                setSearch={setSearch}
                className="search search-btn margin-0"
              />
            </div>
          </>
        )}
      </div>
      <div className="coursesSubHeader">
        <div className="subcontainer">
          <div className="btnContainer">
            {pathname === "/admin/courses" ? (
              <button
                type="button"
                className="default-btn"
                onClick={() => setCreateCourse(true)}
              >
                Add new Courses
              </button>
            ) : (
              <button
                type="button"
                className="default-btn"
                onClick={() => setCreateCourse(true)}
              >
                Add Courses
              </button>
            )}
          </div>
        </div>
        <div className="subHeader2">
          <Filter name="filter by category" />
        </div>
      </div>
    </div>
  );
};

export default CoursesHeader;
