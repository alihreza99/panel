import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
export default function Chart() {
  const Data = [
    {
      name: "Jan",
      sale: 115_000,
    },
    {
      name: "Feb",
      sale: 120_050,
    },
    {
      name: "Mar",
      sale: 99_500,
    },
    {
      name: "Apr",
      sale: 15_101,
    },
    {
      name: "May",
      sale: 22_125,
    },
    {
      name: "Jun",
      sale: 21_000,
    },
    {
      name: "Jul",
      sale: 66_552,
    },
    {
      name: "Agu",
      sale: 5_000,
    },
    {
      name: "Sep",
      sale: 35_106,
    },
    {
      name: "Oct",
      sale: 49_099,
    },
    {
      name: "Nov",
      sale: 50_960,
    },
    {
      name: "Dev",
      sale: 48_100,
    },
  ];

  return (
    <>
      <div className="chart">
        <h3 className="charttitle">نمودار فروش</h3>
        <ResponsiveContainer width="100%" aspect={4}>
          <LineChart data={Data}>
            <XAxis dataKey="name" stroke="#5550bd" />
            <Line type="monotone" dataKey="sale" stroke="#5550bd" />
            <Tooltip/>
            <CartesianGrid stroke="#e0dfdf" strokeDasharray="10"/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
