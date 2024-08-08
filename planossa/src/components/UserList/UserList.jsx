import React, { useContext, useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const { token, role } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUsers(token);
        setUsers(response.data);
      } catch (error) {
        console.log("Forbidden access, no token provided");
      }
    };

    fetchData();
  }, [token]);

  const handleBack = () => {
    navigate('/dashboard');
  };

  const handleDelete = async (id) => {
    await deleteUser(id, token);
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.username} 
            {role === 'admin' && (
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            )}
          </li>
        ))}
      </ul>
      <button onClick={handleBack}>Back to Dashboard</button>
    </div>
  );
};

export default UserList;
