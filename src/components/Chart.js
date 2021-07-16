import axios from "axios";
import { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";

const Chart = ({ countryData, country }) => {
  if (countryData) {
    var { confirmed, deaths, recovered } = countryData;
  }
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    axios
      .get("https://covid19.mathdro.id/api/daily")
      .then((res) => setDailyData(res.data));
  }, []);

  const data = {
    labels: dailyData.map((data) => data.reportDate),
    datasets: [
      {
        label: "confirmed",
        data: dailyData.map((data) => data.confirmed.total),
        borderColor: "#0084ff",
        fill: true,
      },
      {
        label: "deaths",
        data: dailyData.map((data) => data.deaths.total),
        backgroundColor: "rgba(255, 0, 85, 0.75)",
        borderColor: "#ff0055",
        fill: true,
      },
    ],
  };

  const barData = confirmed
    ? {
        labels: ["confirmed", "recovered", "deaths"],
        datasets: [
          {
            label: "# people",
            data: [confirmed.value, recovered.value, deaths.value],
            backgroundColor: [
              "rgba(0, 132, 255, .7)",
              "rgba(0, 255, 128, .7)",
              "rgba(255, 0, 85, .7)",
            ],
          },
        ],
      }
    : null;
  return (
    <div className="chart-container">
      <h2 className="chart-head">Covid-19 Records</h2>
      {!country ? <Line data={data} /> : <Bar data={barData} />}
    </div>
  );
};

export default Chart;
