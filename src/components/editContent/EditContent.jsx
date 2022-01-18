/* eslint-disable no-shadow */
/* eslint-disable no-nested-ternary */
import { useState, useEffect } from "react";
import { GET_VIDEO, VIDEO_COVER, LESSON_IMG } from "../../utils/urlConstants";
import Text from "../../screens/courseManager/lesson/Text";
import Image from "../lessonImage/Image";
import Video from "../videoPlayer/Video";

const EditContent = ({
  data,
  newLessonData,
  setEditTextModel,
  setEditPhotoModel,
  setEditVideoModel,
  removeTextItem,
  removePhoto,
  removeVideo,
  removeLocalData,
  editImageFunc,
  editVideoFunc,
  editTextFunc,
  setOldData,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [allLessonData, setAllLessonData] = useState([]);
  const [newData, setNewData] = useState([]);
  const textData = data?.rich_text?.texts?.map((text) => {
    return text;
  });
  const videoData = data?.rich_text?.videos?.map((video) => {
    return video;
  });
  const photoData = data?.rich_text?.photos?.map((photo) => {
    return photo;
  });

  useEffect(() => {
    setNewData([textData, videoData, photoData]);
    setOldData(
      [textData, videoData, photoData].flat().sort((a, b) => a.order - b.order)
    );
  }, [data]);

  const flattenData = newData.flat();

  useEffect(() => {
    setAllLessonData(data, newLessonData);
  }, [data, newLessonData]);

  return (
    <>
      {flattenData
        .sort((a, b) => a.order - b.order)
        .map((data, index) => (
          <div key={index.toString()}>
            <Text
              heading={data?.textHeading}
              desc={data?.textDescription}
              isEditable
              setEditTextModel={setEditTextModel}
              modelPopUp={editTextFunc}
              id={data?.id || data?.itemId}
              onRemove={data?.id ? removeTextItem : removeLocalData}
            />
            <Video
              title={data?.videoTitle}
              description={data?.videoDescription}
              url={
                data?.videoLink === "" || data?.videoLink === "undefined"
                  ? typeof data?.videoResource === "string"
                    ? `${GET_VIDEO}${data?.videoResource}`
                    : data?.videoResource?.preview
                  : data?.videoLink
              }
              thumbnail={
                typeof data?.videoCover === "string"
                  ? `${VIDEO_COVER}${data?.videoCover}`
                  : data?.videoCover?.preview
              }
              setEditVideoModel={setEditVideoModel}
              isEditable
              id={data?.id || data?.itemId}
              modelPopUp={editVideoFunc}
              onRemove={data?.id ? removeVideo : removeLocalData}
            />
            {data?.lessonImg && (
              <Image
                src={
                  typeof data?.lessonImg === "string"
                    ? `${LESSON_IMG}${data?.lessonImg}`
                    : data?.lessonImg.preview
                }
                id={data?.id || data?.itemId}
                modelPopUp={editImageFunc}
                setEditPhotoModel={setEditPhotoModel}
                isEditable
                desc={data?.isImgDesc === true && data?.photoDescription}
                onRemove={data?.id ? removePhoto : removeLocalData}
              />
            )}
          </div>
        ))}
    </>
  );
};

export default EditContent;
