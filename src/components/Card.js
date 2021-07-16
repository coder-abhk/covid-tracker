import CountUp from "react-countup";

const Card = ({ data }) => {
  if (data) {
    var { confirmed, recovered, deaths, lastUpdate } = data;
  }

  if (!confirmed) {
    return <p className="loader">loading...</p>;
  }

  return (
    <div className="cards-container">
      {confirmed ? (
        <>
          {" "}
          <div className="card">
            <div className="card-head">
              <h3>Confirmed</h3>
            </div>
            <div className="card-content">
              <p>
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={2.75}
                  separator=","
                />
              </p>
              <p>
                <small>
                  Last Update - {new Date(lastUpdate).toDateString()}
                </small>
              </p>
              <p className="text">Infected people by novel coronavirus.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-head">
              <h3>Recovered</h3>
            </div>
            <div className="card-content">
              <p>
                <CountUp
                  start={0}
                  end={recovered.value}
                  duration={2.75}
                  separator=","
                />
              </p>
              <p>
                <small>
                  Last Update - {new Date(lastUpdate).toDateString()}
                </small>
              </p>
              <p className="text">People recovered from covid-19.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-head">
              <h3>Deaths</h3>
            </div>
            <div className="card-content">
              <p>
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={2.75}
                  separator=","
                />
              </p>
              <p>
                <small>
                  Last Update - {new Date(lastUpdate).toDateString()}
                </small>
              </p>
              <p className="text">Death caused by covid-19.</p>
            </div>
          </div>{" "}
        </>
      ) : null}
    </div>
  );
};

export default Card;
