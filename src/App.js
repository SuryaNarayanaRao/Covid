import "./App.css";
import  bootstrap  from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Search from "./component/Search";
import Global from "./component/Global";
import Chart from "./component/Chart";
import Graph from "./component/Graph";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
           <Route path="/global" element={<Global />} /> 
           <Route path="/search" element={<Search />} /> 
           <Route path="/chart" element={<Chart />} />
           <Route path="/graph" element={<Graph />} />
        </Routes>
      </Router>   
    </div>
  );
}

export default App;