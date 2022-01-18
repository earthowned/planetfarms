/* eslint-disable react/jsx-no-bind */
import { useState, useEffect } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createLesson, updateLesson } from "../../../actions/lessonActions";
import BackButton from "../../../components/backButton/BackButton";
import NewsCreateModal from "../../../components/newsCreateModal/NewsCreateModal";
import DashboardLayout from "../../../layout/dashboardLayout/DashboardLayout";
import "./AddLesson.scss";
import useGetFetchData from "../../../utils/useGetFetchData";
import { deletePhoto, updatePhoto } from "../../../actions/photoActions";
import { deleteText, updateText } from "../../../actions/textActions";
import { deleteVideo, updateVideo } from "../../../actions/videoActions";
import { deleteMaterial } from "../../../actions/materialActions";
import RichTextEditor from "../../../components/richTextEditor/RichTextEditor";
import DeleteContent from "../../../components/deleteContent/DeleteContent";

const AddLesson = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { lessonId } = useParams();
  const { state } = useLocation();

  const { success: updateVideoSuccess } = useSelector((s) => s.updateVideo);
  const { success: deleteVideoSuccess } = useSelector((s) => s.deleteVideo);

  const { success: updateTextSuccess } = useSelector((s) => s.updateText);
  const { success: deleteTextSuccess } = useSelector((s) => s.deleteText);

  const { success: updatePhotoSuccess } = useSelector((s) => s.updatePhoto);
  const { success: deletePhotoSuccess } = useSelector((s) => s.deletePhoto);

  const [videoModal, setVideoModal] = useState(false);
  const [imageModal, setImageModal] = useState(false);
  const [textModal, setTextModal] = useState(false);

  const [lessonData, setLessonData] = useState([]);
  const [lessonSingleData, setLessonSingleData] = useState([]);
  const [lessonCover, setLessonCover] = useState(null);
  const [material, setMaterial] = useState([]);
  const [fetchLesson] = useState([]);

  const [deleteVideoModal, setDeleteVideoModal] = useState(false);
  const [deleteImageModal, setDeleteImageModal] = useState(false);
  const [deleteTextModal, setDeleteTextModal] = useState(false);
  const [deleteMaterialModal, setDeleteMaterialModal] = useState(false);

  const [videoId, setVideoId] = useState(null);
  const [imageId, setImageId] = useState(null);
  const [textId, setTextId] = useState(null);
  const [materialId, setMaterialId] = useState(null);

  const [imageData, setImageData] = useState(null);
  const [videoData, setVideoData] = useState(null);
  const [textData, setTextData] = useState(null);
  const [courseId] = useState(state?.courseId);
  const [oldData, setOldData] = useState(null);

  const { pathname } = useLocation();
  const { data, refetch } = useGetFetchData(
    "LESSON_DATA",
    `${process.env.REACT_APP_API_BASE_URL}/api/lessons/${lessonId}`,
    null,
    pathname.split("/")[3] === "edit"
  );

  function getSingleLesson() {
    setLessonSingleData(data?.data);
  }

  // for edit
  useEffect(() => {
    if (pathname.split("/")[3] === "edit") {
      getSingleLesson();
    }
  }, [
    data,
    dispatch,
    lessonData,
    updateVideoSuccess,
    deleteVideoSuccess,
    updateTextSuccess,
    deleteTextSuccess,
    updatePhotoSuccess,
    deletePhotoSuccess,
  ]);

  async function editImageFunc(id) {
    if (lessonSingleData?.rich_text?.photos) {
      const photo = lessonSingleData.rich_text.photos.filter(
        (el) => el.id === id
      );
      setImageData(photo);
    }
  }

  function editImageConfirm(editData) {
    const { id, isImgDesc, lessonImg, photoDescription } = editData;
    dispatch(
      updatePhoto({
        iData: { img: lessonImg, photoDescription, isImgDesc },
        id,
        setEditPhotoModel: setImageModal,
        refetch,
      })
    );
  }

  async function editTextFunc(id) {
    if (lessonSingleData?.rich_text?.texts) {
      const text = lessonSingleData.rich_text.texts.filter(
        (el) => el.id === id
      );
      setTextData(text);
    }
  }
  function editTextConfirm(editData) {
    const { id, textHeading, textDescription } = editData;
    dispatch(
      updateText({
        textId: id,
        textHeading,
        textDescription,
        setEditTextModel: setTextModal,
        refetch,
      })
    );
  }

  async function editVideoFunc(id) {
    if (lessonSingleData?.rich_text?.videos) {
      const video = lessonSingleData.rich_text.videos.filter(
        (el) => el.id === id
      );
      setVideoData(video);
    }
  }

  function editVideoConfirm(editData) {
    const {
      id,
      videoCover,
      videoTitle,
      videoDescription,
      videoLink,
      videoResource,
    } = editData;
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
        setEditVideoModel: setVideoModal,
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

  function deleteTextConfirm() {
    dispatch(deleteText(textId, refetch));
    setDeleteTextModal(false);
  }

  // create lesson
  const submitLessonForm = ({ title, lessonDesc }) => {
    const coverImg = lessonCover;
    const order = fetchLesson.length + 1;
    dispatch(
      createLesson({
        lessonDetail: {
          title,
          courseId,
          coverImg,
          lessonDesc,
        },
        order,
        lessonData,
        material,
        history,
      })
    );
  };
  // edit lesson
  const editLessonForm = ({ title, lessonDesc }) => {
    const coverImg = lessonCover;
    dispatch(
      updateLesson({
        lessonDetail: {
          title,
          coverImg,
          lessonDesc,
        },
        lessonId,
        history,
        lessonData: [oldData, lessonData].flat(),
        material,
        richtextId: lessonSingleData.rich_text.id,
      })
    );
  };

  const removeItem = (id) => {
    const newLessonData = lessonData.filter((item) => item.itemId !== id);
    setLessonData(newLessonData);
  };

  const removeMaterial = (e) => {
    const name = e.currentTarget.getAttribute("name");
    setMaterial(material.filter((item) => item?.mData?.preview !== name));
  };

  const removeMaterialModal = (id) => {
    setDeleteMaterialModal(true);
    setMaterialId(id);
  };
  const removeRemoteMaterial = () => {
    dispatch(deleteMaterial(materialId, refetch));
    setDeleteMaterialModal(false);
  };

  return (
    <>
      {videoModal && (
        <NewsCreateModal
          type="video"
          videoActive={videoModal}
          setVideoActive={setVideoModal}
          data={lessonData}
          setData={setLessonData}
          videoData={videoData}
          setVideoData={setVideoData}
          editVideoConfirm={editVideoConfirm}
        />
      )}
      {imageModal && (
        <NewsCreateModal
          type="image"
          imageActive={imageModal}
          setImageActive={setImageModal}
          data={lessonData}
          setData={setLessonData}
          imageData={imageData}
          setImageData={setImageData}
          editImageConfirm={editImageConfirm}
        />
      )}
      {textModal && (
        <NewsCreateModal
          type="text"
          textActive={textModal}
          setTextActive={setTextModal}
          data={lessonData}
          setData={setLessonData}
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
      {deleteMaterialModal && (
        <DeleteContent
          heading="Delete"
          message="Do you want to delete the material?"
          setDeleteModal={setDeleteMaterialModal}
          confirmDelete={removeRemoteMaterial}
        />
      )}
      <DashboardLayout
        title={
          pathname.split("/")[3] === "edit" ? "Edit Lesson" : "Add New Lesson"
        }
      >
        <BackButton location={`/admin/course/${courseId}`} />
        <RichTextEditor
          setVideoModal={setVideoModal}
          setImageModal={setImageModal}
          setTextModal={setTextModal}
          setCoverImage={setLessonCover}
          coverImage={lessonCover}
          formData={lessonData}
          setFormData={setLessonData}
          editData={lessonSingleData}
          setEditData={setLessonSingleData}
          removeItem={removeItem}
          editVideoFunc={editVideoFunc}
          editImageFunc={editImageFunc}
          editTextFunc={editTextFunc}
          deleteVideoModalFunc={deleteVideoModalFunc}
          deleteImageModalFunc={deleteImageModalFunc}
          deleteTextModalFunc={deleteTextModalFunc}
          editForm={editLessonForm}
          submitForm={submitLessonForm}
          material={material}
          materialData={lessonSingleData?.materials}
          setMaterial={setMaterial}
          removeMaterial={removeMaterial}
          showMaterial
          edit={pathname.split("/")[3] === "edit"}
          saveBtnName="save lesson"
          editBtnName="save"
          cancel={() => history.push(`/admin/course/${courseId}`)}
          setOldData={setOldData}
          dispatch={dispatch}
          refetch={refetch}
          setTextData={setTextData}
          setImageData={setImageData}
          setVideoData={setVideoData}
          removeMaterialModal={removeMaterialModal}
        />
      </DashboardLayout>
    </>
  );
};

export default AddLesson;
