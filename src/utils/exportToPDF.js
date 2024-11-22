import jsPDF from "jspdf";

export const exportToPDF = (data, name, dateRange, reason) => {
  const doc = new jsPDF();
  doc.text("Financial Data Export", 10, 10);
  doc.text(`Name: ${name}`, 10, 20);
  doc.text(`Date Range: ${dateRange}`, 10, 30);
  doc.text(`Reason: ${reason}`, 10, 40);
  doc.save(`${name || "Export"}.pdf`);
};
