import React, { useEffect, useState } from "react";
import "./Countdown.css";

export default function Countdown(props: any) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(props));
  // const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(props));
    }, 1000);

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  return (
    <div className="Countdown">
      <p className="welcome-text">
        {props.eventDate ? null : (
          <div>
            <p className="welcome-text-title">Getting Started</p>
            <p className="welcome-text-content">
              Open the menu to create your own countdown
            </p>
          </div>
        )}
      </p>
      <h1 className="countdown-title">
        Time {timeLeft.eventInPast ? "since" : "till"} {props.eventName}
      </h1>
      <h2 className="countdown-time">
        {timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes{" "}
        {timeLeft.seconds} seconds
      </h2>
    </div>
  );
}

function calculateTimeLeft(props: any) {
  const timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    eventInPast: false,
  };

  if (!props.eventDate) {
    return timeLeft;
  }

  const eventDate = new Date(props.eventDate);
  const splitTime = props.eventTime.split(":");

  if (splitTime.length === 2) {
    eventDate.setHours(splitTime[0]);
    eventDate.setMinutes(splitTime[1]);
  }

  const difference = +eventDate - +new Date();
  const inversionModifier = difference > 0 ? 1 : -1;
  timeLeft.days =
    Math.floor(difference / (1000 * 60 * 60 * 24)) * inversionModifier;
  timeLeft.hours =
    Math.floor((difference / (1000 * 60 * 60)) % 24) * inversionModifier;
  timeLeft.minutes =
    Math.floor((difference / 1000 / 60) % 60) * inversionModifier;
  timeLeft.seconds = Math.floor((difference / 1000) % 60) * inversionModifier;
  timeLeft.eventInPast = difference < 0;

  return timeLeft;
}
