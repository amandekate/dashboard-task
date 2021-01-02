import React, { useEffect, useState } from "react";
import "./App.css";
import Counters from "./Components/Counters/Counters";
import Navbar from "./Components/Navbar/Navbar";
import Shippment from "./Components/Shippment/Shippment";
import dataFetch from "./Utils/dataFetch";

const App = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    dataFetch()
      .then(function (response) {
        setApiData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    // console.log(apiData);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Shippment data={apiData} />
    </div>
  );
};

export default App;
