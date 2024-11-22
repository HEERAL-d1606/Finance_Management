import React, { useState } from 'react';
import ExportWorkflow from './ExportWorkflow'; // Import ExportWorkflow component
import { exportToExcel } from '../utils/exportToExcel'; // Import export utilities
import { exportToPDF } from '../utils/exportToPDF'; // Import export utilities

const CompanyComparison = ({ companies, onCompare }) => {
  const [selectedIds, setSelectedIds] = useState([]);

  // Handle checkbox change (select/deselect companies)
  const handleCheckboxChange = (companyId) => {
    setSelectedIds((prevSelectedIds) => {
      if (prevSelectedIds.includes(companyId)) {
        return prevSelectedIds.filter((id) => id !== companyId); // Deselect
      } else {
        return [...prevSelectedIds, companyId]; // Select
      }
    });
  };

  // Handle the compare action
  const handleCompareClick = () => {
    onCompare(selectedIds);
  };

  // Handle export to PDF
  const handleExport = ({ name, dateRange, explanation }) => {
    const selectedCompanies = companies.filter((company) =>
      selectedIds.includes(company.id)
    );

    const exportData = selectedCompanies.map((company) => ({
      companyName: company.companyName,
      revenue: company.revenue,
      profitMargin: company.profitMargin,
      sector: company.sector,
    }));

    if (exportData.length > 0) {
      exportToPDF(exportData, name, dateRange, explanation);
    } else {
      alert('No companies selected for export');
    }
  };

  // Handle export to Excel
  const handleExportExcel = ({ name, dateRange, explanation }) => {
    const selectedCompanies = companies.filter((company) =>
      selectedIds.includes(company.id)
    );

    const exportData = selectedCompanies.map((company) => ({
      companyName: company.companyName,
      revenue: company.revenue,
      profitMargin: company.profitMargin,
      sector: company.sector,
    }));

    if (exportData.length > 0) {
      exportToExcel(exportData, name, dateRange, explanation);
    } else {
      alert('No companies selected for export');
    }
  };

  return (
    <div className="parent-card">
      <div className="flex">
        {/* Company Comparison Section */}
        <div className="comparison-card">
          <h2 className="section-title">Select Companies for Comparison</h2>
          <div className="checkbox-container">
            {companies?.map((company) => (
              <div key={company.id} className="checkbox-item">
                <label
                  htmlFor={`company-${company.id}`}
                  className="checkbox-label"
                >
                  {company.companyName}
                </label>
                <input
                  type="checkbox"
                  id={`company-${company.id}`}
                  checked={selectedIds.includes(company.id)}
                  onChange={() => handleCheckboxChange(company.id)}
                  className="checkbox-input"
                />
              </div>
            ))}
          </div>
          <button
            onClick={handleCompareClick}
            className="compare-button"
          >
            Compare the Data
          </button>
        </div>

        {/* Export Workflow Section */}
        <div className="export-card">
          <ExportWorkflow
            onExport={handleExport}
            onExportExcel={handleExportExcel}
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyComparison;
