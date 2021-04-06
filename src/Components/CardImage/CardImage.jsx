import React, { useState } from "react";
import { Link } from "react-router-dom";

const profileData = [
  {
    _id: 1,
    name: "Dianne Russel",
    text2: "Follow 28 communities",
    Image: "/img/person-1.svg",
  },
  {
    _id: 2,
    name: "Kriston Watson",
    text2: "Follow 28 communities",
    Image: "/img/profile-image-2.svg",
  },
  {
    _id: 3,
    name: "Leslie Alexander",
    text2: "Follow 28 communities",
    Image: "/img/profile-image-3.svg",
  },
  {
    _id: 4,
    name: "Ralph Edwards",
    text2: "Follow 28 communities",
    Image: "/img/profile-image-4.svg",
  },
  {
    _id: 5,
    name: "Guy Hawkins",
    text2: "Follow 28 communities",
    Image: "/img/profile-image-5.svg",
  },
  {
    _id: 6,
    name: "Jacob Jones",
    text2: "Follow 28 communities",
    Image: "/img/profile-image-6.svg",
  },
  {
    _id: 7,
    name: "Esther Howard",
    text2: "Follow 28 communities",
    Image: "/img/profile-image-7.svg",
  },
  {
    _id: 8,
    name: "Darrell Steward",
    text2: "Follow 28 communities",
    Image: "/img/profile-image-8.svg",
  },
  {
    _id: 9,
    name: "Cody Fisher",
    text2: "Follow 28 communities",
    Image: "/img/profile-image-9.svg",
  },
  {
    _id: 10,
    name: "Marvin McKinney",
    text2: "Follow 28 communities",
    Image: "/img/profile-image-5.svg",
  },
  {
    _id: 11,
    name: "Joe Jordinson",
    text2: "Follow 28 communities",
    Image: "/img/person-1.svg",
  },
  {
    _id: 12,
    name: "Joe Jordinson",
    text2: "Follow 28 communities",
    Image: "/img/profile-image-5.svg",
  },
  {
    _id: 13,
    name: "Dianne Russel",
    text2: "Follow 28 communities",
    Image: "/img/profile-image-3.svg",
  },
  {
    _id: 14,
    name: "Marvin McKinney",
    text2: "Follow 28 communities",
    Image: "/img/profile-image-2.svg",
  },
  {
    _id: 15,
    name: "Darrell Steward",
    text2: "Follow 28 communities",
    Image: "/img/profile-image-8.svg",
  },
];

function CardImage(props) {
  const { className } = props;
  const [follow, setFollow] = useState(false);

  const handleOnClick = () => {
    setFollow(!follow);
  };

  return (
    <>
      {profileData.map((profile) => {
        return (
          <div key={profile._id} className={`card-image-1 ${className || ""}`}>
            <Link
              to={`/community-members-profile/${profile._id}`}
              style={{ textDecoration: "none" }}
            >
              <div
                className="frame-2926"
                style={{ backgroundImage: `url(${profile.Image})` }}
              ></div>
              <div className="name-2">
                <div className="name-1 ibmplexsans-semi-bold-quarter-spanish-white-16px">
                  {profile.name}
                </div>

                <div className="text-2 ibmplexsans-normal-monsoon-14px">
                  {profile.text2}
                </div>
              </div>
            </Link>

            <div className="follow-2">
              <div className="person-add-outline-2-1">
                <div className="flex-row-7">
                  <img
                    style={{ height: "20px", width: "20px", cursor: "pointer" }}
                    src={
                      follow ? "img/follow-icon.svg" : "img/followed-icon.svg"
                    }
                    // src="img/follow-icon.svg"
                  />
                </div>
              </div>
              <div
                className={
                  follow
                    ? "follow ibmplexsans-semi-bold-caribbean-green-16px"
                    : "followed ibmplexsans-semi-bold-monsoon-16px"
                }
                style={{ cursor: "pointer" }}
                onClick={handleOnClick}
              >
                {follow ? "Follow" : "Followed"}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CardImage;
