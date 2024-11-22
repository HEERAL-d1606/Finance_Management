import { writeFile, utils } from "xlsx";

export const exportToExcel = (data, name, dateRange, reason) => {
  const ws = utils.json_to_sheet(data);
  const wb = utils.book_new();
  utils.book_append_sheet(wb, ws, "Financial Data");
  writeFile(wb, `${name || "Export"}.xlsx`);
};
