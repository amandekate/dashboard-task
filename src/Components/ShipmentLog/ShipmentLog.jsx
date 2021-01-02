import React from "react";
import "./ShipmentLog.css";

const ShipmentLog = () => {
  const shippmentLogs = [
    {
      awbNumber: "#273126375",
      transporter: "DTDC",
      source: "Bangalore",
      destination: "Delhi",
      brand: "USPA",
      startDate: "01/07/2019",
      ETD: "01/07/2019",
      status: "Processing",
    },
    {
      awbNumber: "#273126375",
      transporter: "DTDC",
      source: "Bangalore",
      destination: "Delhi",
      brand: "USPA",
      startDate: "01/07/2019",
      ETD: "01/07/2019",
      status: "Delivered",
    },
    {
      awbNumber: "#273126375",
      transporter: "DTDC",
      source: "Bangalore",
      destination: "Delhi",
      brand: "USPA",
      startDate: "01/07/2019",
      ETD: "01/07/2019",
      status: "Delivered",
    },
    {
      awbNumber: "#273126375",
      transporter: "DTDC",
      source: "Bangalore",
      destination: "Delhi",
      brand: "USPA",
      startDate: "01/07/2019",
      ETD: "01/07/2019",
      status: "Delivered",
    },
    {
      awbNumber: "#273126375",
      transporter: "DTDC",
      source: "Bangalore",
      destination: "Delhi",
      brand: "USPA",
      startDate: "01/07/2019",
      ETD: "01/07/2019",
      status: "Delivered",
    },
    {
      awbNumber: "#273126375",
      transporter: "DTDC",
      source: "Bangalore",
      destination: "Delhi",
      brand: "USPA",
      startDate: "01/07/2019",
      ETD: "01/07/2019",
      status: "Delivered",
    },
    {
      awbNumber: "#273126375",
      transporter: "DTDC",
      source: "Bangalore",
      destination: "Delhi",
      brand: "USPA",
      startDate: "01/07/2019",
      ETD: "01/07/2019",
      status: "Delivered",
    },
    {
      awbNumber: "#273126375",
      transporter: "DTDC",
      source: "Bangalore",
      destination: "Delhi",
      brand: "USPA",
      startDate: "01/07/2019",
      ETD: "01/07/2019",
      status: "Delivered",
    },
    {
      awbNumber: "#273126375",
      transporter: "DTDC",
      source: "Bangalore",
      destination: "Delhi",
      brand: "USPA",
      startDate: "01/07/2019",
      ETD: "01/07/2019",
      status: "Delivered",
    },
    {
      awbNumber: "#273126375",
      transporter: "DTDC",
      source: "Bangalore",
      destination: "Delhi",
      brand: "USPA",
      startDate: "01/07/2019",
      ETD: "01/07/2019",
      status: "Delivered",
    },
    {
      awbNumber: "#273126375",
      transporter: "DTDC",
      source: "Bangalore",
      destination: "Delhi",
      brand: "USPA",
      startDate: "01/07/2019",
      ETD: "01/07/2019",
      status: "Delivered",
    },
    {
      awbNumber: "#273126375",
      transporter: "DTDC",
      source: "Bangalore",
      destination: "Delhi",
      brand: "USPA",
      startDate: "01/07/2019",
      ETD: "01/07/2019",
      status: "Delivered",
    },
    {
      awbNumber: "#273126375",
      transporter: "DTDC",
      source: "Bangalore",
      destination: "Delhi",
      brand: "USPA",
      startDate: "01/07/2019",
      ETD: "01/07/2019",
      status: "Delivered",
    },
  ];
  return (
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
          {shippmentLogs.map((log) => {
            return (
              <tr className="shippment-entry">
                <td>{log.awbNumber}</td>
                <td>{log.transporter}</td>
                <td>{log.source}</td>
                <td>{log.destination}</td>
                <td>{log.brand}</td>
                <td>{log.startDate}</td>
                <td>{log.ETD}</td>
                <td
              className={log.status === "Delivered" ? "delivered" : "not-delivered"}
                >{log.status}</td>
              </tr>
            );
          })}
          <tr>
            <td>text3.1</td>
            <td>text3.2</td>
            <td>text3.3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ShipmentLog;
