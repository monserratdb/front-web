import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Landing from './pages/landing/Landing';
import About from './pages/about/About';
import Docs from './pages/docs/Docs';
import MainPage from './pages/mainpage/MainPage';
import Task from './pages/taskPage/Task';
import LogInForm from './components/login/LogInForm';
import SignUpForm from './components/signup/SignUpForm'; 
import UserList from './components/UserList/UserList';
import UpdateUserForm from './components/update/UpdateUserForm'; 
import ViewUsers from './components/UserList/ViewUsers'; 
import ManagerDetails from './components/ManagerDetails/ManagerDetailsView'; // Importa el nuevo componente


import './App.css';

const PrivateRoute = ({ element: Component, allowedRoles }) => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  if (!token) {
    console.log("Token no encontrado, redirigiendo a /login");
    return <Navigate to="/login" />;
  }
  if (allowedRoles && !allowedRoles.includes(role)) {
    console.log("Rol no permitido, redirigiendo a /login");
    return <Navigate to="/login" />;
  }
  return <Component />;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LogInForm />} /> 
          <Route path="/signup" element={<SignUpForm />} /> 
          <Route path="/dashboard" element={<PrivateRoute element={MainPage} />} />
          <Route path="/about" element={<About />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/task" element={<Task />} />
          <Route path="/update-user" element={<UpdateUserForm />} /> 
          <Route path="/userlist" element={<PrivateRoute element={UserList} allowedRoles={['admin']} />} /> 
          <Route path="/view-users" element={<PrivateRoute element={ViewUsers} allowedRoles={['admin', 'manager']} />} /> 
          <Route path="/managerdetails" element={<PrivateRoute element={ManagerDetails} allowedRoles={['manager']} />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
