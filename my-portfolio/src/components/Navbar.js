import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
    <nav
        className='navbar'
        style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 20px',
            backgroundColor: '#1e3c72',
            color: 'white',
        }}
    >
        {/* Navigation Links */}
        <div style={{ display: 'flex', gap: '20px' }}>
            <NavLink
                to="/"
                style={({ isActive }) => ({
                    color: isActive ? '#00FFD1' : 'white',
                    borderBottom: isActive ? '2px solid #00FFD1' : 'none',
                })}
            >
                Home
            </NavLink>
            <NavLink
                to="/about"
                style={({ isActive }) => ({
                    color: isActive ? '#00FFD1' : 'white',
                    borderBottom: isActive ? '2px solid #00FFD1' : 'none',
                })}
            >
                About
            </NavLink>
            <NavLink
                to="/contact"
                style={({ isActive }) => ({
                    color: isActive ? '#00FFD1' : 'white',
                    borderBottom: isActive ? '2px solid #00FFD1' : 'none',
                })}
            >
                Contact
            </NavLink>
        </div>

        {/* Personal Info */}
        <div style={{ textAlign: 'right' }}>
            <p style={{ margin: 0, fontSize: '1rem' }}>Laksh Bhamare</p>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>Email: lakshbhamre01@gmail.com</p>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>Mobile: +91-8530721312</p>
        </div>
    </nav>
);

export default Navbar;