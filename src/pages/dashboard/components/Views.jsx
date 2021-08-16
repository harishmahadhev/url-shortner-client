import React from "react";
import Table from "./Table";
import "./table.css";
import { useContext } from "react";
import { getHostname, Loading, varCtx } from "../../../shared";
export default function Views() {
  const { urlData, loading } = useContext(varCtx);
  const TableHead = ["", "name", "longurl", "shorturl", "clicks", "date"];
  const renderHead = (item, index) => <th key={index}>{item}</th>;
  const renderBody = (item, index) => {
    let date = new Date(item.date).toLocaleDateString();
    let name = getHostname(item.longurl);
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{name}</td>
        <td>{item.longurl}</td>
        <td>
          <a href={item.shorturl}>{item.shorturl}</a>
        </td>
        <td>{item.clicks}</td>
        <td>{date}</td>
      </tr>
    );
  };
  return (
    <div className="views">
      <h2 className="pageTitle">Views</h2>
      {loading ? (
        <Loading color="#455560" />
      ) : (
        <div className="viewTable">
          <Table
            limit="10"
            headData={TableHead}
            renderHead={(item, index) => renderHead(item, index)}
            bodyData={urlData}
            renderBody={(item, index) => renderBody(item, index)}
          />
        </div>
      )}
    </div>
  );
}
