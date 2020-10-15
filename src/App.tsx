import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input/Input";
import Countdown from "./components/Countdown/Countdown";
import Sidebar from "./components/Sidebar/Sidebar";

export default function App() {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");

  function updateEventName(event: any) {
    setEventName(event.target.value);
  }

  function updateEventDate(event: any) {
    setEventDate(event.target.value);
  }

  function updateEventTime(event: any) {
    setEventTime(event.target.value);
  }

  return (
    <div className="App">
      <Sidebar
        updateEventName={updateEventName}
        updateEventDate={updateEventDate}
        updateEventTime={updateEventTime}
      />
      <Countdown
        eventName={eventName}
        eventDate={eventDate}
        eventTime={eventTime}
      />
    </div>
  );
}
