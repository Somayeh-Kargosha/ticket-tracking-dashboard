/**
 * UserCard Component - Displays a user profile with an avatar, name, and a set of buttons to change the timeframe.
 * Allows users to switch between daily, weekly, and monthly timeframes.
 *
 * @component
 * @example
 * // Example usage of UserCard
 * <UserCard setTimeframe={setTimeframeFunction} selectedTimeframe="daily" />
 *
 * @param {Object} props - The props for the component.
 * @param {Function} props.setTimeframe - A function to set the selected timeframe.
 *    It expects a value of either "daily", "weekly", or "monthly".
 * @param {"daily" | "weekly" | "monthly"} props.selectedTimeframe - The current selected timeframe that should be reflected in the UI.
 *
 * @returns {JSX.Element} The rendered UserCard component.
 */

import React from "react";
import "./UserCard.scss";

interface UserCardProps {
  setTimeframe: (timeframe: "daily" | "weekly" | "monthly") => void;
  selectedTimeframe: "daily" | "weekly" | "monthly";
}

const UserCard: React.FC<UserCardProps> = ({
  setTimeframe,
  selectedTimeframe,
}) => {
  return (
    <div className="user-card-container">
      <div className="user-card">
        <div className="avatar-container">
          <img
            src="src/assets/images/avatar.png"
            alt="User Avatar"
            className="avatar"
          />
        </div>
        <div>
          <p>Report for</p>
          <div className="user-title">
            <h2>Stacey</h2>
            <h2>Castillo</h2>
          </div>
        </div>
      </div>
      <div className="timeframe-options">
        <div className="btn-container">
          {["daily", "weekly", "monthly"].map((tf) => (
            <button
              key={tf}
              className={selectedTimeframe === tf ? "active" : ""}
              onClick={() => setTimeframe(tf as "daily" | "weekly" | "monthly")}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
