import React from 'react';
import '../../stylings/darklightmode.css';

const githubUrl = process.env.REACT_APP_GITHUB_URL;
const linkedinUrl = process.env.REACT_APP_LINKEDIN_URL;
const mailTo = `mailto:${process.env.REACT_APP_EMAIL}`;

const Header = ({ darkMode, setDarkMode }) => {
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <header className="header" />
    );
};

export default Header;
