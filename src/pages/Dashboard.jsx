import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineAreaChart, AiOutlineDollarCircle } from "react-icons/ai";
import { CgList } from "react-icons/cg";
import { MdLocalShipping } from "react-icons/md";
import { Column } from "@ant-design/plots";
import PieChart from "../components/PieChart";
import LatestOrderTable from "../components/LatestOrderTable";

const cardData = [
  {
    title: "Revenue",
    income: "$13,234.80",
    desc: "Shipping fees are not included",
    icon: <AiOutlineDollarCircle />,
  },
  {
    title: "Orders",
    income: "$34.80",
    desc: "Shipping fees are not included",
    icon: <MdLocalShipping />,
  },
  {
    title: "Products",
    income: "$40.80",
    desc: "Shipping fees are not included",
    icon: <CgList />,
  },
  {
    title: "Monthly Earning",
    income: "$6,834",
    desc: "Shipping fees are not included",
    icon: <AiOutlineAreaChart />,
  },
];

const Dashboard = () => {
  const data = [
    {
      type: "Jan",
      sales: 6,
    },
    {
      type: "Feb",
      sales: 16,
    },
    {
      type: "Mar",
      sales: 8,
    },
    {
      type: "Apr",
      sales: 60,
    },
    {
      type: "May",
      sales: 18,
    },
    {
      type: "Jun",
      sales: 4,
    },
    {
      type: "Jul",
      sales: 8,
    },
    {
      type: "Aug",
      sales: 6,
    },
    {
      type: "Sept",
      sales: 24,
    },
    {
      type: "Oct",
      sales: 28,
    },
    {
      type: "Nov",
      sales: 9,
    },
    {
      type: "Dec",
      sales: 18,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
    label: {
      position: "middle",
      // 'top', 'bottom', 'middle',

      style: {
        fill: "#FFFFFF",
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Months",
      },
      sales: {
        alias: "intensity",
      },
    },
  };

  return (
    <div className="bg-gray-100 w-full h-screen">
      <div className="flex justify-between">
        <h1 className="text-4xl mb-4">Dashboard</h1>
      </div>
      <div className="flex gap-5">
        <div className="w-2/3 bg-white p-7 rounded-md">
          <h1 className="text-3xl mb-7">Statistics</h1>
          <div className="h-fit">
            <Column {...config} />
          </div>
        </div>
        <div className="1/3 bg-white p-7 rounded-md h-fit">
          <h1 className="text-2xl mb-7">Region Base</h1>
          <div className="w-64 h-fit">
            <PieChart />
          </div>
        </div>
      </div>

      <div>
        <LatestOrderTable />
      </div>
    </div>
  );
};

export default Dashboard;
