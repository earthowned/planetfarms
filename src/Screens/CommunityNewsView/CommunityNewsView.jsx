import React from "react";
import './community-news-view.css'
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout';
import BackButton from '../../Components/BackButton/BackButton'

function App() {
  return (
    <DashboardLayout >
    <div className="x03-1-0-news-page">
      <div className="flex-col-2">
        <BackButton location={"/community-page-news"} />
        <h1 className="news-view-title">Fueling the ethanol industry</h1>
        <div className="title-time">
          <div className="due-to-the-advantage valign-text-middle ibmplexsans-semi-bold-monsoon-16px">
            November 01, 2020
          </div>
          <div className="due-to-the-advantage-1 valign-text-middle ibmplexsans-semi-bold-monsoon-16px">4 min read</div>
        </div>
        <div className="frame-1969" style={{backgroundImage: `url("img/newsbg-image.png")`}}>
          <img className="ellipse-15" src="/img/newsbg-image.png" />
        </div>

        <div className="text-container">
        <p>
          Over the last ten years, the emphasis on reducing fuel emissions has been an agenda for many governments. In a
          bid to reduce their collective carbon footprint, many people have started looking for a way to control their
          impact on the environment. It is due to such a situation that the use of Ethanol fuel has increased in many
          countries. However, those wanting to switch to a different type of fuel have many questions about Ethanol.
          Many of these are concerned with what this fuel really is and how big a dent it makes in our lives and
          pockets.
          <br />
          <br />
          Ethanol, which is sometimes known as ethyl alcohol, is a kind of alcohol derived from corn, sugarcane, and
          grain or indirectly from paper waste. It’s also the main type of alcohol in most alcoholic beverages obtained
          as a result of fermentation of a mash of grains (gin, vodka, and whiskey) or sugarcane (rums). It’s also a
          source of fuel commonly blended with gasoline to oxygenate the fuel at the gas pump. Ethanol fuel can also be
          used on its own to power vehicles.
        </p>
        <p>
          Over the last ten years, the emphasis on reducing fuel emissions has been an agenda for many governments. In a
          bid to reduce their collective carbon footprint, many people have started looking for a way to control their
          impact on the environment. It is due to such a situation that the use of Ethanol fuel has increased in many
          countries. However, those wanting to switch to a different type of fuel have many questions about Ethanol.
          Many of these are concerned with what this fuel really is and how big a dent it makes in our lives and
          pockets.
          <br />
          <br />
          Ethanol, which is sometimes known as ethyl alcohol, is a kind of alcohol derived from corn, sugarcane, and
          grain or indirectly from paper waste. It’s also the main type of alcohol in most alcoholic beverages obtained
          as a result of fermentation of a mash of grains (gin, vodka, and whiskey) or sugarcane (rums). It’s also a
          source of fuel commonly blended with gasoline to oxygenate the fuel at the gas pump. Ethanol fuel can also be
          used on its own to power vehicles.
        </p>
        </div>
        <div className="button-row-3">
          <div className="button-secondary-default-1 border-0-5px-quarter-spanish-white">
            <img className="f1" src="/img/facebook-share-icon.svg" alt="facebook-icon" />
            <div className="your-business-goals valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-18px">
              Repost
            </div>
          </div>
          <div className="button-secondary-default border-0-5px-quarter-spanish-white">
            <img className="shape" src="/img/twitter-shape-icon.svg" alt="twitter-icon" />
            <div className="your-business-goals-1 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-18px">
              Tweet
            </div>
          </div>
        </div>
      </div>
    </div>
    </DashboardLayout>
  );
}

export default App;











