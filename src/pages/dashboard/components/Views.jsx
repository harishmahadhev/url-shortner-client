import React from "react";
import "./table.css";
import { useContext } from "react";
import { getHostname, Loading, varCtx } from "../../../shared";
import ViewTable from "./ViewTable";
import { TableCell, TableRow, withStyles } from "@material-ui/core";

const StyledTableCell = withStyles((theme) => ({
  head: {
    color: "black",
    fontWeight: 600,
  },
  body: {
    fontSize: 12,
    fontFamily: "sans-serif",
  },
}))(TableCell);

export default function Views() {
  const { urlData, loading } = useContext(varCtx);
  const TableHead = ["", "name", "longurl", "shorturl", "clicks", "date"];
  const renderHead = (item, index) => <th key={index}>{item}</th>;
  const renderBody = (item, index) => {
    let date = new Date(item.date).toLocaleDateString();
    let name = getHostname(item.longurl);
    return (
      <TableRow key={index}>
        <StyledTableCell>{index + 1}</StyledTableCell>
        <StyledTableCell>{name}</StyledTableCell>
        <StyledTableCell>{item.longurl}</StyledTableCell>
        <StyledTableCell>
          <a href={item.shorturl}>{item.shorturl}</a>
        </StyledTableCell>
        <StyledTableCell>{item.clicks}</StyledTableCell>
        <StyledTableCell>{date}</StyledTableCell>
      </TableRow>
    );
  };
  return (
    <div className="views">
      <h2 className="pageTitle">Views</h2>
      {loading ? (
        <Loading color="#455560" />
      ) : (
        <div className="viewTable">
          <ViewTable
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
