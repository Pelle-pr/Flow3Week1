import React, { useState, useEffect } from "react";
import CountryTable from "./CountryTable";
import "./App.css";
import countryFacade from "./countryFacade";

function App() {
  const [label, setLabels] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    //Change the callback to populate table (rather than just console logging)
    countryFacade.getLabels((data) => {
      setLabels(data);
    });
  }, []);

  useEffect(() => {
    //Change the callback to populate table (rather than just console logging)
    countryFacade.getCountries((data) => {
      setCountries(data);
    });
  }, []);

  return (
    <div>
      <div className="App-header">
        <h2>React, State, Fetch</h2>
      </div>
      <div className="App-intro">
        <CountryTable labels={label} countries={countries} />
      </div>
    </div>
  );
}

export default App;
