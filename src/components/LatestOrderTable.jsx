import React, { useEffect, useState } from "react";
import { DatePicker, Space, Table, Tag } from "antd";

const columns = [
  {
    title: "Intensity",
    dataIndex: "intensity",
    key: "intensity",
  },
  {
    title: "Likelihood",
    dataIndex: "likelihood",
    key: "likelihood",
  },
  {
    title: "Relevance",
    dataIndex: "relevance",
    key: "relevance",
  },
  {
    title: "Year",
    dataIndex: "added",
    key: "added",
  },
  // {
  //   title: "End Year",
  //   dataIndex: "end_year",
  //   key: "end_year",
  // },
  {
    title: "Country",
    dataIndex: "country",
    key: "country",
  },
  {
    title: "Topics",
    dataIndex: "topic",
    key: "topic",
  },
  {
    title: "Region",
    dataIndex: "region",
    key: "region",
  },
  {
    title: "sector ",
    dataIndex: "sector",
    key: "sector",
  },
  // {
  //   title: "Status",
  //   dataIndex: "status",
  //   key: "status",
  //   render: (_, { status }) => (
  //     <>
  //       {status.map((status) => {
  //         let color =
  //           status == "Chargback"
  //             ? "coral"
  //             : status == "refund"
  //             ? "yellow"
  //             : "green";

  //         return (
  //           <Tag color={color} key={status}>
  //             {status.toUpperCase()}
  //           </Tag>
  //         );
  //       })}
  //     </>
  //   ),
  // },
  // {
  //   title: "Payment Method",
  //   dataIndex: "paymentMethod",
  //   key: "paymentMethod",
  // },

  // {
  //   title: "Action",
  //   key: "action",
  //   render: (_, record) => (
  //     <Space size="middle" className="">
  //       <a className="w-full rounded-md bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
  //         View Details
  //       </a>
  //     </Space>
  //   ),
  // },
];

// const data = [
//   {
//     key: "1",
//     orderId: "#OID1234",
//     billingName: "neal matthews",
//     paymentMethod: "Bkash",
//     total: "$33.09",
//     status: ["refund"],
//     date: "03.12.2022",
//   },
//   {
//     key: "2",
//     orderId: "#OID1235",
//     billingName: "jamal matthews",
//     paymentMethod: "Roket",
//     total: "$18.09",
//     status: ["paid"],
//     date: "23.01.2023",
//   },
//   {
//     key: "3",
//     orderId: "#OID1236",
//     billingName: "junal matthews",
//     paymentMethod: "Nogod",
//     total: "$33.09",
//     status: ["Chargback"],
//     date: "03.01.2023",
//   },
//   {
//     key: "4",
//     orderId: "#OID1237",
//     billingName: "Barry matthews",
//     paymentMethod: "Visa",
//     total: "$26.09",
//     status: ["Chargback"],
//     date: "03.01.2023",
//   },
//   {
//     key: "5",
//     orderId: "#OID1238",
//     billingName: "ronal Tylor",
//     paymentMethod: "Mastercard",
//     total: "$30.09",
//     status: ["refund"],
//     date: "03.01.2023",
//   },
//   {
//     key: "6",
//     orderId: "#OID1239",
//     billingName: "Barry Mitchell",
//     paymentMethod: "Bkash",
//     total: "$15.09",
//     status: ["Chargback"],
//     date: "03.01.2023",
//   },
//   {
//     key: "7",
//     orderId: "#OID1240",
//     billingName: "jacob Hunter",
//     paymentMethod: "Bkash",
//     total: "$23.09",
//     status: ["paid"],
//     date: "03.01.2023",
//   },
// ];

const LatestOrderTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [data, setData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [topicChange, setTopicChange] = useState("");
  const [sectorChange, setSectorChange] = useState("");
  const [regionChange, setRegionChange] = useState("");
  const [countryChange, setCountryChange] = useState("");
  const [endYear, setEndYear] = useState("");
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://testing-84c7.onrender.com", requestOptions)
      .then((response) => response.text())
      .then((result) => setData(JSON.parse(result)))
      .catch((error) => console.log("error", error));
  }, []);

  // unique data for selection
  const uniqueTopics = [...new Set(data.map((topic) => topic.topic))];
  const uniqueSector = [...new Set(data.map((sector) => sector.sector))];
  const uniqueRegion = [...new Set(data.map((region) => region.region))];
  const uniqueCountry = [...new Set(data.map((country) => country.country))];

  // filter by region
  useEffect(() => {
    setSectorChange("");
    setTopicChange("");
    setCountryChange("");
    setEndYear("");
    const finalData = data.filter((singleData) => {
      return singleData.region === regionChange;
    });
    setFinalData(finalData);
  }, [regionChange]);

  // filter by sector
  useEffect(() => {
    setRegionChange("");

    setTopicChange("");
    setCountryChange("");
    setEndYear("");
    const finalData = data.filter((singleData) => {
      return singleData.sector === sectorChange;
    });
    setFinalData(finalData);
  }, [sectorChange]);

  // filter by topic
  useEffect(() => {
    setRegionChange("");
    setSectorChange("");

    setCountryChange("");
    setEndYear("");
    const finalData = data.filter((singleData) => {
      return singleData.topic === topicChange;
    });
    setFinalData(finalData);
  }, [topicChange]);

  // filter by date
  useEffect(() => {
    setRegionChange("");
    setSectorChange("");
    setTopicChange("");
    setCountryChange("");

    const finalData = data.filter((singleData) => {
      return singleData.end_year == endYear;
    });
    setFinalData(finalData);
  }, [endYear]);

  // filter by country
  useEffect(() => {
    setRegionChange("");
    setSectorChange("");
    setTopicChange("");

    setEndYear("");
    const finalData = data.filter((singleData) => {
      return singleData.country === countryChange;
    });
    console.log("selecteed ctr", finalData);
    setFinalData(finalData);
  }, [countryChange]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <div className="my-8 bg-white h-fit p-5 rounded-md">
      <p className="text-xl mb-4">Latest orders</p>
      <div className="my-5 flex justify-between ">
        <div className="flex gap-2">
          <div>
            <p>Filter By Topic</p>
            <div className="rounded bg-gray-200 text-gray-500 w-60 pr-3">
              <select
                className=" form-select outline-none border-none w-full h-full px-4 py-3 rounded bg-gray-200 text-gray-500 flex-grow "
                name=""
                id=""
                onChange={(e) => setTopicChange(e.target.value)}
                value={topicChange}
              >
                <option value="" className="">
                  Select One
                </option>
                {uniqueTopics.map((single, i) => {
                  return (
                    <option value={single} key={i}>
                      {single}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div>
            <p>Filter By Sector</p>
            <div className="rounded bg-gray-200 text-gray-500 w-60 pr-3">
              <select
                className=" form-select outline-none border-none w-full h-full px-4 py-3 rounded bg-gray-200 text-gray-500 flex-grow "
                name=""
                id=""
                onChange={(e) => setSectorChange(e.target.value)}
                value={sectorChange}
              >
                <option value="" className="">
                  Select One
                </option>
                {uniqueSector.map((single, i) => {
                  return (
                    <option value={single} key={i}>
                      {single}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div>
            <p>Filter By Region</p>
            <div className="rounded bg-gray-200 text-gray-500 w-60 pr-3">
              <select
                className=" form-select outline-none border-none w-full h-full px-4 py-3 rounded bg-gray-200 text-gray-500 flex-grow "
                name=""
                id=""
                onChange={(e) => setRegionChange(e.target.value)}
                value={regionChange}
              >
                <option value="" className="">
                  Select One
                </option>
                {uniqueRegion.map((single, i) => {
                  return (
                    <option value={single} key={i}>
                      {single}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
        <div className="flex gap-4 ml-3">
          <div>
            <p>End Year</p>
            <DatePicker
              className="flex-grow pl-3 py-3 placeholder:text-xs placeholder:text-gray-500 bg-gray-200"
              onChange={(e) => setEndYear(e?.$y)}
              picker="year"
            />
          </div>

          <div>
            <p>Country</p>
            <div className="rounded bg-gray-200 text-gray-500 flex-grow pr-3">
              <select
                className=" form-select outline-none border-none w-full h-full px-4 py-3 rounded bg-gray-200 text-gray-500 flex-grow "
                name=""
                id=""
                onChange={(e) => {
                  setCountryChange(e.target.value);
                }}
                value={countryChange}
              >
                <option value="" className="">
                  Select One
                </option>
                {uniqueCountry.map((single, i) => {
                  return (
                    <option value={single} key={i}>
                      {single}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <span
          style={{
            marginLeft: 8,
          }}
        >
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span>
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={finalData.length <= 0 ? data : finalData}
      />
    </div>
  );
};

export default LatestOrderTable;
