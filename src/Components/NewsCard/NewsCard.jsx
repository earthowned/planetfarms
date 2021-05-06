import './news-card.css'
import { Link } from 'react-router-dom'

function NewsCard ({ news }) {
  return (
    <>
      {news.map((news) => {
        return (
          <Link to={{ pathname: '/community-page-news-view', state: { news } }}>
            <div key={news.id} className='news-card border-1px-onyx'>
              <div className='newsCard-group'>
                {/* <div className="frame-time" style={{backgroundImage:`url(${news.bgImage})`}}> */}
                <div className='newsCard-group1'>
                  <div className='frame-3470 border-0-5px-quarter-spanish-white'>
                    <div className='address ibmplexsans-normal-quarter-spanish-white-14px'>
                      {news.readTime}
                    </div>
                  </div>
                </div>
                {/* </div> */}
                <div className='frame-text'>
                  <div className='frame-3501'>
                    <div className='farming ibmplexsans-semi-bold-caribbean-green-14px'>
                      {news.title}
                    </div>
                    <h1 className='subtitle ibmplexsans-semi-bold-quarter-spanish-white-24px'>
                      {/* {news.subtitle} */}
                    </h1>
                  </div>
                  <div className='overflow module'>
                    <p className='news-text ibmplexsans-normal-quarter-spanish-white-16px'>
                      {news.message}
                    </p>
                  </div>
                  <div className='date ibmplexsans-normal-quarter-spanish-white-14px'>
                    {news.createdAt}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )
      })}
    </>
  )
}

export default NewsCard
