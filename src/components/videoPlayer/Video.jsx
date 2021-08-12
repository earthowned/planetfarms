import { useState } from 'react'
import ReactPlayer from 'react-player'

import Actions from '../../screens/courseManager/addLesson/Actions'
import { ReactComponent as Play } from '../../assets/images/play.svg'
import { ReactComponent as BookMark } from '../../assets/images/book-outlined.svg'
import './Video.scss'

const Video = ({
  title,
  description,
  url,
  thumbnail,
  itemId,
  isEditable,
  onRemove,
  id,
  setEditVideoModel,
  modelPopUp
}) => {
  const [showInfo, setShowInfo] = useState(false)
  const poopUp = () => {
    modelPopUp(id)
    setEditVideoModel(true)
  }
  return (
    <>
      {url ? (
        <div className='player'>
          <div className={showInfo ? 'info hide' : 'info'}>
            <h1 className='videoTitle'>{title}</h1>
            <p className='videoDesc'>{description}</p>
            <p className='videoDesc'>{itemId}</p>
          </div>
          {isEditable ? (
            <Actions onRemove={onRemove} id={id} poopUp={poopUp} />
          ) : (
            <div className='addToLibrary'>
              <BookMark />
            </div>
          )}

          <ReactPlayer
            className='video'
            url={url}
            width='100%'
            height='100%'
            controls
            playIcon={<Play className='play' />}
            playing
            light={thumbnail}
            onClickPreview={() => setShowInfo(!showInfo)}
          />
          <Actions />
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default Video

