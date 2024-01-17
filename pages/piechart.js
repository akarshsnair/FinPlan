import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ tagTotals }) => {
  // Check if tagTotals is not defined or is an empty object
  if (!tagTotals || Object.keys(tagTotals).length === 0) {
    return <p>No data available for pie chart.</p>;
  }

  // Assuming your TAGS are predefined, use them to create labels and colors
  const labels = Object.keys(tagTotals);
  const data = labels.map((tag) => tagTotals[tag]);
  const backgroundColors = ['red', 'blue', 'green', 'orange', 'purple']; // Add more colors if needed

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: backgroundColors,
      },
    ],
  };

  const options = {
    // Add any specific options you need for your chart
  };

  return <Pie data={chartData} options={options} />;
};

export default PieChart;
