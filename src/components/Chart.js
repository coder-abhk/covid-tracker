import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { getDailyData } from "../api/_api";

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    (async () => {
      await getDailyData().then((res) => setDailyData(res.data));
    })();
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
  return (
    <div className="chart-container">
      <h2 className="chart-head">Global Cases</h2>
      {dailyData ? <Line data={data} /> : null}
    </div>
  );
};

export default Chart;
