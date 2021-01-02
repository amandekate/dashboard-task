import React from "react";
import "./App.css";
import Counters from "./Components/Counters/Counters";
import Navbar from "./Components/Navbar/Navbar";
import ShipmentLog from "./Components/ShipmentLog/ShipmentLog";
import Timeline from "./Components/Timeline/Timeline";

const App = () => {
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
            <ShipmentLog />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
