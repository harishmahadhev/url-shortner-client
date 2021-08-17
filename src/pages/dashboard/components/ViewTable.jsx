import {
  makeStyles,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";

const useStyles = makeStyles({
  table: {
    backgroundColor: "white",
    width: 100,
  },
});
export default function ViewTable(props) {
  const initDataShow = props.limit
    ? props.bodyData.slice(0, Number(props.limit))
    : props.bodyData;
  const [dataShow, setDataShow] = useState(initDataShow);
  let pages = 1;

  let range = [];
  const classes = useStyles();
  if (props.limit !== undefined) {
    let page = Math.floor(props.bodyData.length / Number(props.limit));
    pages =
      props.bodyData.length % (Number(props.limit) === 0) ? page : page + 1;
    range = [...Array(pages).keys()];
  }
  const [curPage, setCurPage] = useState(0);

  const selectPage = (page) => {
    const start = Number(props.limit) * page;
    const end = start + Number(props.limit);
    setDataShow(props.bodyData.slice(start, end));
    setCurPage(page);
  };
  return (
    <div className="table">
      <TableContainer>
        <Table className={classes.table} aria-label="customized table">
          {props.headData && props.renderHead ? (
            <TableHead>
              <TableRow>
                {props.headData.map((item, index) =>
                  props.renderHead(item, index)
                )}
              </TableRow>
            </TableHead>
          ) : null}
          {props.bodyData && props.renderBody ? (
            <TableBody>
              {dataShow.map((item, index) => props.renderBody(item, index))}
            </TableBody>
          ) : null}
        </Table>
      </TableContainer>
      {pages > 1 ? (
        <div className="tablePagination">
          {range.map((item, index) => (
            <div
              key={index}
              className={`tablePaginationItem ${
                curPage === index ? "active" : ``
              }`}
              onClick={() => selectPage(index)}
            >
              {item + 1}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
