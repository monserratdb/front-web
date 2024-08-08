import React, { useState, useEffect } from 'react';
import "./MainPage.css";
import TaskCard from "../../components/task/TaskCard.jsx";
import { Link, useNavigate } from 'react-router-dom';
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket('ws://localhost:8000');

export default function MainPage() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([
    { title: "A great task", assignee: "Anita", description: "Finish Q3 report" },
    { title: "Get last quarter reports", assignee: "Anita", description: "Get previous reports" },
    { title: "Another great task", assignee: "Anita", description: "A task for Anita" },
    { title: "Last task", assignee: "Anita", description: "Contact R&D" }
  ]);
  const [newTask, setNewTask] = useState({ title: "", assignee: "", description: "" });

  useEffect(() => {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };

    client.onmessage = (message) => {
      const newTask = JSON.parse(message.data);
      setTasks(prevTasks => [...prevTasks, newTask]);
    };

    return () => {
      client.close();
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    alert('Logged out successfully!');
    navigate('/');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    client.send(JSON.stringify(newTask));
    setNewTask({ title: "", assignee: "", description: "" });
  };

  return (
    <div>
      <h2>Business Plan for Q3</h2>
      <div className="planner-container">
        <div className="column-xs sidebar">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Task Title"
              value={newTask.title}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="assignee"
              placeholder="Assignee"
              value={newTask.assignee}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              value={newTask.description}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Add Task</button>
          </form>
          <button className="row m-1">Assigned to me</button>
          <button className="row m-1">Hub</button>
          <div className="row m-1"><strong>Active Plans</strong></div>
          <button className="row m-1">- Business Plan for Q3</button>
          <div className="row m-1"><strong>Previous Plans</strong></div>
          <button onClick={handleLogout} className="logoutBtn m-1">Log Out</button>
          <Link to="/update-user">
            <button className="row m-1">Update Credentials</button>
          </Link>
          <Link to="/userlist">
            <button className="row m-1">User List</button>
          </Link>
        </div>
        <div className="planner">
          {tasks.map((task, index) => (
            <TaskCard key={index} title={task.title} assignee={task.assignee} description={task.description} />
          ))}
        </div>
      </div>
    </div>
  );
}
