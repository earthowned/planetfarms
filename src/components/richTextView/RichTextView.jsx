/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from "react";

import Text from "../../screens/courseManager/lesson/Text";
import {
  GET_COVERIMG,
  GET_VIDEO,
  LESSON_IMG,
  VIDEO_COVER,
} from "../../utils/urlConstants";
import Image from "../lessonImage/Image";
import Video from "../videoPlayer/Video";

const RichTextView = ({ data, news }) => {
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
  }, [data]);
  const flattenData = newData.flat().filter(Boolean);
  return (
    <div className="lesson-description-wrapper">
      {news ? (
        <>
          <h1 className="news-view-title">{data?.title}</h1>
          <div className="title-time">
            <div className="due-to-the-advantage valign-text-middle ibmplexsans-semi-bold-monsoon-16px">
              {data?.createdAt && new Date(data?.createdAt).toDateString()}
            </div>
            <div className="due-to-the-advantage-1 valign-text-middle ibmplexsans-semi-bold-monsoon-16px">
              {data?.readTime}
            </div>
          </div>
          <Image
            src={`${process.env.REACT_APP_CDN_BASE_URL}/news/${data?._attachments}`}
          />
        </>
      ) : (
        <>
          <h1 className="news-view-title">{data?.title}</h1>
          {data?.lessonDesc !== "undefined" && <p>{data?.lessonDesc}</p>}
          {data?.coverImg && (
            <div className="lesson-description-img-wrapper">
              <img
                src={`${GET_COVERIMG}${data?.coverImg}`}
                alt={`${data?.title}_img`}
              />
            </div>
          )}
        </>
      )}
      {flattenData
        .sort((a, b) => a.order - b.order)
        .map((data, index) => (
          <div key={index.toString()}>
            <Text heading={data?.textHeading} desc={data?.textDescription} />
            <Video
              title={data?.videoTitle}
              description={data?.videoDescription}
              url={
                data?.videoLink === "undefined"
                  ? `${GET_VIDEO}${data?.videoResource}`
                  : data?.videoLink
              }
              thumbnail={`${VIDEO_COVER}${data?.videoCover}`}
            />
            {data?.lessonImg && (
              <Image
                src={`${LESSON_IMG}${data?.lessonImg}`}
                desc={data?.isImgDesc === true && data?.photoDescription}
              />
            )}
          </div>
        ))}
    </div>
  );
};

export default RichTextView;
