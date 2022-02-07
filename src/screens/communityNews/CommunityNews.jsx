import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DashboardLayout } from "layout/dashboard";
import NewsAddModal from "../../components/newAddModal/NewsAddModal";
import { deleteNews } from "../../actions/newsActions";
import DeleteContent from "../../components/deleteContent/DeleteContent";
import { CommunityPageNewsData } from "./CommunityPageNewsData";
import CommunityPagenews from "./CommunityPagenews";
import "./CommunityNews.scss";

function CommunityNews() {
  const [addModal, setAddModal] = useState(false);
  const [editData, setEditData] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const dispatch = useDispatch();
  const history = useHistory();

  const deleteNewsCard = (id) => {
    setDeleteId(id);
    setDeleteModal(true);
  };

  const confirmDelete = () => {
    dispatch(deleteNews(deleteId));
    setDeleteModal(false);
  };

  const editCard = async (id) => {
    history.push(`/news/edit/${id}`);
  };
  return (
    <>
      {deleteModal && (
        <DeleteContent
          heading="Delete"
          message="Are you sure you want to delete?"
          setDeleteModal={setDeleteModal}
          confirmDelete={confirmDelete}
        />
      )}
      <DashboardLayout title="Ragrarians News">
        {addModal && (
          <NewsAddModal
            setAddModal={setAddModal}
            editData={editData}
            setEditData={setEditData}
          />
        )}
        <CommunityPagenews
          {...CommunityPageNewsData}
          setAddModal={setAddModal}
          editCard={editCard}
          deleteNewsCard={deleteNewsCard}
        />
      </DashboardLayout>
    </>
  );
}

export default CommunityNews;
