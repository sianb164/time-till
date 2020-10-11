import React from "react";
import "./Input.css";

export default function Input() {
  return (
    <div className="Input">
      <div className="event-title">
        <h3> Name of event</h3>
        <input type="text" />
      </div>
      <div className="event-date">
        <input type="date" placeholder="dd/mm/yyyy" />
      </div>
      <div className="event-time">
        <input type="text" placeholder="00:00" />
      </div>
      <div className="event-submit">
        <input type="submit" />
      </div>
    </div>
  );
}
