import React, { useState, useEffect } from 'react';
import '../../stylings/darklightmode.css';

const githubUrl = "https://github.com/yourusername";
const linkedinUrl = "https://linkedin.com/in/yourusername";
const mailTo = "mailto:your.email@example.com";



const Header = ({ darkMode, setDarkMode }) => {

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px' }}>
            <p className="logo">SRIHARSHA NALADALA</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <button onClick={toggleDarkMode} style={{ cursor: 'pointer', padding: '5px 10px' }}>
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <svg height="24" width="24" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 012 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                </a>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg height="24" width="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.2 3.4 6.2 7.8V24h-5v-7.2c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.9-2.8 3.8V24h-5V8z" />
                    </svg>
                </a>
                <a href={mailTo} aria-label="Email">
                    <svg height="24" width="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                </a>
            </div>
        </div>
    );
};
export default Header;
