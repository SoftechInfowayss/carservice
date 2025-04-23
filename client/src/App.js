import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './Aboutus';
import Navbarr from './Navbar';
import  ContactUs from './Contact';
import Login from './Login';
import ServicesPage from './Service';
import Booking from './Form';
import SignUpPage from './Sign';
import HomePage from './Home';
import ServiceDetailsPage from './ServiceDetailsPage';
import UserDashboard from './User';
import Dashboard from './Dashboard';
import Queries from './Queries';
import Sidebar from './Sidebar';
import Users from './Users';
import CarBrands from './CarBrands';
import CarTypes from './CarTypes';
import Admin from './Admin';
import Layout from './Layout';
import AdminLogin from './AdminLogin';
import Bookingcontrol from './Bookingcontrol';
import AdminLogin1 from './Adminn';
import TarunaBooking from './Taruna';
const App = () => {
  return (
    <div>
   
    <Router>
    <Navbarr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Service" element={<ServicesPage />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Signup" element={<SignUpPage />} />
        <Route path="/User" element={<UserDashboard />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/Service-details" element={<ServiceDetailsPage />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/admin1" element={<AdminLogin1 />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/layout" element={<Layout />} />
             <Route path="/queries" element={<Queries />} />
            <Route path="/dashboard/booking" element={<Booking />} />
            <Route path="/dashboard/users" element={<Users />} />
            <Route path="/dashboard/car-brands" element={<CarBrands />} />
            <Route path="/dashboard/car-types" element={<CarTypes />} /> 
           
      </Routes>
    </Router>
    </div>
  );
};

export default App;
