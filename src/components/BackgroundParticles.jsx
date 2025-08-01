import React from 'react';
import Particles from 'react-tsparticles';

const BackgroundParticles = () => {
    const particlesInit = (main) => {
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        // console.log(container);
    };

    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -2 }}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fullScreen: { enable: false },
                    background: {
                        color: {
                            value: "transparent"
                        }
                    },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "repulse"
                            },
                            resize: true
                        },
                        modes: {
                            repulse: {
                                distance: 100,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: "#00ffff"
                        },
                        links: {
                            color: "#00ffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.7,
                            width: 1
                        },
                        collisions: {
                            enable: false
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce"
                            },
                            random: false,
                            speed: 2,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800
                            },
                            value: 100
                        },
                        opacity: {
                            value: 0.8
                        },
                        shape: {
                            type: "circle"
                        },
                        size: {
                            value: { min: 3, max: 7 }
                        }
                    },
                    detectRetina: true
                }}
            />
        </div>
    );
};

export default BackgroundParticles;
