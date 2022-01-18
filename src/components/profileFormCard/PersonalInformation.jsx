import moment from "moment";
import ProfileFormCard from "./ProfileFormCard";

const PersonalInformation = ({ user, isCurrentUser }) => {
  const PersonalInformationdata = {
    title: "Personal information",
    firstTitle: "First Name",
    firstValue: user?.firstName || "N/A",
    secondTitle: "Last Name",
    secondValue: user?.lastName || "N/A",
    ...(isCurrentUser
      ? {
          thirdTitle: "Date of birthday",
          thirdValue:
            (user?.dateOfBirth &&
              moment.utc(new Date(user?.dateOfBirth)).format("ddd LL")) ||
            "N/A",
        }
      : {}),
  };
  return <ProfileFormCard data={PersonalInformationdata} />;
};

export default PersonalInformation;
