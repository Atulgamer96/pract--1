import React from "react";
import "../../stylesheets/Charts.css";
import { Bar } from "react-chartjs-2";
import { summaryOfEventChartData, ParticipantsChartData } from "../../APIs/chartAPI";
import { Chart as ChartJS, defaults } from "chart.js/auto";

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

function Charts() {
  const formatChartData = (chartData) => ({
    labels: chartData.categories,
    datasets: chartData.series.map((item) => ({
      label: item.name,
      data: item.data,
      backgroundColor: item.name === "SIH 1.0" ? "rgba(54, 162, 235, 0.6)" : "rgba(255, 99, 132, 0.6)",
      borderColor: item.name === "SIH 1.0" ? "rgba(54, 162, 235, 1)" : "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    })),
  });

  return (
    <div className="charts-container">
      <div className="dataCard summaryCard">
        <Bar
          data={formatChartData(summaryOfEventChartData)}
          options={{
            plugins: {
              title: { text: summaryOfEventChartData.chartTitle },
            },
            scales: {
              y: { beginAtZero: true, title: { display: true, text: "Values" } },
              x: { title: { display: true, text: "Categories" } },
            },
          }}
        />
      </div>

      <div className="dataCard participantsCard">
        <Bar
          data={formatChartData(ParticipantsChartData)}
          options={{
            plugins: {
              title: { text: ParticipantsChartData.chartTitle },
            },
            scales: {
              y: { beginAtZero: true, title: { display: true, text: "Count" } },
              x: { title: { display: true, text: "Categories" } },
            },
          }}
        />
      </div>
    </div>
  );
}

export default Charts;
