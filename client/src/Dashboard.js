import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Users from './Users';
import Bookings from './Booking';
import Queries from './Queries';
import CarBrands from './CarBrands';
import CarTypes from './CarTypes';

const Dashboard = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="content p-4" style={{ width: '100%' }}>
        {/* <Routes>
          <Route path="users" element={<Users />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="queries" element={<Queries />} />
          <Route path="car-brands" element={<CarBrands />} />
          <Route path="car-types" element={<CarTypes />} />
        </Routes> */}
      </div>
    </div>
  );
};

export default Dashboard;
