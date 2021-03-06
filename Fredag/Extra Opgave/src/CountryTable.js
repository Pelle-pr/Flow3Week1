import React from "react";

const CountryTable = (props) => {
  return (
    <div>
      <p>
        Replace the thead section with a row generated from the Labels endpoint
      </p>
      <p>
        Replace the tbody section with rows generated from the countries
        endpoint
      </p>
      <table className="table">
        <thead>
          <tr>
            {props.labels.map((label) => (
              <th key={label}>{label}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {props.countries.map((country) => (
            <tr key={country.name}>
              <td>{country.name}</td>
              <td>{country.capital}</td>
              <td>{country.region}</td>
              <td>{country.population}</td>
              <td>{country.area}</td>
              <td>{country.timezones}</td>
              <td>{country.borders}</td>
              <td>{country.topLevelDomain}</td>
              <td>{country.currencies}</td>
              <td>{country.languages}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default CountryTable;
