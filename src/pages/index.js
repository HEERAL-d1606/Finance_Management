import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import CompanyComparison from '../components/CompanyComparison';
import Table from '../components/Table';
import Graphs from '../components/Graphs';
import ExportWorkflow from '../components/ExportWorkflow';
// import CombinedLayout from '@/components/CombinedLayout';

const IndexPage = () => {
  const [companies, setCompanies] = useState([]);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [isExporting, setIsExporting] = useState(false);

  useEffect(() => {
    // Fetch companies data
    const fetchCompanies = async () => {
      const res = await fetch('/api/financialData'); // Correct API endpoint
      const data = await res.json();
      setCompanies(data);
    };

    fetchCompanies();
  }, []);

  const handleCompare = (selectedIds) => {
    const selectedData = companies.filter((company) => selectedIds.includes(company.id));
    setSelectedCompanies(selectedData);
  };

  const handleExport = (exportData) => {
    setIsExporting(false);
    // Add logic to export the selected companies' data as .pdf or .xlsx
    console.log('Exporting Data:', exportData);
  };

  return (
    <div>
      <Header />
      <CompanyComparison companies={companies} onCompare={handleCompare} />
      <Table data={selectedCompanies} />
      <Graphs data={companies} selectedCompanies={selectedCompanies} />
      {isExporting && <ExportWorkflow onExport={handleExport} />}
    </div>
  );
};

export default IndexPage;
