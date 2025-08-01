import React from 'react';

const WaterWaveBackground = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', overflow: 'hidden', zIndex: -2 }}>
            <style>
                {`
                    @keyframes wave1 {
                        0% {
                            d: path("M0,160 C480,360 960,-40 1440,160 L1440,320 L0,320 Z");
                        }
                        50% {
                            d: path("M0,220 C480,280 960,40 1440,220 L1440,320 L0,320 Z");
                        }
                        100% {
                            d: path("M0,160 C480,360 960,-40 1440,160 L1440,320 L0,320 Z");
                        }
                    }
                    @keyframes wave2 {
                        0% {
                            d: path("M0,180 C480,280 960,40 1440,180 L1440,320 L0,320 Z");
                        }
                        50% {
                            d: path("M0,160 C480,320 960,0 1440,160 L1440,320 L0,320 Z");
                        }
                        100% {
                            d: path("M0,180 C480,280 960,40 1440,180 L1444,320 L0,320 Z");
                        }
                    }
                    .wave1 {
                        animation: wave1 5s infinite ease-in-out;
                    }
                    .wave2 {
                        animation: wave2 4s infinite ease-in-out;
                        animation-delay: 1s;
                    }
                `}
            </style>
            <svg
                viewBox="0 0 1440 320"
                style={{ width: '100%', height: '100%' }}
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#001a33" />
                        <stop offset="100%" stopColor="#004080" />
                    </linearGradient>
                </defs>
                <path
                    className="wave1"
                    fill="url(#waveGradient)"
                    fillOpacity="0.6"
                    d="M0,160 C480,360 960,-40 1440,160 L1440,320 L0,320 Z"
                />
                <path
                    className="wave2"
                    fill="url(#waveGradient)"
                    fillOpacity="0.4"
                    d="M0,180 C480,280 960,40 1440,180 L1440,320 L0,320 Z"
                />
            </svg>
        </div>
    );
};

export default WaterWaveBackground;
