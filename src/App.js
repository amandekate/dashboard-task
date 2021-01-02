import React, { useEffect, useState } from "react";
import "./App.css";
import Counters from "./Components/Counters/Counters";
import Navbar from "./Components/Navbar/Navbar";
import ShipmentLog from "./Components/ShipmentLog/ShipmentLog";
import Timeline from "./Components/Timeline/Timeline";
import dataFetch from "./Utils/dataFetch";

const App = () => {
  const [apiData, setApiData] = useState([]);
  const [shippmentData, setShippmentData] = useState([]);

  useEffect(() => {
    dataFetch()
      .then(function (response) {
        setApiData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    // console.log(apiData);
  }, []);












  return (
    <div className="App">
      <Navbar />
      <Counters />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 col-sm-12 column">
            <Timeline />
          </div>
          <div className="col-md-8 col-sm-12 column">
            <ShipmentLog data={apiData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
