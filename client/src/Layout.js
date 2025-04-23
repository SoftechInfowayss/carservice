import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import './Layout.css';

const Layout = () => {
  return (
    <div className="admin-container">
      <Sidebar />
      <div className="content-area">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
