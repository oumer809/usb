import React from "react";
import { Card, Title, AreaChart } from "@tremor/react";

const chartdata = [
  {
    date: "Jan 22",
    SemiAnalysis: 2890,
    "Negarit Gazeta": 2338,
  },
  {
    date: "Feb 22",
    SemiAnalysis: 2756,
    "Negarit Gazeta": 2103,
  },
  {
    date: "Mar 22",
    SemiAnalysis: 3322,
    "Negarit Gazeta": 2194,
  },
  {
    date: "Apr 22",
    SemiAnalysis: 3470,
    "Negarit Gazeta": 2108,
  },
  {
    date: "May 22",
    SemiAnalysis: 3475,
    "Negarit Gazeta": 1812,
  },
  {
    date: "Jun 22",
    SemiAnalysis: 3129,
    "Negarit Gazeta": 1726,
  },
];

const dataFormatter = (number) => {
  return "Birr " + Intl.NumberFormat("us").format(number).toString();
};

const AreaChartComponent = () => {
  return (
    <Card className="mt-4">
      <Title>Newsletter revenue over time (Birr)</Title>
      <AreaChart
        className="h-72 mt-4"
        data={chartdata}
        index="date"
        categories={["SemiAnalysis", "Negarit Gazeta"]}
        colors={["indigo", "cyan"]}
        valueFormatter={dataFormatter}
      />
    </Card>
  );
};

export default AreaChartComponent;
