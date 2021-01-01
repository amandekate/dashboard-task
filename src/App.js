import React from "react";
import "./App.css";
import Counters from "./Components/Counters/Counters";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Counters/>
      {/* <Timeline/> */}
      {/* <ShippmentLog/> */}
    </div>
  );
};

export default App;
