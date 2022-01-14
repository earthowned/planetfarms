import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { followGroup } from "../../actions/communityGroupActions";
import { followEnterprise } from "../../actions/enterpriseAction";
import CardLayout from "../../layout/cardLayout/CardLayout";
import Button from "../button/Button";
import Secondarybtn from "../secondaryBtn/Secondarybtn";
import "./CommunityGroupCard.scss";

const CommunityGroupCard = ({
  data = [],
  location,
  type = "group",
  editCard,
  deleteCard,
}) => {
  return (
    <>
      <CardLayout data={data}>
        {data.length > 0 &&
          data.map((item) => {
            return (
              <CommunityGroupSingleCard
                item={item}
                type={type}
                editCard={editCard}
                deleteCard={deleteCard}
              />
            );
          })}
      </CardLayout>
    </>
  );
};

const CommunityGroupSingleCard = ({ item, type, editCard, deleteCard }) => {
  const [dropDown, setDropDown] = useState(false);
  const [follower, setFollower] = useState(true);
  const [followCount, setFollowCount] = useState(0);
  const [creator, setCreator] = useState(false);
  const history = useHistory();
  const [follow, setFollow] = useState(false);
  const followClick = () => {
    setFollow(!follow);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (item.isCreator === "true") setCreator(true);

    if (item.isFollowed === "1") setFollower(false);
    if (item.hasOwnProperty("groupFollowersCount")) {
      setFollowCount(parseInt(item.groupFollowersCount));
    } else {
      setFollowCount(parseInt(item.enterpriseFollowersCount));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const followHandle = () => {
    if (item.hasOwnProperty("groupFollowersCount")) {
      dispatch(followGroup(item.id));
    } else {
      dispatch(followEnterprise(item.id));
    }
    setFollower(!follower);
    if (!follower) {
      setFollowCount((existing) => existing - 1);
    } else {
      setFollowCount((existing) => existing + 1);
    }
  };

  const groupEditCard = (id) => {
    editCard(id);
    setDropDown(false);
  };

  const groupDeleteCard = (id) => {
    deleteCard(id);
    setDropDown(false);
  };

  return (
    <div key={item.id} className="card-1 border-1px-onyx">
      {creator && (
        <div className="card-edit card-edit-alternate">
          <div>
            <div
              onClick={() => setDropDown(!dropDown)}
              className="card-edit-button"
            >
              <img src="/img/more-horizontal.svg" alt="burger icon" />
            </div>
            {dropDown && (
              <div className="dropdown-card-items">
                <ul>
                  <li onClick={() => groupEditCard(item.id)}>
                    <img src="/img/edit-icon.svg" alt="burger icon" />{" "}
                    <span>Edit</span>
                  </li>
                  <li onClick={() => groupDeleteCard(item.id)}>
                    <img src="/img/trash-icon.svg" alt="burger icon" />{" "}
                    <span>Delete</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
      <div
        className="card-container"
        style={{
          background: `linear-gradient(359.99deg, rgba(25, 28, 33, 0.4) 10.01%, rgba(25, 28, 33, 0.4) 40.99%), 
        url(${
          process.env.REACT_APP_CDN_BASE_URL + "/" + type + "/" + item.filename
        })`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="community-group-card-inner-content">
        <div
          onClick={() => history.push(`/groups/${item.id}`)}
          className="card-text-container"
        >
          <div className="farmers ibmplexsans-semi-bold-caribbean-green-14px">
            {item.category}
          </div>
          <div className="think-like-a-farmer ibmplexsans-semi-bold-quarter-spanish-white-24px">
            {item.title}
          </div>
        </div>
        <div className="follower-container">
          <div className="follower-number-container">
            <div className="follower-number-item ibmplexsans-regular-normal-monsoon-16px">
              {followCount} followers
            </div>
            <p className="follower-number-item ibmplexsans-regular-normal-monsoon-16px">
              {new Date(item.createdAt).toDateString()}
            </p>
          </div>
          {follow ? (
            <div className="card-btn-container">
              <div className="card-secondary-btn-wrapper">
                <Secondarybtn clickHandler={followClick} name="Unfollow" />
              </div>
            </div>
          ) : (
            <div className="card-btn-container">
              <div className="card-secondary-btn-wrapper">
                <Secondarybtn name="Don't recommend" />
              </div>
              <div className="card-secondary-btn-wrapper">
                {creator ? (
                  <Button name="UnFollow" onClick={followHandle} disabled />
                ) : follower ? (
                  <Button name="Follow" onClick={followHandle} />
                ) : (
                  <Button name="UnFollow" onClick={followHandle} />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommunityGroupCard;
