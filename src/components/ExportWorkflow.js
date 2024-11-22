import React, { useState } from 'react';

const ExportWorkflow = ({ onExport, onExportExcel }) => {
  const [name, setName] = useState('');
  const [dateRange, setDateRange] = useState('');
  const [explanation, setExplanation] = useState('');

  const handleExport = () => {
    if (name && dateRange && explanation) {
      const exportData = { name, dateRange, explanation };
      onExport(exportData); // Trigger export to PDF in parent component
    } else {
      alert('Please fill all fields');
    }
  };

  const handleExportExcel = () => {
    if (name && dateRange && explanation) {
      const exportData = { name, dateRange, explanation };
      onExportExcel(exportData); // Trigger export to Excel in parent component
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <section className="export-workflow-container">
      <h2 className="section-title">Export Data</h2>
      <div className="export-form">
        <div className="form-field">
          <label className="label">Enter Your Name</label>
          <input
            type="text"
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label className="label">Enter Date Range</label>
          <input
            type="text"
            className="input"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label className="label">Reason for Export</label>
          <textarea
            className="input"
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
          />
        </div>
        <div className="button-group">
          <button
            className="export-button"
            onClick={handleExportExcel}
          >
            Export as Excel
          </button>
          <button
            className="export-button"
            onClick={handleExport}
          >
            Export as PDF
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExportWorkflow;
