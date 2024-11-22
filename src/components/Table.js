import React from 'react';

const Table = ({ data }) => {
  if (data.length === 0) {
    return <p></p>;
  }

  return (
    <section className="table-container">
      <h2 className="table-title">Financial Data Comparison</h2>
      <table className="financial-table">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Total Shares</th>
            <th>Revenue</th>
            <th>EBITDA</th>
            <th>PAT</th>
            <th>Liabilities</th>
            <th>Promoter Holdings</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {data.map((company) => (
            <tr key={company.id}>
              <td>{company.companyName}</td>
              <td>{company.totalShares}</td>
              <td>{company.revenue}</td>
              <td>{company.ebitda}</td>
              <td>{company.pat}</td>
              <td>{company.liabilities}</td>
              <td>{company.promotersHoldings}</td>
              <td>{company.lastUpdated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Table;
