import React from 'react';

const AnimatedGradientBackground = () => {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: -2,
            pointerEvents: 'none',
            background: 'linear-gradient(-45deg, #001a33, #00264d, #003366, #004080, #00264d, #001a33)',
            backgroundSize: '400% 400%',
            animation: 'gradientAnimation 15s ease infinite'
        }}>
            <style>
                {`
                @keyframes gradientAnimation {
                    0% {background-position: 0% 50%;}
                    50% {background-position: 100% 50%;}
                    100% {background-position: 0% 50%;}
                }
                `}
            </style>
        </div>
    );
};

export default AnimatedGradientBackground;
