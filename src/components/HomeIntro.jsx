import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomeIntro = () => {
    const navigate = useNavigate();

    const buttonStyle = {
        margin: '10px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        color: 'white',
        background: 'linear-gradient(45deg, #0077be, #00aaff)',
        border: '2px solid #00aaff',
        borderRadius: '25px',
        boxShadow: '0 4px 15px rgba(0, 170, 255, 0.6)',
        transition: 'background 0.3s ease, box-shadow 0.3s ease',
        outline: 'none',
        userSelect: 'none',
    };

    const buttonHover = {
        background: 'linear-gradient(45deg, #005f8a, #0088cc)',
        boxShadow: '0 6px 20px rgba(0, 136, 204, 0.8)',
    };

    return (
        <motion.div
            style={{ padding: '20px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1>Welcome to My Portfolio</h1>
            <p>Hello! I am Sriharsha Naladala, a passionate developer.</p>
            <motion.button
                style={buttonStyle}
                onClick={() => navigate('/about')}
                whileHover={{ scale: 1.1, ...buttonHover }}
                whileTap={{ scale: 0.95 }}
            >
                About Me
            </motion.button>
            <motion.button
                style={buttonStyle}
                onClick={() => navigate('/projects')}
                whileHover={{ scale: 1.1, ...buttonHover }}
                whileTap={{ scale: 0.95 }}
            >
                My Works
            </motion.button>
            <motion.button
                style={buttonStyle}
                onClick={() => navigate('/contact')}
                whileHover={{ scale: 1.1, ...buttonHover }}
                whileTap={{ scale: 0.95 }}
            >
                Contact
            </motion.button>
        </motion.div>
    );
};

export default HomeIntro;
