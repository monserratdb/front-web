import React, { useState } from 'react';
import './Docs.css';
import signInImage from '../../assets/sign_in.png';
import createAccountImage from '../../assets/create_account.png';
import chooseRoleImage from '../../assets/choose_role.png';
import createTaskImage from '../../assets/create_task.png';
import assignWorkerImage from '../../assets/assign_worker.png';
import markDoneImage from '../../assets/mark_done.png';

export default function Docs() {
  const [showCharacteristics, setShowCharacteristics] = useState(false);
  const [showUsage, setShowUsage] = useState(false);

  return (
    <div className="docs-container">
      <h1>PlanOssa Web Planner Guide</h1>
      <p>
        Welcome to the PlanOssa Web Planner documentation! This application will help your company divide work effectively and efficiently. Read on to learn how PlanOssa can transform your workflow.
      </p>

      <h2 onClick={() => setShowCharacteristics(!showCharacteristics)} style={{ cursor: 'pointer' }}>
        Principal Characteristics {showCharacteristics ? '▲' : '▼'}
      </h2>
      {showCharacteristics && (
        <ul>
          <li>
            <strong>Add Tasks:</strong> As a user, add tasks to your workspace.
          </li>
          <li>
            <strong>Assign Tasks:</strong> As a team leader, assign tasks to your employees to ensure a fair distribution of work.
          </li>
          <li>
            <strong>Set Goals:</strong> As a manager, set goals to direct the work your employees complete.
          </li>
          <li>
            <strong>Mark as Completed:</strong> Mark tasks as completed to keep your team updated.
          </li>
        </ul>
      )}

      <h2 onClick={() => setShowUsage(!showUsage)} style={{ cursor: 'pointer' }}>
        How to Use the Application {showUsage ? '▲' : '▼'}
      </h2>
      {showUsage && (
        <ol>
          <li>
            Sign in using your existing credentials, or create an account.
            <img src={signInImage} alt="Sign In" className="docs-image" />
            <img src={createAccountImage} alt="Create Account" className="docs-image" />
          </li>
          <li>
            Choose your role within your organization: Worker, Team Leader, or Manager.
            <img src={chooseRoleImage} alt="Choose Role" className="docs-image" />
          </li>
          <li>
            Create a new task using the form in your dashboard.
            <img src={createTaskImage} alt="Create Task" className="docs-image" />
          </li>
          <li>
            As a worker, you can assign tasks, or a Team leader can assign them.
            <img src={assignWorkerImage} alt="Assign Tasks" className="docs-image" />
          </li>
          <li>
            To mark a task as completed, click the checkbox, and it will move to the column "Done."
            <img src={markDoneImage} alt="Mark as Done" className="docs-image" />
          </li>
        </ol>
      )}
    </div>
  );
}
