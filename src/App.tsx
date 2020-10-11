import React from "react";
import Input from "./components/Input/Input";
import Countdown from "./components/Countdown/Countdown";

export default function App() {
  return (
    <div>
      <h1>Time Til</h1>
      <Input />
      <Countdown />
    </div>
  );
}