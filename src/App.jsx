import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';

import LandingPage from './pages/LandingPage';

import Home from './pages/Home';
import ItemData from './pages/ItemData';
import Loan from './pages/Loan';
import LoanForm from './pages/LoanForm';
import Profile from './pages/Profile';
import Help from './pages/Help';

function App() {
  const token = localStorage.getItem("token");

  // return token ? <Home /> : <Login />;

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="/landing-page" element={<LandingPage />} />

        <Route path="/" element={<Home />} />
        <Route path="/item-data" element={<ItemData />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/loan/form" element={<LoanForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>
  );
}

export default App;
