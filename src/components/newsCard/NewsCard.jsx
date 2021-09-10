import NewsSingleCard from './NewsSingleCard'
import './NewsCard.scss'
function NewsCard ({ news, editCard, deleteNewsCard }) {
  return (
    <>
      {news &&
        news.map((news) => {
          return (
            <NewsSingleCard
              news={news}
              editCard={editCard}
              deleteNewsCard={deleteNewsCard}
              creator={news.creator}
              key={news.id}
            />
          )
        })}
    </>
  )
}

export default NewsCard
