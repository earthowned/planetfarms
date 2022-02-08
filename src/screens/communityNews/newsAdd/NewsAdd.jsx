/* eslint-disable no-shadow */
import { useState, useEffect } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { DashboardLayout } from "layout/dashboard";

import NewsCreateModal from "../../../components/newsCreateModal/NewsCreateModal";
import useGetFetchData from "../../../utils/useGetFetchData";
import BackButton from "../../../components/backButton/BackButton";
import { createNews, newsUpdate } from "../../../actions/newsActions";
import { deleteText, updateText } from "../../../actions/textActions";
import { deletePhoto, updatePhoto } from "../../../actions/photoActions";
import { deleteVideo, updateVideo } from "../../../actions/videoActions";
import RichTextEditor from "../../../components/richTextEditor/RichTextEditor";
import DeleteContent from "../../../components/deleteContent/DeleteContent";
import "./NewsAdd.scss";

const NewsAdd = () => {
  const { currentCommunity } = useSelector((state) => state.activeCommunity);

  const { success: updateVideoSuccess } = useSelector(
    (state) => state.updateVideo
  );
  const { success: deleteVideoSuccess } = useSelector(
    (state) => state.deleteVideo
  );

  const { success: updateTextSuccess } = useSelector(
    (state) => state.updateText
  );
  const { success: deleteTextSuccess } = useSelector(
    (state) => state.deleteText
  );

  const { success: updatePhotoSuccess } = useSelector(
    (state) => state.updatePhoto
  );
  const { success: deletePhotoSuccess } = useSelector(
    (state) => state.deletePhoto
  );
  const loggedUser = useSelector((state) => state?.userLogin);
  const { userInfo } = loggedUser;

  const { state } = useLocation();

  const [createVideoModal, setCreateVideoModal] = useState(false);
  const [createImageModal, setCreateImageModal] = useState(false);
  const [createTextModal, setCreateTextModal] = useState(false);
  const [deleteVideoModal, setDeleteVideoModal] = useState(false);
  const [deleteImageModal, setDeleteImageModal] = useState(false);
  const [deleteTextModal, setDeleteTextModal] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const [imageId, setImageId] = useState(null);
  const [textId, setTextId] = useState(null);

  const [newsData, setNewsData] = useState([]);
  const [newsSingleData, setNewsSingleData] = useState([]);
  const [category] = useState(state?.category || null);
  const [title] = useState(state?.title || null);
  const [newsCover, setNewsCover] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [videoData, setVideoData] = useState(null);
  const [textData, setTextData] = useState(null);
  const [oldData, setOldData] = useState(null);

  const { id } = useParams();

  const { pathname } = useLocation();

  const dispatch = useDispatch();
  const history = useHistory();

  const { data, refetch } = useGetFetchData(
    "LESSON_DATA",
    `${process.env.REACT_APP_API_BASE_URL}/api/news/${id}/community/${currentCommunity.id}`,
    null,
    pathname.split("/")[2] === "edit"
  );

  async function getSingleNews() {
    setNewsSingleData(data);
  }

  useEffect(() => {
    if (pathname.split("/")[2] === "edit") {
      getSingleNews();
    }
  }, [
    data,
    dispatch,
    newsData,
    updateVideoSuccess,
    deleteVideoSuccess,
    updateTextSuccess,
    deleteTextSuccess,
    updatePhotoSuccess,
    deletePhotoSuccess,
  ]);

  useEffect(() => {
    if (pathname.split("/")[2] !== "edit") {
      setNewsData([{ title, category }]);
    }
  }, []);

  const submitNewsForm = ({ title }) => {
    const creator = userInfo.id;
    dispatch(
      createNews({
        newsDetail: { title, category, news: newsCover, creator },
        newNews: newsData.splice(1),
        history,
      })
    );
  };

  const editNewsForm = ({ title }) => {
    dispatch(
      newsUpdate({
        newsDetail: {
          title,
          category: newsSingleData.category,
          news: newsCover,
        },
        newNews: [oldData, newsData].flat(),
        id: newsSingleData.id,
        richtextId: newsSingleData.rich_text.id,
        history,
      })
    );
  };

  async function editImageFunc(id) {
    if (newsSingleData?.rich_text?.photos) {
      const photo = newsSingleData.rich_text.photos.filter(
        (el) => el.id === id
      );
      setImageData(photo);
    }
  }

  function editImageConfirm(data) {
    const { id, isImgDesc, lessonImg, photoDescription } = data;
    dispatch(
      updatePhoto({
        iData: { img: lessonImg, photoDescription, isImgDesc },
        id,
        setEditPhotoModel: setCreateImageModal,
        refetch,
      })
    );
  }

  async function editTextFunc(id) {
    if (newsSingleData?.rich_text?.texts) {
      const text = newsSingleData.rich_text.texts.filter((el) => el.id === id);
      setTextData(text);
    }
  }

  function editTextConfirm(data) {
    const { id, textHeading, textDescription } = data;
    dispatch(
      updateText({
        textId: id,
        textHeading,
        textDescription,
        setEditTextModel: setCreateTextModal,
        refetch,
      })
    );
  }

  async function editVideoFunc(id) {
    if (newsSingleData?.rich_text?.videos) {
      const video = newsSingleData.rich_text.videos.filter(
        (el) => el.id === id
      );
      setVideoData(video);
    }
  }

  function editVideoConfirm(data) {
    const {
      id,
      videoCover,
      videoTitle,
      videoDescription,
      videoLink,
      videoResource,
    } = data;
    dispatch(
      updateVideo({
        id,
        vData: {
          videoCover,
          videoTitle,
          videoDescription,
          videoLink,
          videoResource,
        },
        setEditVideoModel: setCreateVideoModal,
        refetch,
      })
    );
  }

  function deleteImageModalFunc(id) {
    setDeleteImageModal(true);
    setImageId(id);
  }

  async function deleteImageConfirm() {
    dispatch(deletePhoto(imageId, refetch));
    setDeleteImageModal(false);
  }

  function deleteVideoModalFunc(id) {
    setDeleteVideoModal(true);
    setVideoId(id);
  }

  async function deleteVideoConfirm() {
    dispatch(deleteVideo(videoId, refetch));
    setDeleteVideoModal(false);
  }

  function deleteTextModalFunc(id) {
    setDeleteTextModal(true);
    setTextId(id);
  }

  async function deleteTextConfirm() {
    dispatch(deleteText(textId, refetch));
    setDeleteTextModal(false);
  }

  return (
    <>
      {createVideoModal && (
        <NewsCreateModal
          type="video"
          videoActive={createVideoModal}
          setVideoActive={setCreateVideoModal}
          data={newsData}
          setData={setNewsData}
          videoData={videoData}
          setVideoData={setVideoData}
          editVideoConfirm={editVideoConfirm}
        />
      )}
      {createImageModal && (
        <NewsCreateModal
          type="image"
          imageActive={createImageModal}
          setImageActive={setCreateImageModal}
          data={newsData}
          setData={setNewsData}
          imageData={imageData}
          setImageData={setImageData}
          editImageConfirm={editImageConfirm}
        />
      )}
      {createTextModal && (
        <NewsCreateModal
          type="text"
          textActive={createTextModal}
          setTextActive={setCreateTextModal}
          data={newsData}
          setData={setNewsData}
          textData={textData}
          setTextData={setTextData}
          editTextConfirm={editTextConfirm}
        />
      )}
      {deleteVideoModal && (
        <DeleteContent
          heading="Delete"
          message="Do you want to delete the video?"
          setDeleteModal={setDeleteVideoModal}
          confirmDelete={deleteVideoConfirm}
        />
      )}
      {deleteImageModal && (
        <DeleteContent
          heading="Delete"
          message="Do you want to delete the image?"
          setDeleteModal={setDeleteImageModal}
          confirmDelete={deleteImageConfirm}
        />
      )}
      {deleteTextModal && (
        <DeleteContent
          heading="Delete"
          message="Do you want to delete the text?"
          setDeleteModal={setDeleteTextModal}
          confirmDelete={deleteTextConfirm}
        />
      )}
      <DashboardLayout
        title={pathname.split("/")[2] === "edit" ? "Edit News" : "Add News"}
      >
        <BackButton location="/news" />
        <RichTextEditor
          setVideoModal={setCreateVideoModal}
          setImageModal={setCreateImageModal}
          setTextModal={setCreateTextModal}
          setCoverImage={setNewsCover}
          coverImage={newsCover}
          formData={newsData}
          setFormData={setNewsData}
          editData={newsSingleData}
          setEditData={setNewsSingleData}
          editVideoFunc={editVideoFunc}
          editImageFunc={editImageFunc}
          editTextFunc={editTextFunc}
          deleteVideoModalFunc={deleteVideoModalFunc}
          deleteImageModalFunc={deleteImageModalFunc}
          deleteTextModalFunc={deleteTextModalFunc}
          editForm={editNewsForm}
          submitForm={submitNewsForm}
          showMaterial={false}
          edit={pathname.split("/")[2] === "edit"}
          saveBtnName="save"
          editBtnName="save"
          title={title}
          cancel={() => history.push("/news")}
          setOldData={setOldData}
          setTextData={setTextData}
          setImageData={setImageData}
          setVideoData={setVideoData}
        />
      </DashboardLayout>
    </>
  );
};

export default NewsAdd;
