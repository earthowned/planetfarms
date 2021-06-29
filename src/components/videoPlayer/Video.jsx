import { useState } from 'react'
import ReactPlayer from 'react-player'
import { ReactComponent as Play } from '../../assets/images/play.svg'
import './Video.scss'
import video from '../../assets/videoplayback.mp4'

const Video = ({ title, description, url, thumbnail }) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <div className='player'>
      <div className={showInfo ? 'info hide' : 'info'}>
        <h1 className='videoTitle'>{title}</h1>
        <p className='videoDesc'>{description}</p>
      </div>
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
    </div>
  )
}

export default Video
