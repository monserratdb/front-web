import axios from 'axios';

const API_URL = 'https://aaossa-fansclub-backend-ws9l.onrender.com'; 

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response;
};

export const register = async (user) => {
  const response = await axios.post(`${API_URL}/register`, user, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};

export const getUsers = async (token) => {
  const response = await axios.get(`${API_URL}/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const getAllUserNames = async () => {
  try {
    const response = await axios.get(`${API_URL}/users/managerdetails`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user names:', error);
    throw error;
  }
};

export const getUserDetails = async (token) => {
  const response = await axios.get(`${API_URL}/users/details`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const getUserTasks = async (user_id) => {
  const response = await axios.get(`${API_URL}/users/${user_id}/tasks`);
  return response;
}

export const deleteUser = async (id, token) => {
  const response = await axios.delete(`${API_URL}/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateUser = async (id, user, token) => {
  const response = await axios.put(`${API_URL}/users/${id}`, user, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getUserById = async (id, token) => {
  const response = await axios.get(`${API_URL}/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};
