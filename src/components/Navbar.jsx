import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Pastikan sudah install lucide-react

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white border-b border-black sticky top-0 z-50">
        <div className="flex justify-between items-center px-6 md:px-12 py-4">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
            <div className="flex flex-col items-center">
                <h1 className="text-lg font-bold leading-none">
                <span className="text-[#991B1F]">SIVE</span>
                <span className="text-black">NTA</span>
                </h1>
                <img 
                src="/logo-antara-lampung.png" 
                alt="Logo Antara Lampung" 
                className="h-8 md:h-10 w-auto object-contain mt-1" 
                />
            </div>
            </div>

            {/* Menu Navigasi Desktop */}
            <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-700">
            <Link to="/" className="hover:text-[#991B1F] transition-colors">Beranda</Link>
            <Link to="/item-data" className="hover:text-[#991B1F] transition-colors">Data Barang</Link>
            <Link to="/loan" className="hover:text-[#991B1F] transition-colors">Peminjaman</Link>
            <Link to="/profile" className="hover:text-[#991B1F] transition-colors">Profile</Link>
            </div>

            {/* Hamburger Button (Mobile Only) */}
            <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            </div>
        </div>

        {/* Menu Navigasi Mobile (Dropdown) */}
        <div 
            className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
            <div className="flex flex-col px-6 py-4 gap-4 text-sm font-semibold text-gray-700">
            <Link to="/" onClick={toggleMenu} className="hover:text-[#991B1F]">Beranda</Link>
            <Link to="/item-data" onClick={toggleMenu} className="hover:text-[#991B1F]">Data Barang</Link>
            <Link to="/loan" onClick={toggleMenu} className="hover:text-[#991B1F]">Peminjaman</Link>
            <Link to="/profile" onClick={toggleMenu} className="hover:text-[#991B1F]">Profile</Link>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;
