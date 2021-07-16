import { onFetchData, countriesData } from "./api/_api";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Chart from "./components/Chart";
import Form from "./components/Form";
import axios from "axios";
import virusImg from "./assets/img/bacteria.png";

const App = () => {
  const [data, setData] = useState();
  const [countries, setCountries] = useState();

  useEffect(
    () =>
      (async () => {
        await onFetchData()
          .then((res) => setData(res.data))
          .catch((err) => console.error(err));
      })(),
    []
  );

  useEffect(
    () =>
      (async () => {
        await countriesData()
          .then((res) => setCountries(res.data))
          .catch((err) => console.error(err));
      })(),
    []
  );

  const onInputHandler = async (country) => {
    await axios
      .get(`https://covid19.mathdro.id/api/countries/${country}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  };

  if (data) {
    var { confirmed, recovered, deaths, lastUpdate } = data;
  }

  return (
    <>
      <h2 className="header">
        COVID-19 <img src={virusImg} alt="" /> TRACKER
      </h2>
      {data ? (
        <div className="cards-container">
          <Card
            label="Confirmed"
            value={confirmed.value}
            date={new Date(lastUpdate).toDateString()}
            text="People infected by Covid-19"
          />
          <Card
            label="Recovered"
            value={recovered.value}
            date={new Date(lastUpdate).toDateString()}
            text="People Recovered from Covid-19"
          />
          <Card
            label="Deaths"
            value={deaths.value}
            date={new Date(lastUpdate).toDateString()}
            text="Deaths caused by Covid-19"
          />{" "}
        </div>
      ) : (
        ""
      )}
      <Form onInputHandler={onInputHandler} countries={countries} />
      <Chart countryData={data ? data : null} />
    </>
  );
};

export default App;
