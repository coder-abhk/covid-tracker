import CountUp from "react-countup";

const Card = ({ label, value, date, text }) => {
  return (
    <div className="card">
      <div className="card-head">
        <h3>{label}</h3>
      </div>
      <div className="card-content">
        <p>
          <CountUp start={0} end={value} duration={2.75} separator="," />
        </p>
        <p>
          <small>Last Update - {date}</small>
        </p>
        <p className="text">{text}</p>
      </div>
    </div>
  );
};

export default Card;
