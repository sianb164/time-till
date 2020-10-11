import React, { useEffect, useState } from "react";
import Input from "./components/Input/Input";
import Countdown from "./components/Countdown/Countdown";

export default function App() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`11/01/${year}`) - +new Date();
    let timeLeft = {};
    
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
    };
  }

return timeLeft;
};

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
    console.log('Mounted');
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

  // Clear timeout if the component is unmounted
  return () => clearTimeout(timer);
  

  
});

  return (
    <div>
      <h1>Time Til</h1>
      <Input />
      <Countdown />
    </div>
  );
}