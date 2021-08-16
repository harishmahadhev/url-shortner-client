import React, { useContext } from "react";
import "../../../App.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { varCtx } from "../../../shared";
export default function AreaCharts() {
  const { urlData } = useContext(varCtx);
  const chartData = urlData;
  chartData.forEach((e) => {
    e.month = new Date(e.date).getMonth();
    e.year = new Date(e.date).getFullYear();
  });
  return (
    <div className="areaChart">
      <h3 className="chartTitle">Year Overview</h3>
      <div>
        <AreaChart
          className="chart"
          width={600}
          height={200}
          data={chartData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="urlcode"
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
            dataKey="clicks"
            fill="#fa5573"
            stroke="#DC143C"
          />
        </AreaChart>
      </div>
    </div>
  );
}
