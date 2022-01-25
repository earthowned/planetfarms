import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardImage from "../../components/cardImage/CardImage";
import SearchComponent from "../../components/searchComponent/SearchComponent";
import DashboardLayout from "../../layout/dashboardLayout/DashboardLayout";
import Pagination from "../../components/pagination/Pagination";
import "./CommunityMembers.css";
import useSizeFinder from "../../utils/sizeFinder";
import useGetFetchData from "../../utils/useGetFetchData";
import { GET_MEMBERS } from "../../utils/urlConstants";

function CommunityMembers() {
  const [col, setCol] = useState(3);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const [search, setSearch] = useState("");
  const windowWidth = useSizeFinder();

  // fetching current community
  const currentCommunity = useSelector(
    (state) => state.activeCommunity.currentCommunity
  );
  console.log("currentCom", currentCommunity);
  /* const currentCommunity = window.localStorage.getItem('currentCommunity')
    ? JSON.parse(window.localStorage.getItem('currentCommunity'))
    : null */

  useEffect(() => {
    if (windowWidth < 1439 && windowWidth > 768) {
      setCol(3);
    } else {
      setCol(4);
    }
  }, [windowWidth]);

  useEffect(() => {
    if (col === 3) {
      setPageSize(9);
    } else if (col === 4) {
      setPageSize(8);
    }
  }, [col]);

  const { data: membersData = {} } = useGetFetchData(
    "GET_MEMBERS_DATA",
    `${
      GET_MEMBERS + currentCommunity.id
    }?pageNumber=${pageNumber}&pageSize=${pageSize}&search=${search}`,
    { pageSize, pageNumber, search }
  );

  return (
    <DashboardLayout title={currentCommunity.name}>
      <div className="community-members">
        <div className="community-members-flex-col">
          <div className="search-container">
            <SearchComponent
              className="search border-1px-onyx"
              search={search}
              setSearch={setSearch}
            />
          </div>
          <div className="community-members-grid-row">
            {membersData?.data && (
              <CardImage follow="Follow" data={membersData?.data} />
            )}
          </div>
          <Pagination
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            resourceList={membersData}
          />
        </div>
      </div>
    </DashboardLayout>
  );
}
export default CommunityMembers;
