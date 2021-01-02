import React from "react";
import "./ShipmentLog.css";

const ShipmentLog = ({ data }) => {
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
    if (value === "INT"){
        return "INT"
    }
    return "";
  }

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
          {data.map((log) => {
            const value = log.current_status_code;
            return (
              <tr className="shippment-entry">
                <td>#{log.awbno}</td>
                <td>{log.carrier}</td>
                <td>{log.from ? log.from : "NA"}</td>
                <td>{log.to ? log.to : "NA"}</td>
                <td>USPA</td>
                <td>{log.pickup_date ? log.pickup_date.substr(0, 10) : "NA" }</td>
                {/* <td>{log.extra_fields.expected_delivery_date}</td> */}
                <td></td>
                <td className={`${styles(value)}`}>{log.current_status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShipmentLog;
