import React from "react";
import "./Input.css";

export default function Input(props: any) {
  return (
    <div className="Input">
      <form>
        <div className="event-title">
          <p>Title</p>
          <input type="text" onChange={props.updateEventName} />
        </div>
        <div className="event-date">
          <p>Target Date</p>
          <input
            type="date"
            placeholder="DD/MM/YYYY"
            onChange={props.updateEventDate}
            className="date-input"
          />
          <span>at</span>
          <input
            type="text"
            placeholder="00:00"
            onChange={props.updateEventTime}
            className="time-input"
          />
        </div>
      </form>
    </div>
  );
}
