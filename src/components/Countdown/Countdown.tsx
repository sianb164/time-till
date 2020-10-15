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
      <h1>
        Time {timeLeft.eventInPast ? "since" : "till"} {props.eventName}:
      </h1>
      <h2>
        {timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes{" "}
        {timeLeft.seconds} seconds
      </h2>
    </div>
  );
}

function calculateTimeLeft(props: any) {
  const eventDate = new Date(props.eventDate);
  const splitTime = props.eventTime.split(":");

  if (splitTime.length === 2) {
    eventDate.setHours(splitTime[0]);
    eventDate.setMinutes(splitTime[1]);
  }

  const difference = +eventDate - +new Date();
  const inversionModifier = difference > 0 ? 1 : -1;
  const timeLeft = {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)) * inversionModifier,
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24) * inversionModifier,
    minutes: Math.floor((difference / 1000 / 60) % 60) * inversionModifier,
    seconds: Math.floor((difference / 1000) % 60) * inversionModifier,
    eventInPast: difference < 0,
  };

  return timeLeft;
}
