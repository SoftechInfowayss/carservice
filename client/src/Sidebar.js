import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser, FaCar, FaClipboardList, FaQuestion, FaCarSide } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './sidebar.css';

const Sidebar = () => {
  return (
    <motion.div className="sidebar"
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-center text-light">Admin Panel</h2>
      <ul className="list-unstyled">
        <li>
          <NavLink to="/admin/users" className={({ isActive }) => isActive ? 'active-link' : ''}>
            <FaUser /> Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/booking" className={({ isActive }) => isActive ? 'active-link' : ''}>
            <FaClipboardList /> Bookings
          </NavLink>
        </li>
        <li>
          <NavLink  to="/admin/queries" className={({ isActive }) => isActive ? 'active-link' : ''}>
            <FaQuestion /> Queries
          </NavLink>
        </li>
        <li>
          <NavLink  to="/admin/car-brands" className={({ isActive }) => isActive ? 'active-link' : ''}>
            <FaCarSide /> Car Brands
          </NavLink>
        </li>
        <li>
          <NavLink  to="/admin/car-types" className={({ isActive }) => isActive ? 'active-link' : ''}>
            <FaCar /> Car Types
          </NavLink>
        </li>
      </ul>
    </motion.div>
  );
};

export default Sidebar;
