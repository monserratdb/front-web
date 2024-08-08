// src/components/ManagerDetails/ManagerDetails.jsx
import React, { useEffect, useState } from 'react';
import { getAllUserNames } from '../../services/api';

const ManagerDetails = () => {
  const [userNames, setUserNames] = useState([]);

  useEffect(() => {
    const fetchUserNames = async () => {
      try {
        const names = await getAllUserNames();
        setUserNames(names);
      } catch (error) {
        console.error('Error fetching user names:', error);
      }
    };

    fetchUserNames();
  }, []);

  return (
    <div>
      <h2>User Names</h2>
      <ul>
        {userNames.map((user, index) => (
          <li key={index}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default ManagerDetails;
