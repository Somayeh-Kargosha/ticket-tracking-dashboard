import React from "react";
import "./UserCard.scss";

const UserCard: React.FC = () => {
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
            <button key={tf}>{tf}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
