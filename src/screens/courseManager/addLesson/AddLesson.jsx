import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { createLesson } from "../../../actions/lessonActions";
// import { createMaterial } from "../../../actions/materialActions";
import { addVideo } from "./addVideo";
import { addText } from "./addText";
import { addImage } from "./addImage";
import { addMaterial } from "./addMaterial";

import AddContent from "./AddContent";
import LessonMaterial from "./LessonMaterial";
import LessonSaveModal from "./LessonSaveModal";
import AddTestModal from "../../../components/addTestModal/AddTestModal";
import BackButton from "../../../components/backButton/BackButton";
import NewsCreateModal from "../../../components/newsCreateModal/NewsCreateModal";
import DashboardLayout from "../../../layout/dashboardLayout/DashboardLayout";
import "./AddLesson.scss";

const AddLesson = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { courseId } = useParams();
  const postLessonData = useSelector((state) => state.addLesson);

  const [videoModal, setVideoModal] = useState(false);
  const [imageModal, setImageModal] = useState(false);
  const [textModal, setTextModal] = useState(false);
  const [testModal, setTestModal] = useState(false);
  const [lessonData, setLessonData] = useState([]);
  const [lessonCover, setLessonCover] = useState(null);
  const [videoDataToPost, setVideoDataToPost] = useState(null);
  const [lessonImgDataToPost, setLessonImgDataToPost] = useState(null);
  const [text, setText] = useState([]);
  const [material, setMaterial] = useState([]);

  const { register, errors, handleSubmit } = useForm();

  console.log(lessonData);

  const submitLessonForm = ({ title, lessonDesc }) => {
    const coverImg = lessonCover;
    dispatch(
      createLesson({
        title,
        courseId,
        coverImg,
        lessonDesc,
      })
    );
  };

  console.log(postLessonData);
  useEffect(() => {
    if (
      Object.keys(postLessonData).length !== 0 &&
      postLessonData.loading === false
    ) {
      const id = postLessonData?.course?.data?.id;
      const lessonId = id;
      if (id) {
        if (videoDataToPost) {
          addVideo(lessonData, lessonId, dispatch);
        }
        if (lessonImgDataToPost) {
          addImage(lessonData, lessonId, dispatch);
        }
        if (text) {
          addText(lessonData, lessonId, dispatch);
        }
        if (material !== null) {
          addMaterial({ material, lessonId, dispatch });
        }
      }
      history.push(`/lesson/${id}`);
    }
  }, [postLessonData, addVideo, addImage, addText]);

  return (
    <>
      {videoModal && (
        <NewsCreateModal
          type="video"
          videoActive={videoModal}
          setVideoActive={setVideoModal}
          lessonData={lessonData}
          setLessonData={setLessonData}
          setVideoDataToPost={setVideoDataToPost}
        />
      )}
      {imageModal && (
        <NewsCreateModal
          type="image"
          imageActive={imageModal}
          setImageActive={setImageModal}
          lessonData={lessonData}
          setLessonData={setLessonData}
          setLessonImgDataToPost={setLessonImgDataToPost}
        />
      )}
      {testModal && <AddTestModal setTestModal={setTestModal} />}
      {textModal && (
        <NewsCreateModal
          type="text"
          textActive={textModal}
          setTextActive={setTextModal}
          placeholder="Text Heading"
          lessonData={lessonData}
          setLessonData={setLessonData}
          setText={setText}
        />
      )}
      <DashboardLayout title="Add new lesson">
        <BackButton location={`/admin/course/${courseId}`} />
        <AddContent
          setVideoModal={setVideoModal}
          setImageModal={setImageModal}
          setTextModal={setTextModal}
          setTestModal={setTestModal}
          register={register}
          errors={errors}
          setLessonCover={setLessonCover}
          lessonCover={lessonCover}
          lessonData={lessonData}
        />
        <LessonMaterial material={material} setMaterial={setMaterial} />
        <LessonSaveModal onClick={handleSubmit(submitLessonForm)} />
      </DashboardLayout>
    </>
  );
};

export default AddLesson;
