/**
 * ActivityCard Component - Displays a single activity's stats, such as the current and previous time spent
 * on the activity, along with an icon and a title. Allows users to compare current activity with previous periods
 * based on the selected timeframe (daily, weekly, or monthly).
 *
 * @component
 * @example
 * // Example usage of ActivityCard
 * <ActivityCard title="job" current={10} previous={8} timeframe="weekly" />
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the activity (e.g., "job", "fun", "learning").
 * @param {number} props.current - The current time spent on the activity (e.g., "current" hours).
 * @param {number} props.previous - The previous time spent on the activity (e.g., "previous" hours).
 * @param {"daily" | "weekly" | "monthly"} props.timeframe - The selected timeframe for comparison (one of: "daily", "weekly", "monthly").
 *
 * @returns {JSX.Element} The rendered ActivityCard component.
 */

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
