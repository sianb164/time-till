import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";
import Input from "../Input/Input";

export default function Sidebar(props: any) {
  const [showSidebar, setShowSidebar] = useState(false);
  function openNav() {
    setShowSidebar(!showSidebar);
  }
  const width = showSidebar ? "450px" : "50px";

  return (
    <div className="Sidebar" style={{ width: width }}>
      <button onClick={openNav}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <Input
        updateEventName={props.updateEventName}
        updateEventDate={props.updateEventDate}
        updateEventTime={props.updateEventTime}
      />
    </div>
  );
}
