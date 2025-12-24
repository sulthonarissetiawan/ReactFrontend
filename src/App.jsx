import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ItemData from './pages/ItemData';
import Laon from './pages/Loan';
import Profile from './pages/Profile';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/item-data" element={<ItemData />} />
                <Route path="/loan" element={<Laon />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    );
}

export default App;
