import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";


const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://covidpagination.herokuapp.com/country")
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
      });
  }, []);
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-2">
            <p style={{ fontSize: "70px" , color:"Darkblue"}}>COVID-19</p>
          <h5 style={{color:"grey"}}> Global Status Of The COVID-19</h5>
            <div
              className="container-inner"
              style={{
                backgroundColor: "skyblue",
                borderRadius: "5px",
                fontSize: "25px",
                padding: "10px",
                margin: "auto",
              }}
            >
              <p style={{ color: "orange" }}>TotalCases</p>
              <h4 style={{ color: "orange" }} >
                {data.reduce((current, previous) => {
                  return Number(current) + Number(previous.TotalCases);
                }, 0)}
              </h4>
              <p style={{ color: "green" }}>TotalRecovered</p>
              <h4 style={{ color: "green" }}>
                {data.reduce((current, previous) => {
                  return Number(current) + Number(previous.TotalRecovered);
                }, 0)}
              </h4>
              <p style={{ color: "yellow" }}>ActiveCases</p>
              <h4 style={{ color: "yellow" }}>
                {data.reduce((current, previous) => {
                  return Number(current) + Number(previous.ActiveCases);
                }, 0)}
              </h4>
              <p style={{ color: "red" }}>TotalDeaths</p>
              <h4 style={{ color: "red" }}> 
                {data.reduce((current, previous) => {
                  return Number(current) + Number(previous.TotalDeaths);
                }, 0)}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;