import React, { useContext, useEffect, useState } from 'react';
import { getUserDetails, getUsers, deleteUser } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';

const ViewUsers = () => {
  const [users, setUsers] = useState([]);
  const [hasPermission, setPermission] = useState(false);
  const { token, role } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (role === 'admin') {
          const response = await getUsers(token);
          setUsers(response.data);
          setPermission(true);
        } else if (role === 'manager') {
          const response = await getUserDetails(token);
          setUsers(response.data);
          setPermission(true);
        }
      } catch (error) {
        console.log("Forbidden access, no token provided");
      }
    };

    fetchData();
  }, [role, token]);

  const handleBack = () => {
    navigate('/dashboard');
  };

  const handleForbidden = () => {
    navigate('/login');
  };

  const handleDelete = async (id) => {
    await deleteUser(id, token);
    setUsers(users.filter(user => user.id !== id));
  };

  if (hasPermission) {
    return (
      <div>
        <h1>User List</h1>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.username} - {user.email} - {user.createdAt}
              {role === 'admin' && <button onClick={() => handleDelete(user.id)}>Delete</button>}
            </li>
          ))}
        </ul>
        <button onClick={handleBack}>Back to Dashboard</button>
      </div>
    );
  } else {
    return(<div><h2>Forbidden access</h2><button onClick={handleForbidden}>Back to Log in</button></div>);
  }
};

export default ViewUsers;
