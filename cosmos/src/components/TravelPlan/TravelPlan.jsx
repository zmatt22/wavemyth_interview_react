import "./styles/style.css";
import React from "react";
import TravelPlanElem from "./TravelPlanElem";
import luggageIcon from "../../assets/images/LuggageIcon.png";
import rocketIcon from "../../assets/images/RocketIcon.png";
import leavesIcon from "../../assets/images/LeavesIcon.png";


export default function TravelPlan() {
  return (
    <div className="travel-plan-container">
      <TravelPlanElem image={luggageIcon} action="pack" />
      <TravelPlanElem image={rocketIcon} action="fly" />
      <TravelPlanElem image={leavesIcon} action="live" />
      <div className="travel-plan-msg-container">
        <div>
          <h1>ENJOY</h1>
          <h3>A NEW WORLD!</h3>
        </div>
      </div>
    </div>
  )
}