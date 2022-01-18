import moment from "moment";
import ProfileFormCard from "./ProfileFormCard";

const AdditionalInformation = ({ user, isCurrentUser }) => {
  const AdditionalInformationdata = {
    title: "Additional information",
    firstTitle: "Last login",
    firstValue: user?.lastLogin
      ? moment(user?.lastLogin).format("ddd LL")
      : "N/A",
    secondTitle: "Numbers of visits",
    secondValue: user?.numberOfVisit || "N/A",
  };
  return <ProfileFormCard data={AdditionalInformationdata} />;
};

export default AdditionalInformation;
