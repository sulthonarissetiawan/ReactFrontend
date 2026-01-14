import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import LandingPage from './pages/LandingPage';

import Login from './pages/Login';
import Register from './pages/Register';
import ForgetPassword from './pages/ForgetPassword';

import Home from './pages/Home';
import ItemData from './pages/ItemData';
import Loan from './pages/Loan';
import LoanForm from './pages/LoanForm';
import Profile from './pages/Profile';
import Help from './pages/Help';

import HomeAdmin from './pages/admin/Home';
import ManageAsset from './pages/admin/ManageAsset';
import Borrow from './pages/admin/Borrow';
import Report from './pages/admin/Report';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />

        <Route path="/employee" element={<Home />} />
        <Route path="/item-data" element={<ItemData />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/loan/form/:id" element={<LoanForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/help" element={<Help />} />

        <Route path="/admin" element={<HomeAdmin />} />
        <Route path="/admin/manage-asset" element={<ManageAsset />} />
        <Route path="/admin/borrow" element={<Borrow />} />
        <Route path="/admin/report" element={<Report />} />
      </Routes>
    </Router>
    );
}

export default App;
