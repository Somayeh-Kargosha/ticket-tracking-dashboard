/**
 * App Component - Displays the dashboard with user stats and a set of timeframes.
 * It uses the UserCard component to select the timeframe (daily, weekly, monthly)
 * and renders ActivityCard components that display the stats for each timeframe.
 *
 * @component
 * @example
 * // Example usage of App component
 * <App />
 *
 * @returns {JSX.Element} The rendered App component.
 */

import { useState } from "react";
import "./App.scss";
import ActivityCard from "./components/ActivityCard";
import UserCard from "./components/UserCard";

// The timeframes data that contains stats for different activities (job, fun, learning, etc.)
const timeframes = [
  {
    title: "job",
    timeframes: {
      daily: {
        current: 2,
        previous: 1,
      },
      weekly: {
        current: 10,
        previous: 4,
      },
      monthly: {
        current: 15,
        previous: 5,
      },
    },
  },
  {
    title: "fun",
    timeframes: {
      daily: {
        current: 5,
        previous: 12,
      },
      weekly: {
        current: 8,
        previous: 23,
      },
      monthly: {
        current: 13,
        previous: 25,
      },
    },
  },
  {
    title: "learning",
    timeframes: {
      daily: {
        current: 1,
        previous: 0,
      },
      weekly: {
        current: 2,
        previous: 3,
      },
      monthly: {
        current: 5,
        previous: 4,
      },
    },
  },
  {
    title: "sport",
    timeframes: {
      daily: {
        current: 1,
        previous: 6,
      },
      weekly: {
        current: 2,
        previous: 12,
      },
      monthly: {
        current: 4,
        previous: 14,
      },
    },
  },
  {
    title: "emails",
    timeframes: {
      daily: {
        current: 9,
        previous: 3,
      },
      weekly: {
        current: 15,
        previous: 9,
      },
      monthly: {
        current: 35,
        previous: 20,
      },
    },
  },
  {
    title: "health",
    timeframes: {
      daily: {
        current: 0,
        previous: 2,
      },
      weekly: {
        current: 1,
        previous: 4,
      },
      monthly: {
        current: 7,
        previous: 4,
      },
    },
  },
];

const App: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState<
    "daily" | "weekly" | "monthly"
  >("weekly");
  return (
    <div className="dashboard">
      <UserCard
        selectedTimeframe={selectedTimeframe}
        setTimeframe={setSelectedTimeframe}
      />
      <div className="cards">
        {timeframes.map((item) => (
          <ActivityCard
            key={item.title}
            title={item.title}
            current={item.timeframes[selectedTimeframe].current}
            previous={item.timeframes[selectedTimeframe].previous}
            timeframe={selectedTimeframe}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
