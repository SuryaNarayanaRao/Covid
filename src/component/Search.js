import React,{useState , useEffect} from 'react'
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import * as ReactBootStrap from "react-bootstrap";
import axios from 'axios';
import Header from "./Header";



export default function Chart() {

  const [data, setData] = useState([]);
  const [dummy,setDummy]=useState();
  useEffect(() => {
    fetch("https://covidpagination.herokuapp.com/country")
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
      });
  }, []);
  console.log(data)

  const Show=(val , val1)=>{
// setDummy(e)
console.log(val , val1)
  }

  
  return (
    <div>
     <Header /> 
     <label for="country">Choose a country</label>
     <select id='country'  >
       
     {data.sort((a,b)=>(a.Country>b.Country ? 1:-1)).map((i , j)=>(
         <option value={i.Country} onSelect={()=>{Show(i.Country, i.ActiveCases )}} >{i.Country}</option>
 ))}
 </select>
 <div>{dummy}</div>
    
      </div>
  );
}
