import React, { useState } from "react";
import "./Shippment.css";

const Shippment = ({ data }) => {
  const [shippmentID, setShippmentID] = useState("");
  const [isNull, setIsNull] = useState(true);
  const [counter, setCounter] = useState("DEL");

  function styles(value) {
    if (value === "DEL") {
      return "DEL";
    }
    if (value === "OOD") {
      return "OOD";
    }
    if (value === "UND") {
      return "UND";
    }
    if (value === "INT") {
      return "INT";
    }
    return "";
  }

  function CounterOnClick(value) {
    setIsNull(true);
    setCounter(value);
  }

  function shipp(id) {
    setShippmentID(id);
    setIsNull(false);
  }
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
    <>
      <div className="counter-container">
        {Categories.map((Category) => {
          return (
            <div
              key={Category.label}
              className={`${
                counter === Category.label ? selected : null
              } counter`}
              onClick={() => CounterOnClick(Category.label)}
            >
              <h3>{Category.label}</h3>
              <h1>{Category.value}</h1>
            </div>
          );
        })}
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 col-sm-12 column">
            <div className="timeline">
              <div className="track">
                <div className="track-ends destination"></div>
                <div className="track-middle">
                  <div className="lines"></div>
                  <div className="status-container">
                    {data.map((log) => {
                      if (log._id === shippmentID) {
                        if (log.scan) {
                          return log.scan.map((scan) => {
                            return (
                              <div className="status-bar">
                                <div className="status">
                                  {scan.status_detail}
                                </div>
                                <div className="timestamp">
                                  <span className="time">{scan.time}</span>
                                </div>
                              </div>
                            );
                          });
                        }
                      } else {
                        return null;
                      }
                    })}
                    {isNull ? "Please select a Shippment" : null}
                  </div>
                </div>
                <div className="track-ends warehouse"></div>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-sm-12 column">
            <div className="shippment-log">
              <table>
                <thead>
                  <tr>
                    <th>AWB NUMBER</th>
                    <th>TRANSPORTER</th>
                    <th>SOURCE</th>
                    <th>DESTINATION</th>
                    <th>BRAND</th>
                    <th>START DATE</th>
                    <th>ETD</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((log) => {
                    const value = log.current_status_code;
                    if (value === counter) {
                      return (
                        <tr
                          key={log._id}
                          className="shippment-entry"
                          onClick={() => {
                            shipp(log._id);
                          }}
                        >
                          <td>#{log.awbno}</td>
                          <td>{log.carrier}</td>
                          <td>{log.from ? log.from : "NA"}</td>
                          <td>{log.to ? log.to : "NA"}</td>
                          <td>USPA</td>
                          <td>
                            {log.pickup_date
                              ? log.pickup_date.substr(0, 10)
                              : "NA"}
                          </td>
                          <td>
                            {log.extra_fields
                              ? log.extra_fields.expected_delivery_date.substr(
                                  0,
                                  10
                                )
                              : "NA"}
                          </td>
                          <td className={`${styles(value)}`}>
                            {log.current_status}
                          </td>
                        </tr>
                      );
                    }
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shippment;
