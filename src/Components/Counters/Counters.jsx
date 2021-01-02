import { CategoryRounded } from "@material-ui/icons";
import React from "react";
import "./Counters.css";

const Counters = ({ data, counter, setCounter }) => {
  let Categories = data.reduce((total, item) => {
    const { current_status_code } = item;
    if (!current_status_code) return total;
    if (!total[current_status_code]) {
      total[current_status_code] = { label: current_status_code, value: 1 };
    } else {
      total[current_status_code] = {
        ...total[current_status_code],
        value: total[current_status_code].value + 1,
      };
    }
    return total;
  }, {});

  Categories = Object.values(Categories);

  const selected = "Selected";

  return (
    <div className="counter-container">
      {Categories.map((Category) => {
        return (
          <div
            key={Category.label}
            className={`${
              counter === Category.label ? selected : null
            } counter`}
            // onClick={setCounter(Category.label)}
          >
            <h3>{Category.label}</h3>
            <h1>{Category.value}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Counters;
