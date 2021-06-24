import { useState } from 'react'
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import './NewsCreateModal.scss'
import Button from '../button/Button'
import { savevideoDetail } from '../../actions/newsActions'
import { useDispatch } from 'react-redux'
import DragDrop from '../dragDrop/DragDrop'
import CollectionModalHeader from './CollectionModalHeader'
import { InputFields, ErrorText, TextArea } from '../formUI/FormUI'

const CreateVideo = ({
  getRootProps,
  getInputProps,
  files,
  setFiles,
  videoActive,
  setVideoActive,
}) => {
  const { register, errors, handleSubmit } = useForm();
  const [videoData, setVideoData] = useState([]);
  const [videoCover, setVideoCover] = useState(null);

  // const dispatch = useDispatch();

  const addVideo = ({
    videoTitle,
    videoDescription,
    videoLink,
    videoResource,
  }) => {
    //   dispatch(savevideoDetail({ videoTitle, videoDescription }));
    //   // setVideoActive(false);
    console.log(videoTitle);
    console.log(videoLink);
    console.log(videoResource);
    const updateUsers = [
      {
        videoTitle: videoTitle,
        videoDescription: videoDescription,
        videoCover: videoCover,
        videoLink: videoLink,
      },
    ];
    setVideoData(updateUsers);
  };
  return (
    <>
      {videoActive && (
        <div className="collection-modal-container">
          <div>
            <div className="collection-modal-inner-container">
              <CollectionModalHeader
                title="Add video"
                clickHandler={setVideoActive}
              />
              <DragDrop
                getInputProps={getInputProps}
                getRootProps={getRootProps}
                files={files}
                onChange={(img) => setVideoCover(img)}
              />
              <div className="video-input-container">
                <InputFields
                  className="default-input-variation"
                  placeholder="Video title"
                  name="videoTitle"
                  ref={register({
                    required: {
                      value: true,
                      message: "Please enter video title",
                    },
                  })}
                  // onChange={(e) => videoTitleChange(e)}
                />
                <ErrorText
                  className="errorMsg"
                  message={errors.videoTitle && errors.videoTitle.message}
                />

                <TextArea
                  className="default-input-variation text-area-variation"
                  placeholder="Video description"
                  cols="3"
                  rows="7"
                  name="videoDescription"
                  ref={register({
                    required: {
                      value: true,
                      message: "Please enter a video description",
                    },
                  })}
                />
                <ErrorText
                  className="errorMsg"
                  message={
                    errors.videoDescription && errors.videoDescription.message
                  }
                />
                <div className="video-row-3">
                  <input
                    type="url"
                    className="default-input-variation last-input-variation"
                    placeholder="Video link"
                    name="videoLink"
                    ref={register}
                  />
                  <span>OR</span>
                  <input
                    type="file"
                    accept="video/*"
                    className="videoUploadBtn"
                    name="videoResource"
                    ref={register}
                  />
                </div>
              </div>
              <Button name="Add Video block" onClick={handleSubmit(addVideo)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateVideo;
