import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Box from "@mui/material/Box";
import { Chart } from "react-google-charts";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const barGraphData = [
  ["City", "Totalcases", "Activecases", "Recoverdcases", "Deathcases"],
];

export const options = {
  title: "Country wise cases",
  
  colors: ["orange", "green", "yellow", "red"],
  YAxis: {
    minValue: 0,
  },
  
    XAxis: {
      font:{
        size:12
      }
    }

};

let totalWorldCases = 0;
let totalRecovered = 0;
let totalActive = 0;
let totalDeaths = 0;

function Home() {
  let [countriesList, setCountriesList] = useState([]);
 
  const [isLoading, setIsLoding] = useState(false);
 useEffect(() => {
    setIsLoding(true);

    fetch("https://covidpagination.herokuapp.com/country")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        var list = data.data;
        list.map((element) => {
          // console.log(elemnt.TotalCases)
          totalWorldCases += element.TotalCases;
          totalRecovered += element.TotalRecovered;
          totalActive += element.ActiveCases;
          totalDeaths += element.TotalDeaths;
          console.log(totalWorldCases);
          console.log(totalRecovered);
          barGraphData.push([
            element.Country,
            element.TotalCases,
            element.ActiveCases,
            element.TotalDeaths,
            element.TotalRecovered,
          ]);
        });

        setCountriesList(data.data);
        setIsLoding(false);
        // console.log(countriesList)
      });

    console.log(barGraphData);
  }, []);

  return (
    <>
     <Header/>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1}>
        {/* <div className="covidcard"> */}

        

        <Box>
          {/* <div className="w-11/12 sm:w-1/2 countrygraph  overflow-y-scroll ">
    <p className="dark:text-slate-300 text-black text-bold sm:mx-10">Country Wise Cases</p>
        */}
          {/* </div> */}

          <Box gridColumn="span 7" className="countrygraph  overflow-y-scroll">
            <ResponsiveContainer
              width={600}
              height={900}
              sx={{ marginTop: -50 }}
            >
              <Chart
                chartType="BarChart"
                data={barGraphData}
                options={options}
                layout="vertical"
              >
                <XAxis type="number" />
                <YAxis type="category" dataKey="Country" />
              </Chart>
            </ResponsiveContainer>
          </Box>
        </Box>
        {/* </div> */}
      </Box>
    </>
  );
}
export default Home;
