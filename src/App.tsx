import React, { useState } from "react";
import Input from "./components/Input/Input";
import Countdown from "./components/Countdown/Countdown";

export default function App() {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");

  function handleSubmit(event: any) {
    event.preventDefault();
    alert(`${eventName} on ${eventDate} at ${eventTime}`)
  }

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
    <div>
      <h1>Time Til</h1>
      <Input updateEventName={updateEventName} updateEventDate={updateEventDate} updateEventTime={updateEventTime} handleSubmit={handleSubmit}/>
      <Countdown eventName={eventName} eventDate={eventDate} eventTime={eventTime}/>
    </div>
  );
}