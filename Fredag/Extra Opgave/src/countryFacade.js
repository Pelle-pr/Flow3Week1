import utils from "./utils";

function countryFacade() {
  const labelURL = "http://localhost:3333/labels";
  const countryURL = "http://localhost:3333/countries";

  function getLabels(callback) {
    utils.fetchAny(labelURL, callback);
    //TODO: Get Labels from server
  }

  function getCountries(callback) {
    utils.fetchAny(countryURL, callback);
    //TODO: Get Countries from server
  }
  return {
    getLabels,
    getCountries,
  };
}

export default countryFacade();
