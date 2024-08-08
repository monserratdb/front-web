import React, { useState } from 'react';
import "./TaskCard.css";
import { Link } from 'react-router-dom';


export default function TaskCard(props) {
  const {title, assignee, description} = props;
  const [isComplete, setIsComplete] = useState(false);

  const handleComplete = () => {
    setIsComplete(!isComplete);
  };

  return (
    <div className={`task-card ${isComplete ? 'selected' : ''}`}>
      <h3>{title}</h3>
      <p>Assigned to: {assignee}</p>
      <p>{description}</p>
      <Link  to="/task">
      <button className="viewBtn">View</button>
      </Link>
      <label>
        <input
          type="checkbox"
          checked={isComplete}
          onChange={handleComplete}
        />
        Mark Completed
      </label>
    </div>
  );
}
