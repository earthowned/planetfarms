import React, { useState, useEffect } from "react";
import "./Enterprises.css";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";
import DashboardLayout from "../../layout/dashboardLayout/DashboardLayout";
import CommunityGroupCard from "../../components/communityGroupCard/CommunityGroupCard";
import {
  enterpriseDelete,
  listEnterprises,
  listUserEnterprises,
  searchEnterprises,
} from "../../actions/enterpriseAction";
import FormModal from "../../components/formModal/FormModal";
import Pagination from "../../components/pagination/Pagination";
import SubHeader from "../../components/subHeader/SubHeader";
import DeleteContent from "../../components/deleteContent/DeleteContent";

const Enterprise = () => {
  // fetching current community
  const currentCommunity = localStorage.getItem("currentCommunity")
    ? JSON.parse(localStorage.getItem("currentCommunity"))
    : null;
  const { pathname } = useLocation();

  const data = useSelector((state) => state.listEnterprises);
  const dataUser = useSelector((state) => state.listUserEnterprises);
  const { userEnterprises } = dataUser;
  const enterprises = data?.enterprises?.enterprises
    ? data.enterprises.enterprises
    : data.enterprises;
  const { success: enterpriseUpdateSuccess } = useSelector(
    (state) => state.enterpriseUpdate
  );
  const { success: enterpriseDeleteSuccess } = useSelector(
    (state) => state.enterpriseDelete
  );
  const { success: enterpriseCreateSuccess } = useSelector(
    (state) => state.enterpriseCreate
  );
  const [editData, setEditData] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [search, setSearch] = useState(null);
  const [active, setActive] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [userPageNumber, setUserPageNumber] = useState(1);
  const dispatch = useDispatch();

  // for navigation
  const nav = [
    {
      label: "All enterprises",
      link: "/enterprises",
    },
    {
      label: "Your Enterprises",
      link: "/your-enterprises",
    },
  ];

  useEffect(() => {
    if (search) dispatch(searchEnterprises(search));
    if (!search) dispatch(listEnterprises({ pageNumber }));

    if (pathname === "/your-enterprises") {
      // if (search) dispatch(searchGroups(search))
      if (!search)
        dispatch(
          listUserEnterprises({
            communityId: currentCommunity.id,
            pageNumber: userPageNumber,
          })
        );
    }
  }, [
    search,
    dispatch,
    pathname,
    enterpriseUpdateSuccess,
    enterpriseDeleteSuccess,
    enterpriseCreateSuccess,
    pageNumber,
    userPageNumber,
  ]);

  const editCard = async (id) => {
    const { data: response } = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/api/enterprises/${id}/community/${currentCommunity.id}`
    );
    setEditData(response);
    setActive(true);
  };

  const deleteCard = (id) => {
    setDeleteModal(true);
    setDeleteId(id);
  };

  const confirmDelete = () => {
    dispatch(enterpriseDelete(deleteId));
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
      <DashboardLayout title="Enterprises">
        <div className="all-enterprises">
          <div className="enterprises-col">
            <SubHeader
              search={search}
              setSearch={setSearch}
              nav={nav}
              setCreateActive={setActive}
              btnName="Create Enterprise"
            />
            <div className="enterpriseCard">
              {pathname === "/enterprises" ? (
                <CommunityGroupCard
                  type="enterprise"
                  location="/enterprises"
                  data={enterprises}
                  editCard={editCard}
                  setActive={setActive}
                  deleteCard={deleteCard}
                />
              ) : (
                <CommunityGroupCard
                  type="enterprise"
                  location="/enterprises"
                  data={userEnterprises}
                  editCard={editCard}
                  setActive={setActive}
                  deleteCard={deleteCard}
                />
              )}
            </div>
            {pathname === `/enterprises/${currentCommunity.slug}` ? (
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
      </DashboardLayout>
    </>
  );
};

export default Enterprise;
