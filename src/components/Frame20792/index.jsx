import React from "react";
import Personaddoutline2 from "../Personaddoutline2";
import Trashoutline1 from "../Trashoutline1";
import "./Frame20792.css";

function Frame20792(props) {
  const { addMembers, vector, vector2, editEvent, deleteEvent, personaddoutline2Props, trashoutline1Props } = props;

  return (
    <div className="frame-20793">
      <div className="frame-20832">
        <div className="frame-20804">
          <Personaddoutline2
            vector={personaddoutline2Props.vector}
            vector2={personaddoutline2Props.vector2}
            vector3={personaddoutline2Props.vector3}
            vector4={personaddoutline2Props.vector4}
          />
          <div className="add-members2 inter-medium-quarter-spanish-white-16px">{addMembers}</div>
        </div>
      </div>
      <div className="frame-20822">
        <div className="frame-2080-12">
          <div className="edit-outline-1">
            <div className="layer-232">
              <div className="edit">
                <img className="vector22" src={vector} />
                <img className="vector-139" src={vector2} />
              </div>
            </div>
          </div>
          <div className="edit-event inter-medium-quarter-spanish-white-16px">{editEvent}</div>
        </div>
      </div>
      <div className="frame-20812">
        <div className="frame-2080-2">
          <Trashoutline1 vector={trashoutline1Props.vector} vector2={trashoutline1Props.vector2} />
          <div className="delete-event inter-medium-quarter-spanish-white-16px">{deleteEvent}</div>
        </div>
      </div>
    </div>
  );
}

export default Frame20792;
