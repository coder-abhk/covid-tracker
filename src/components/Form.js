const Form = ({ onInputHandler, countries }) => {
  return (
    <div className="form">
      <input
        list="countries"
        placeholder="select a country..."
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
