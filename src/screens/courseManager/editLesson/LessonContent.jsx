import { GET_VIDEO, VIDEO_COVER, LESSON_IMG } from '../../../utils/urlConstants'
import Image from '../../../components/lessonImage/Image'
import Video from '../../../components/videoPlayer/Video'
import Text from '../addLesson/Text'

const LessonContent = ({ newData, setEditTextModel, modelPopUp }) => {
  return (
    <>
      {newData
        .sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1))
        .map((data, index) => (
          <div key={index}>
            <Text
              heading={data?.textHeading}
              desc={data?.textDescription}
              isEditable
              setEditTextModel={setEditTextModel}
              modelPopUp={modelPopUp}
              id={data?.id}
            />
            <Video
              title={data?.videoTitle}
              description={data?.videoDescription}
              url={
                data?.videoLink === 'undefined'
                  ? `${GET_VIDEO}${data?.videoResource}`
                  : data?.videoLink
              }
              thumbnail={`${VIDEO_COVER}${data?.videoCover}`}
            />

            {data?.lessonImg === undefined ? (
              ''
            ) : (
              <Image
                src={`${LESSON_IMG}${data?.lessonImg}`}
                desc={data?.isImgDesc === true && data?.photoDescription}
              />
            )}
          </div>
        ))}
    </>
  )
}

export default LessonContent
