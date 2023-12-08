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
      name: "",
      sale: 0,
    },
    {
      name: "فروردین",
      sale: 66_552,
    },
    {
      name: "اردیبهشت",
      sale: 5_000,
    },
    {
      name: "خرداد",
      sale: 35_106,
    },
    {
      name: "تیر",
      sale: 49_099,
    },
    {
      name: "مرداد",
      sale: 50_960,
    },
    {
      name: "شهریور",
      sale: 48_100,
    },
    {
      name: "مهر",
      sale: 115_000,
    },
    {
      name: "آبان",
      sale: 120_050,
    },
    {
      name: "آذر",
      sale: 99_500,
    },
    {
      name: "دی",
      sale: 15_101,
    },
    {
      name: "بهمن",
      sale: 22_125,
    },
    {
      name: "اسفند",
      sale: 21_000,
    },
  ];

  return (
    <>
      <div className="chart">
        <h3 className="charttitle">نمودار فروش</h3>
        <ResponsiveContainer width="100%" aspect={4}>
          <LineChart data={Data}>
            <XAxis dataKey="name" stroke="#FFFFFF" />
            <Line type="monotone" dataKey="sale" stroke="#FFFFFF" />
            <Tooltip />
            <CartesianGrid stroke="#e0dfdf" strokeDasharray="10" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
