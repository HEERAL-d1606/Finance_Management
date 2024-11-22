import React from 'react';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, BarElement, LinearScale, PointElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';


ChartJS.register(LineElement, CategoryScale, LinearScale, BarElement, PointElement, Title, Tooltip, Legend, ArcElement);

const Graphs = ({ selectedCompanies }) => {
  if (!selectedCompanies || selectedCompanies.length === 0) {
    return <div className="no-data">No companies are selected. Please select one or more company to compare the data.</div>;
  }

  const chartData = {
    labels: selectedCompanies.map(company => company.companyName),
    datasets: [
      {
        label: 'Revenue',
        data: selectedCompanies.map(company => parseFloat(company.revenue.replace('$', '').replace('M', ''))),
        borderColor: '#4e79a7',
        backgroundColor: 'rgba(78, 121, 167, 0.5)',
        fill: true,
      },
      {
        label: 'EBITDA',
        data: selectedCompanies.map(company => parseFloat(company.ebitda.replace('$', '').replace('M', ''))),
        borderColor: '#f28e2b',
        backgroundColor: 'rgba(242, 142, 43, 0.5)',
        fill: true,
      }
    ]
  };

  const pieChartData = {
    labels: selectedCompanies.map(company => company.companyName),
    datasets: [
      {
        data: selectedCompanies.map(company => parseFloat(company.revenue.replace('$', '').replace('M', ''))),
        backgroundColor: ['#4e79a7', '#f28e2b', '#e15759', '#76b7b2'],
      }
    ]
  };

  const doughnutChartData = {
    labels: selectedCompanies.map(company => company.companyName),
    datasets: [
      {
        data: selectedCompanies.map(company => parseFloat(company.ebitda.replace('$', '').replace('M', ''))),
        backgroundColor: ['#4e79a7', '#f28e2b', '#e15759', '#76b7b2'],
      }
    ]
  };

  return (
    <section className="graphs-container">
      <h2 className="graphs-title">Company Financial Data Comparison</h2>
      <div className="charts-grid">
        <div className="chart-item">
          <h3 className="chart-title">Revenue vs EBITDA (Bar Chart)</h3>
          <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: true }} />
        </div>
        <div className="chart-item">
          <h3 className="chart-title">Revenue vs EBITDA (Line Chart)</h3>
          <Line data={chartData} options={{ responsive: true, maintainAspectRatio: true }} />
        </div>
        <div className="chart-item">
          <h3 className="chart-title">Revenue Distribution (Pie Chart)</h3>
          <Pie data={pieChartData} options={{ responsive: true, maintainAspectRatio: true }} />
        </div>
        <div className="chart-item">
          <h3 className="chart-title">EBITDA Distribution (Doughnut Chart)</h3>
          <Doughnut data={doughnutChartData} options={{ responsive: true, maintainAspectRatio: true }} />
        </div>
      </div>
    </section>
  );
};

export default Graphs;
