import './Banner.scss'

const Banner = ({ bannerClass }) => {
  return (
    <div className={`banner ${bannerClass}`}>
      <div className='banner__image'>
        <div className='banner__overlap'>
          <img src='/img/banner-icon.svg' alt='banner-icon' />
        </div>
      </div>
    </div>
  )
}

export default Banner
