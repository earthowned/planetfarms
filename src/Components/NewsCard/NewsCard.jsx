import "./news-card.css";

const newsData = [
  {
    _id:1,
    time: "6 min read",
    title: "Farming",
    subtitle: "Fueling the ethanol industry",
    description: ` Ethanol, which is sometimes known as ethyl alcohol, is a kind of alcohol derived from corn, sugarcane, and
      grain or indirectly from paper waste. It’s also the main type of alcohol in most alcoholic also the main
      type of alcohol in most alcoholic …`,
    published_On: "November 01, 2020",
    bgImage:"/img/bg-image1.svg"
  },

  {
    _id:2,
    time: "12 min read",
    title: "People",
    subtitle: "Fueling the ethanol industry",
    description: ` Ethanol, which is sometimes known as ethyl alcohol, is a kind of alcohol derived from corn, sugarcane, and
      grain or indirectly from paper waste. It’s also the main type of alcohol in most alcoholic also the main
      type of alcohol in most alcoholic …`,
    published_On: "November 02, 2020",
    bgImage:"/img/bg-image2.svg"
  },
  {
    _id:3,
    time: "6 min read",
    title: "Nature",
    subtitle: "Fueling the ethanol industry",
    description: ` Ethanol, which is sometimes known as ethyl alcohol, is a kind of alcohol derived from corn, sugarcane, and
      grain or indirectly from paper waste. It’s also the main type of alcohol in most alcoholic also the main
      type of alcohol in most alcoholic …`,
    published_On: "November 03, 2020",
    bgImage:"/img/bg-image2.svg"
  },
];

function NewsCard() {
  return (
    <>
      {newsData.map((news) => {
        return (
          <div key={news._id} className="news-card border-1px-onyx">
            <div className="newsCard-group">
              <div className="frame-time" style={{backgroundImage:`url(${news.bgImage})`}}>
                <div className="newsCard-group1">
                  <div className="frame-3470 border-0-5px-quarter-spanish-white">
                    <div className="address ibmplexsans-normal-quarter-spanish-white-14px">
                      {news.time}
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-text">
                <div className="frame-3501">
                  <div className="farming ibmplexsans-semi-bold-caribbean-green-14px">
                    {news.title}
                  </div>
                  <h4 className="subtitle">
                    {news.subtitle}
                  </h4>
                </div>
                <div className="overflow module">
                <p className="news-text ibmplexsans-normal-quarter-spanish-white-16px">
                  {news.description}
                </p>
                </div>
                <div className="date ibmplexsans-normal-quarter-spanish-white-14px">
                  {news.published_On}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default NewsCard;
