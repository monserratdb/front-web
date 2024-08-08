import React, { useState } from 'react';
import './TaskForm.css';
import { Link } from 'react-router-dom';

const Modal = ({ message, onClose }) => {
    return (
      <div className="modal" >
        <div className="modalBox">
          <p>{message}</p>
          <button className="modalBtn" onClick={onClose} 
          >Close</button>
        </div>
      </div>
    );
  };
  

const TaskForm = () => {
  const [taskName, setTaskName] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [status, setStatus] = useState('');
  const [description, setDescription] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      taskName,
      assignedTo,
      status,
      description,
    };
    console.log('Task created:', task);
    //make something pop up
    setShowModal(true);

    // Reset form
    setTaskName('');
    setAssignedTo('');
    setStatus('');
    setDescription('');
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="formCard">
      <h2 className="header">New Task</h2>
      <form className="form" onSubmit={handleSubmit} >
        <label>
          <strong>Task name</strong>
          <input className="input"
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </label>
        <label>
          <strong>Assign Worker</strong>
          <input className="input"
            type="text"
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
            />
        </label>
        <label>
          <strong>Status</strong>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            >
            <option value="">Select</option>
            <option value="To-Do">To-Do</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
        </label>
        <label>
          <strong>Description</strong>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
        </label>
        <button className="submitBtn" type="submit" >
          Create Task
        </button>
        <Link to="/dashboard"> <button className="returnBtn" >
          Return to Dashboard
        </button>
        </Link>
      </form>
      {showModal && <Modal message="Success - Task created!" onClose={handleCloseModal} />}
    </div>
  );
};

export default TaskForm;
