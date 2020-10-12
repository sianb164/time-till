import React, { useEffect, useState } from "react";

export default function Countdown(props: any) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(props));
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(props));
    }, 1000);

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  return (
    <div className="Countdown">
      <h2>Time {timeLeft.eventInPast ? 'since' : 'till'} event:</h2>
      <h3>{timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes {timeLeft.seconds} seconds</h3>
    </div>
  );
}

function calculateTimeLeft(props: any) {
  const difference = +new Date(props.eventDate) - +new Date();
  const inversionModifier = difference > 0 ? 1 : -1;
  const timeLeft = {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)) * inversionModifier,
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24) * inversionModifier,
    minutes: Math.floor((difference / 1000 / 60) % 60) * inversionModifier,
    seconds: Math.floor((difference / 1000) % 60) * inversionModifier,
    eventInPast: difference < 0
  };

  return timeLeft;
};
