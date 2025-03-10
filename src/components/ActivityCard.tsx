import React from "react";
import "./ActivityCard.scss";

const ActivityCard: React.FC = () => {
  return (
    <div className="activity-card-container">
      <div className={`icon-container fun`}>
        <img src={`src/assets/images/fun.svg`} alt="Icon" className="icon" />
      </div>
      <div className="activity-card">
        <div className="activity-content">
          <div className="activity-title">
            <h3>fun</h3>
            <img src="src/assets/images/menu.svg" alt="Icon" className="icon" />
          </div>
          <div className="activity-done">
            <div className="hours">
              <span>1</span>
              <p>Completed</p>
            </div>
            <p className="previous">
              <span className="hidden">Completed</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
