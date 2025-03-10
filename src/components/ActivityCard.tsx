import React from "react";
import "./ActivityCard.scss";
interface ActivityCardProps {
  title: string;
  current: number;
  previous: number;
  timeframe: "daily" | "weekly" | "monthly";
}
const ActivityCard: React.FC<ActivityCardProps> = ({
  title,
  current,
  previous,
  timeframe,
}) => {
  const timeframeText = {
    daily: "Yesterday",
    weekly: "Last Week",
    monthly: "Last Month",
  };

  return (
    <div className="activity-card-container">
      <div className={`icon-container ${title}`}>
        <img
          src={`src/assets/images/${title}.svg`}
          alt="Icon"
          className="icon"
        />
      </div>
      <div className="activity-card">
        <div className="activity-content">
          <div className="activity-title">
            <h3>{title}</h3>
            <img src="src/assets/images/menu.svg" alt="Icon" className="icon" />
          </div>
          <div className="activity-done">
            <div className="hours">
              <span>{current}</span>
              <p>Completed</p>
            </div>
            <p className="previous">
              {timeframeText[timeframe]}: {previous}
              <span className="hidden">Completed</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ActivityCard;
