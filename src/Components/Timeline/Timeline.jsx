import React from "react";
import "./Timeline.css";

const Timeline = () => {
  const statusLogs = [
    {
      status: "Delivered",
      date: "12/12/2020",
      time: "12:12 AM",
    },
    {
      status: "Out For Delivery",
      date: "11/12/2020",
      time: "2:12 PM",
    },
    {
      status: "Arrived at Mysore",
      date: "10/12/2020",
      time: "04:45 PM",
    },
    {
      status: "Arrived at Banglore",
      date: "9/12/2020",
      time: "03:23 AM",
    },
    {
      status: "Transit to Next Hub",
      date: "7/12/2020",
      time: "04:47 PM",
    },
  ];
  return (
    <div className="timeline">
      <div className="track">
        <div className="track-ends destination"></div>
        <div className="track-ends warehouse"></div>
        <div className="lines"></div>
      </div>
      <div className="status-container">
        {statusLogs.map((log) => {
          return (
            <div className="status-bar">
              <div className="status">{log.status}</div>
              <div className="timestamp">
                <span className="date">{log.date}</span>
                <span className="time">{log.time}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
