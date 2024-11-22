// src/pages/api/financialData.js
export default function handler(req, res) {
  const mockData = [
    {
      id: 1,
      name: "Company A",
      totalShares: 1000000,
      revenue: 5000000,
      PAT: 2000000,
      lastUpdated: "2024-11-01",
    },
    {
      id: 2,
      name: "Company B",
      totalShares: 2000000,
      revenue: 8000000,
      PAT: 3000000,
      lastUpdated: "2024-11-02",
    },
  ];

  res.status(200).json(mockData); // Respond with mock data
}
