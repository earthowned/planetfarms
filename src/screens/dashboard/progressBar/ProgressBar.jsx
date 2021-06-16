import useSizeFinder from '../../../utils/sizeFinder'
import './ProgressBar.scss'

const ProgressBar = (props) => {
  const { percent, text } = props

  const fillerStyles = {
    width: `${percent}%`
  }

  const windowWidth = useSizeFinder()

  return (
    <>
      {
      windowWidth >= 550
        ? <div className='progress-container'>
          <div style={fillerStyles} className='filler' />
          <p className='text-style'>{text}</p>
          <p className='percent-text'>{percent}%</p>
          </div>
        : <div className='progres-main-container'>
          <p className='progress-des'>{text}</p>
          <div className='progress-bar'>
            <div style={fillerStyles} className='filler-style' />
            <p className='progress-percent-text'>{percent}%</p>
          </div>
          </div>
  }
    </>
  )
}

export default ProgressBar
