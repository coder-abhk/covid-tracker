const Form = ({ onInputHandler, countries, setCountry }) => {
  return (
    <div className="form">
      <form action="/" onSubmit={(e) => e.preventDefault()}>
        <input
          list="countries"
          placeholder="select a country..."
          onChange={(e) => {
            e.preventDefault();
            if (e.target.value) {
              onInputHandler(e.target.value);
              setCountry(e.target.value);
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
      </form>
    </div>
  );
};

export default Form;
