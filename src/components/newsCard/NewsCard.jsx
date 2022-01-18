import NewsSingleCard from "./NewsSingleCard";
import "./NewsCard.scss";

function NewsCard({ news, editCard, deleteNewsCard }) {
  return (
    <>
      {news &&
        news.map((item) => {
          return (
            <NewsSingleCard
              news={item}
              editCard={editCard}
              deleteNewsCard={deleteNewsCard}
              creator={item.creator}
              key={item.id}
            />
          );
        })}
    </>
  );
}

export default NewsCard;
