import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const MouseFollower = () => {
    const [isVisible, setIsVisible] = useState(false);
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    const springConfig = { damping: 20, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveMouse = (event) => {
            mouseX.set(event.clientX - 15);
            mouseY.set(event.clientY - 15);
            setIsVisible(true);
        };

        const hideMouse = () => {
            setIsVisible(false);
        };

        window.addEventListener('mousemove', moveMouse);
        window.addEventListener('mouseout', hideMouse);

        return () => {
            window.removeEventListener('mousemove', moveMouse);
            window.removeEventListener('mouseout', hideMouse);
        };
    }, [mouseX, mouseY]);

    return (
        <motion.div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: 30,
                height: 30,
                borderRadius: '50%',
                backgroundColor: 'rgba(0, 128, 128, 0.5)',
                pointerEvents: 'none',
                zIndex: 9999,
                translateX: springX,
                translateY: springY,
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.3s ease',
            }}
        />
    );
};

export default MouseFollower;
