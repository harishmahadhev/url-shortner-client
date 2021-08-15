import React from "react";
import Table from "./Table";
import "./table.css";
import tableData from "../../../json/table_data.json";

export default function Views() {
  const TableHead = ["", "name", "longurl", "shorturl", "clicks", "date"];
  const renderHead = (item, index) => <th key={index}>{item}</th>;
  const renderBody = (item, index) => {
    var date = new Date(item.date);
    item.date = date.toLocaleDateString();
    return (
      <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.longurl}</td>
        <td>{item.shorturl}</td>
        <td>{item.clicks}</td>
        <td>{item.date}</td>
      </tr>
    );
  };

  return (
    <div className="views">
      <h2 className="pageTitle">Views</h2>
      <div className="viewTable">
        <Table
          limit="10"
          headData={TableHead}
          renderHead={(item, index) => renderHead(item, index)}
          bodyData={tableData}
          renderBody={(item, index) => renderBody(item, index)}
        />
      </div>
    </div>
  );
}
