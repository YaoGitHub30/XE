import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState, useEffect } from "react";
import { today,lastMonth } from "./CurrencySelector";

const LineChart = ({ baseCurrency, counterCurrency, isClicked }) => {
  const [exRate, setExRate] = useState([]);
  const [labels, setLabels] = useState([]);
  const [rate, setRate] = useState([]);

  useEffect(() => {
    const XE_API_KEY = process.env.REACT_APP_XE_API_KEY;
    const credentials = btoa(XE_API_KEY);
    const auth = { Authorization: `Basic ${credentials}` };
    const url =
      "https://xecdapi.xe.com/v1/historic_rate/period/?" +
      new URLSearchParams({
        from: baseCurrency,
        to: counterCurrency,
        start_timestamp: `${lastMonth}T00:00`,
        end_timestamp: `${today}T00:00`,
        interval: "daily",
        amount: 1,
      });
    fetch(url, { headers: auth })
      .then((response) => response.json())
      .then((jsonData) => {
        setExRate(jsonData.to[counterCurrency]);
        setLabels(
          jsonData.to[counterCurrency]
            .map((data) => data.timestamp)
            .map((data) => data.substr(0, 10))
        );
        setRate(jsonData.to[counterCurrency].map((data) => data.mid));
      });
  }, [isClicked, baseCurrency]);

  const timeFrame = (period) => {
    const labelsStamp = exRate.map((data) => data.timestamp);
    if (period === "week") {
      setLabels(labelsStamp.map((data) => data.substr(0, 10)).splice(-7));
      setRate(exRate.map((data) => data.mid).splice(-7));
    } else {
      setLabels(labelsStamp.map((data) => data.substr(0, 10)));
      setRate(exRate.map((data) => data.mid));
    }
  };
  const data = {
    labels: labels,
    datasets: [
      {
        label: "EOD Rate",
        data: rate,
        fill: true,
        borderColor: "#742774",
      },
    ],
  };
  return (
    <div>
      <Line
        data={data}
        height={20}
        width={100}
        option={{ maintainAspectRatio: false }}
      />
      <button onClick={() => timeFrame("week")}>1Week</button>
      <button onClick={() => timeFrame("month")}>1Month</button>
    </div>
  );
};

export default LineChart;
