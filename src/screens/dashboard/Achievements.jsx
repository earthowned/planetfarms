import React from "react";
import "./Achievements.css";
import ProgressBar from "./progressBar/ProgressBar";
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout';
import BackButton from "../../components/backButton/BackButton";

function Achievements() {
  return(
    <DashboardLayout title="My Achievements">
     <div className="x10-2-0-my-achievements">
      <div className="flex-col">
        <BackButton location={"/dashboard"} />
        <div className="achievements-hero border-1px-onyx">
          <div className="achievements-info">
            <div className="profile"></div>
            <div className="flex-col-4">
              <div className="name ibmplexsans-semi-bold-quarter-spanish-white-24px">Mikhail Ugryumov</div>
              <div className="your-achievements-level border-1px-onyx">
                <div className="unknown-1">
                  <div className="overlap-group-3">
                    <div className="group">
                      <div className="overlap-group1">
                        <img
                          className="vector-11"
                          src="https://anima-uploads.s3.amazonaws.com/projects/6062d6e20bde0e437064350b/releases/6066cc208808fdc0d78f8168/img/vector-7@2x.png"
                        />
                        <img
                          className="group-1"
                          src="https://anima-uploads.s3.amazonaws.com/projects/6062d6e20bde0e437064350b/releases/6066cc208808fdc0d78f8168/img/group@2x.png"
                        />
                      </div>
                    </div>
                    <div className="number-3 valign-text-middle">4</div>
                  </div>
                </div>
                <div className="frame-3055">
                  <div className="achivement-level-content">
                    Your achievement level: 4
                  </div>
                  <div className="frame-3054">
                    <div className="overlap-group">
                      <div className="text-13 valign-text-middle">24/25</div>
                    </div>
                  </div>
                  <p className="text-14 valign-text-middle">
                    You need to finish one more achievement to have a new level
                  </p>
                </div>
              </div>
            </div>
            <div className="total-achievements border-1px-onyx">
              <div className="my-achievements-tota valign-text-middle ibmplexsans-normal-quarter-spanish-white-16px">
                <span>
                  <span className="span0-1">Total achievements: </span>
                  <span className="span1-1">245</span>
                </span>
              </div>
              <p className="progress-bar-content">
                <span>
                  <span >My achievement progress: </span>
                  <span >56/245 (26%)</span>
                </span>
              </p>
              <div className="total-achievements-progressbar">
                <div className="overlap-group-5">
                  <div className="frame-3052">
                    <div className="phone valign-text-middle">56/245 (26%)</div>
                  </div>
                  <div className="frame-3053"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="achievements-progressbar">
            {/* header */}
            <h4 className="achievements-progressbar--header">Achievements in progress</h4>

            <div className="achievements-progress-table">
              <ProgressBar text="Be a member of 10 communities at least (5/10)" percent="50" />
              <ProgressBar text="Finish five star course in this year" percent="0" />
              <ProgressBar text="Make 15 unique posts in your own groups (14/15)" percent="97" />
              <ProgressBar text="Be a member of 10 communities at least (7/10)" percent="73" />
              <ProgressBar text="Make 15 unique posts in your own groups (14/15)" percent="97" />
              <ProgressBar text="Make 15 unique posts in your own groups (12/15)" percent="87" />
            </div>
          </div>
          <div className="finished-achievements-1">
            <h4 className="achievements-progressbar--header">Finished achievements</h4>
            <div className="finished-achievements">
            <ProgressBar text="Be a member of 10 communities at least (10/10)" percent="70" />
            <ProgressBar text="Make 15 unique posts in your own groups (15/15)" percent="95" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </DashboardLayout>
  )
}

export default Achievements;


