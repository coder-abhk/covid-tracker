import { useEffect, useState } from "react";
import Card from "./components/Card";
import Chart from "./components/Chart";
import Form from "./components/Form";
import Footer from "./components/Footer";
import axios from "axios";
import virusImg from "./assets/img/bacteria.png";

const App = () => {
  const [country, setCountry] = useState("");
  const [data, setData] = useState();
  const [countries, setCountries] = useState();

  useEffect(() => {
    axios
      .get("https://covid19.mathdro.id/api")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios
      .get("https://covid19.mathdro.id/api/countries")
      .then((res) => setCountries(res.data))
      .catch((err) => console.error(err));
  }, []);

  const onInputHandler = async (country) => {
    await axios
      .get(`https://covid19.mathdro.id/api/countries/${country}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  };
  return (
    <>
      <h2 className="header">
        COVID-19 <img src={virusImg} alt="" /> TRACKER
      </h2>
      <Card data={data} />
      <Form
        onInputHandler={onInputHandler}
        countries={countries}
        setCountry={setCountry}
      />
      <Chart countryData={data} country={country} />
      <Footer />
    </>
  );
};

export default App;
