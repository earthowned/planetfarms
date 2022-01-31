/* eslint-disable no-shadow */
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { PageLayout } from "layout/page-layout";
import FormModal from "../../components/formModal/FormModal";
import CommunityGroupCard from "../../components/communityGroupCard/CommunityGroupCard";
import "./CommunityGroup.scss";
import {
  searchGroups,
  listGroups,
  groupDelete,
  listUserGroups,
} from "../../actions/communityGroupActions";
import Pagination from "../../components/pagination/Pagination";
import { getApi } from "../../utils/apiFunc";
import SubHeader from "../../components/subHeader/SubHeader";
import DeleteContent from "../../components/deleteContent/DeleteContent";

const CommunityGroup = () => {
  // fetching current community
  const currentCommunity = localStorage.getItem("currentCommunity")
    ? JSON.parse(localStorage.getItem("currentCommunity"))
    : null;

  // navigtion bar
  const { pathname } = useLocation();

  const nav = [
    {
      label: "All Groups",
      link: "/groups",
    },
    {
      label: "Your Groups",
      link: "/your-groups",
    },
  ];

  const [editData, setEditData] = useState(null);
  const data = useSelector((state) => state.listGroups);
  const dataUser = useSelector((state) => state.listUserGroups);
  const { groups } = data;
  const { userGroups } = dataUser;

  const { success: groupUpdateSuccess } = useSelector(
    (state) => state.groupUpdate
  );
  const { success: groupDeleteSuccess } = useSelector(
    (state) => state.groupDelete
  );
  const { success: groupCreateSuccess } = useSelector(
    (state) => state.groupCreate
  );
  const dispatch = useDispatch();

  const [active, setActive] = useState(false);
  const [search, setSearch] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [userPageNumber, setUserPageNumber] = useState(1);

  useEffect(() => {
    if (search) dispatch(searchGroups(search));
    if (!search) dispatch(listGroups({ pageNumber }));

    if (pathname === `/your-community-group/${currentCommunity.slug}`) {
      // if (search) dispatch(searchGroups(search))
      if (!search)
        dispatch(
          listUserGroups({
            communityId: currentCommunity.id,
            pageNumber: userPageNumber,
          })
        );
    }
  }, [
    search,
    dispatch,
    groupUpdateSuccess,
    groupDeleteSuccess,
    groupCreateSuccess,
    pathname,
    pageNumber,
    userPageNumber,
  ]);

  const editCard = async (id) => {
    const { data } = await getApi(
      dispatch,
      `${process.env.REACT_APP_API_BASE_URL}/api/groups/${id}/community/${currentCommunity.id}`
    );
    setEditData(data);
    setActive(true);
  };

  const deleteCard = (id) => {
    setDeleteModal(true);
    setDeleteId(id);
  };

  const confirmDelete = () => {
    dispatch(groupDelete(deleteId));
    setDeleteModal(false);
  };

  return (
    <>
      {active && (
        <FormModal
          setActive={setActive}
          data={editData}
          setData={setEditData}
        />
      )}
      {deleteModal && (
        <DeleteContent
          heading="Delete"
          message="Are you sure you want to delete?"
          setDeleteModal={setDeleteModal}
          confirmDelete={confirmDelete}
        />
      )}
      <PageLayout>
        <div className="x05-0-0-all-groups">
          <div className="group-flex-col-4">
            <SubHeader
              search={search}
              setSearch={setSearch}
              nav={nav}
              setCreateActive={setActive}
              btnName="Create Group"
            />
            <div className="community-group-container">
              {pathname === "/groups" ? (
                <CommunityGroupCard
                  location="/groups/:id"
                  data={groups}
                  editCard={editCard}
                  setActive={setActive}
                  deleteCard={deleteCard}
                />
              ) : (
                <CommunityGroupCard
                  location="/groups/:id"
                  data={userGroups}
                  editCard={editCard}
                  setActive={setActive}
                  deleteCard={deleteCard}
                />
              )}
            </div>
            {pathname === "/groups" ? (
              <Pagination
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                resourceList={data}
              />
            ) : (
              <Pagination
                pageNumber={userPageNumber}
                setPageNumber={setUserPageNumber}
                resourceList={dataUser}
              />
            )}
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default CommunityGroup;
