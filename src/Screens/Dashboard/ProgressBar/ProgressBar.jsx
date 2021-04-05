import "../achievements.css";

const ProgressBar = (props) => {
  const { percent, text } = props;

  const containerStyles = {
    height: 45,
    width: '100%',
    backgroundColor: "#050404",
    borderRadius: 5,
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'space-between',
  }

  const fillerStyles = {
    height: '100%',
    width: `${percent}%`,
    backgroundColor: "#74E7A0",
    borderRadius: 'inherit',
    textAlign: 'center',
  }
  const textStyle = {
    paddingTop: 13,
    textAlign: 'left',
    paddingLeft: 20,
    fontWeight: "bold",
  }

  const percentText = {
    paddingTop: 13,
    color: "#74E7A0",
    fontWeight: 1200,
    paddingRight: 4,
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
      <p style={textStyle}>{text}</p>
      </div>
      <p style={percentText}>{percent}%</p>
    </div>
  );
};

export default ProgressBar;