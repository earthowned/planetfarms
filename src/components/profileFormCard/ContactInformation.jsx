import ProfileFormCard from "./ProfileFormCard";

const ContactInformation = ({ user, verification, isCurrentUser }) => {
  const ContactInformationdatadata = {
    title: "Contact information",
    firstTitle: "Email",
    firstValue: user?.email || "N/A",
    ...(isCurrentUser
      ? {
          secondTitle: "Phone",
          secondValue: user?.phone,
        }
      : {}),
    firstVerify: {
      isVerified: user?.emailVerified || false,
      clickHandler: verification?.emailClickHandler,
    },
    secondVerify: {
      isVerified: user?.phoneVerified || false,
      clickHandler: verification?.phoneClickHandler,
    },
  };
  return (
    <ProfileFormCard
      data={ContactInformationdatadata}
      isCurrentUser={isCurrentUser}
    />
  );
};

export default ContactInformation;
