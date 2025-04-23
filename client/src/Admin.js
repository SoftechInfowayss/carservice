import React from 'react';
import Sidebar from './Sidebar';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Queries from './Queries';
import Booking from './Form';
import Users from './Users';
import CarBrands from './CarBrands';
import CarTypes from './CarTypes';
import Bookingcontrol from './Bookingcontrol';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sidebar.css'; // Ensure this CSS is imported
import AdminDashboard from './AdminDashboard';
const Admin = () => {
  return (
    <div className="d-flex">
      {/* Sidebar remains fixed */}
      <Sidebar />
      {/* Content area where routes will be rendered */}
      <div className="content">
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/queries" element={<Queries />} />
          <Route path="/booking" element={<Bookingcontrol />} />
          <Route path="/users" element={<Users />} />
          <Route path="/car-brands" element={<CarBrands />} />
          <Route path="/car-types" element={<CarTypes />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
