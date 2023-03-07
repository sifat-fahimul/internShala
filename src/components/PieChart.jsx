import { Pie } from "@ant-design/plots";

const PieChart = () => {
  const data = [
    { region: "Northern America", relevance: 2 },
    { region: "Central America", relevance: 3 },
    { region: "World", relevance: 2 },
    { region: "Western Africa", relevance: 4 },
    { region: "Eastern Europe", relevance: 3 },
    { region: "Central Africa", relevance: 2 },
  ];

  const config = {
    appendPadding: 10,
    data,
    angleField: "relevance",
    colorField: "region",
    radius: 1,
    innerRadius: 0.64,

    interactions: [
      {
        region: "element-selected",
      },
      {
        region: "element-active",
      },
      {
        region: "pie-statistic-active",
      },
    ],
  };
  return (
    <div className="w-full h-fit">
      <Pie {...config} />
    </div>
  );
};

export default PieChart;
