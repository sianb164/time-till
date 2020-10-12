import React from "react";
import "./Input.css";

export default function Input(props: any) {
  return (
    <div className="Input">
      <form onSubmit={props.handleSubmit}>
      <div className="event-title">
        <h3> Name of event</h3>
        <input type="text" onChange={props.updateEventName}/>
      </div>
      <div className="event-date">
        <input type="date" placeholder="dd/mm/yyyy" onChange={props.updateEventDate}/>
      </div>
      <div className="event-time">
        <input type="text" placeholder="00:00" onChange={props.updateEventTime}/>
      </div>
      <div className="event-submit">
        <input type="submit"/>
      </div>
      </form>
    </div>
  );
}
