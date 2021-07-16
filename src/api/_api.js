import axios from "axios";

const url = "https://covid19.mathdro.id/api";

const onFetchData = () => {
  return axios.get(url);
};

const getDailyData = () => {
  return axios.get(url + "/daily");
};

const countriesData = () => {
  return axios.get(url + "/countries");
};

export { getDailyData, onFetchData, countriesData };
