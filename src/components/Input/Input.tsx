import React from "react";
import "./Input.css";

export default function Input(props: any) {
  return (
    <div className="Input">
      <form>
      <div className="event-title">
        <h3>Title</h3>
        <input type="text" onChange={props.updateEventName} placeholder="Event Title"/>
      </div>
      <div className="event-date">
        <h3>Target Date</h3>
        <input type="date" placeholder="dd/mm/yyyy" onChange={props.updateEventDate}/>
      </div>
      <span>at</span>
      <div className="event-time">
        <input type="text" placeholder="00:00" onChange={props.updateEventTime}/>
      </div>
      </form>
    </div>
  );
}
