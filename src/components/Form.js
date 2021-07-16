import { useState, useEffect } from "react";
import { countriesData } from "../api/_api";

const Form = ({ onInputHandler }) => {
  const [countries, setCountries] = useState();

  useEffect(
    () =>
      (async () => {
        await countriesData()
          .then((res) => setCountries(res.data))
          .catch((err) => console.error(err));
      })(),
    []
  );

  return (
    <div className="form">
      <input
        list="countries"
        placeholder="global"
        onChange={(e) => {
          e.preventDefault();
          if (e.target.value) {
            onInputHandler(e.target.value);
          }
        }}
      />
      <datalist id="countries">
        {countries
          ? countries.countries.map((country, idx) => (
              <option value={country.name} key={idx} />
            ))
          : ""}
      </datalist>
    </div>
  );
};

export default Form;
