import React from "react";
import "../../../App.css";
import AreaCharts from "./AreaCharts";
import BarCharts from "./BarCharts";
export default function Charts() {
  return (
    <div className="charts">
      <h2 className="pageTitle">Charts</h2>
      <div className="chartSelect">
        <span>Select the Year</span>
        <select name="year" id="year">
          <option value="2021">2021</option>
          <option value="2021">2021</option>
        </select>
      </div>
      <AreaCharts />
      <div className="chartSelect">
        <span>Select the Year</span>
        <select name="month" id="month"></select>
      </div>
      <BarCharts />
    </div>
  );
}
