import React from "react";
import Text from "../../screens/courseManager/lesson/Text";
import Image from "../lessonImage/Image";
import Video from "../videoPlayer/Video";

const ContentAdd = ({
  data,
  setVideoModal,
  setImageModal,
  setTextModal,
  setTextData,
  setImgData,
  setVideoData,
  setData,
}) => {
  const editLocalTextData = (id) => {
    const localData = data.find((item) => item.itemId === id);
    setTextData([localData]);
  };
  const editLocalImgData = (id) => {
    const localData = data.find((item) => item.itemId === id);
    setImgData([localData]);
  };
  const editLocalVideoData = (id) => {
    const localData = data.find((item) => item.itemId === id);
    setVideoData([localData]);
  };
  const deleteLocal = (id) => {
    const dataAfterDelete = data.filter((item) => item.itemId !== id);
    setData(dataAfterDelete);
  };
  return (
    <>
      {data.length > 0 &&
        data.map((vid, index) => (
          <div key={`communities-card-content-add-${index.toString()}`}>
            <Video
              title={vid.videoTitle}
              description={vid.videoDescription}
              url={vid.videoLink || vid.videoResource?.preview}
              thumbnail={vid.videoCover?.preview}
              isEditable
              modelPopUp={editLocalVideoData}
              setEditVideoModel={setVideoModal}
              id={vid.itemId}
              onRemove={deleteLocal}
            />
            <Image
              src={vid.lessonImg?.preview}
              desc={vid.photoDescription}
              isEditable
              modelPopUp={editLocalImgData}
              setEditPhotoModel={setImageModal}
              id={vid.itemId}
              onRemove={deleteLocal}
            />
            <Text
              heading={vid.textHeading}
              desc={vid.textDescription}
              isEditable
              modelPopUp={editLocalTextData}
              setEditTextModel={setTextModal}
              id={vid.itemId}
              onRemove={deleteLocal}
            />
          </div>
        ))}
      <div className="admin-lesson-create-btn-wrapper">
        <button
          type="button"
          className="secondary-btn"
          onClick={() => setVideoModal(true)}
        >
          <img src="/img/video-outline.svg" alt="video icon" />{" "}
          <span>Add video</span>
        </button>
        <button
          type="button"
          className="secondary-btn"
          onClick={() => setImageModal(true)}
        >
          <img src="/img/image-outline.svg" alt="image_icon" />
          <span>Add image</span>
        </button>
        <button
          type="button"
          className="secondary-btn"
          onClick={() => setTextModal(true)}
        >
          <img src="/img/text-outline.svg" alt="text icon" />{" "}
          <span>Add text</span>
        </button>
      </div>
    </>
  );
};

export default ContentAdd;
