import React from "react";
import "./Counters.css";

const Counters = () => {
  const categories = [
    {
      name: "DEL",
      count: 912,
    },
    {
      name: "INT",
      count: 232,
    },
    {
      name: "OOD",
      count: 338,
    },
    {
      name: "DEX",
      count: 354,
    },
    {
      name: "NFI",
      count: 789,
    },
  ];
  return (
    <div className="counter-container">
      {categories.map((category) => {
        return (
          <div key={category.name} className="counter">
            <h3>{category.name}</h3>
            <h1>{category.count}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Counters;
