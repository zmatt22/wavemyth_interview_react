import React from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


export default function TravelPlanElem({ action, image }) {
  return (
    <div className="travel-plan-item-container">
      <div className="travel-plan-item">
        <img src={image} className="travel-plan-img" alt="travel plan step" />
        <span><strong>{action[0]}</strong>{action.slice(1)}</span>
      </div>
      <div className="travel-plan-arrow">
        <KeyboardArrowRightIcon fontSize="large" />
      </div>
    </div>
  )
}