import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import * as ReactBootStrap from "react-bootstrap";
import { useEffect, useState } from "react";
import Header from "./Header";
const Global = () => {
  const [table, setTable] = useState([]);
  useEffect(() => {
    fetch("https://covidpagination.herokuapp.com/country")
      .then((response) => response.json())
      .then((data) => {
        setTable(data.data);
        console.log(data.data);
      });
  }, []);
  const columns = [
    {
      dataField: "Country",
      text: "country",
    },
    {
      dataField: "ThreeLetterSymbol",
      text: "ISO CODE",
    },
    {
      dataField: "Population",
      text: "Population",
    },
    {
      dataField: "TotalTests",
      text: "TotalTests",
    },
    {
      dataField: "TotalCases",
      text: "TotalCases",
    },
    {
      dataField: "ActiveCases",
      text: "ActiveCases",
    },
    {
      dataField: "TotalRecovered",
      text: "Recoved",
    },
    {
      dataField: "TotalDeaths",
      text: "Deaths",
    },
  ];
  return (
    <div>
     <Header></Header>
      <BootstrapTable
        keyField="Country"
        data={table}
        columns={columns}
        pagination={paginationFactory()}
      />
    </div>
  );
};
export default Global;
