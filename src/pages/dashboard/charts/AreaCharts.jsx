import React from "react";
import "../../../App.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import data from "../../../json/yearData.json";

export default function AreaCharts() {
  return (
    <div className="areaChart">
      <h3 className="chartTitle">Year Overview</h3>
      <div>
        <AreaChart
          className="chart"
          width={600}
          height={200}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            interval={0}
            tick={{ fontFamily: "lexend", fontSize: "12px" }}
          />
          <YAxis tick={{ fontFamily: "lexend", fontSize: "12px" }} />
          <Tooltip
            cursor={{ stroke: "black", strokeWidth: 2 }}
            contentStyle={{ borderRadius: "5px", border: "none" }}
            labelStyle={{ fontFamily: "sans-serif", fontWeight: 600 }}
            itemStyle={{
              color: "grey",
              fontFamily: "sans-serif",
              fontSize: "12px",
            }}
          />
          <Area
            activeDot={{
              fill: "#DC143C",
              stroke: "#fa5573",
              strokeWidth: 2,
              r: 6,
            }}
            dot={{ fill: "#DC143C" }}
            type="monotone"
            dataKey="links"
            fill="#fa5573"
            stroke="#DC143C"
          />
        </AreaChart>
      </div>
    </div>
  );
}
