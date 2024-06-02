"use client";

import React from "react";
import {
  Bar,
  BarChart as BarGraph,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useTheme } from "next-themes";

type Props = {};

let monthlyData = [
  { month: "January", total: 1000 },
  { month: "February", total: 1500 },
  { month: "March", total: 2000 },
  { month: "April", total: 2500 },
  { month: "May", total: 4000 },
  { month: "June", total: 3500 },
  { month: "July", total: 6000 },
  { month: "August", total: 4500 },
  { month: "September", total: 5000 },
  { month: "October", total: 9500 },
  { month: "November", total: 6000 },
  { month: "December", total: 10500 },
];

export default function BarChart({}: Props) {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const themeColors = resolvedTheme === "dark" ? "#000000" : "#FFFFFF";

  const textColor = resolvedTheme === "dark" ? "#FFFFFF" : "#000000";
  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <BarGraph data={monthlyData}>
        <XAxis
          dataKey={"month"}
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
          fill={textColor}
          tickFormatter={(value) => `${value}`}
        />
        {/* <Tooltip
          wrapperStyle={{ backgroundColor: "#ccc" }}
          formatter={function (name) {
            return `${name}`;
          }}
        /> */}
        <Bar dataKey={"total"} radius={[4, 4, 0, 0]} fill={textColor} />
      </BarGraph>
    </ResponsiveContainer>
  );
}
