import React from 'react';
import { motion } from 'framer-motion';

const ProfilePhoto = () => {
    return (
        <motion.div
            style={{ padding: '20px' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
        >
            <motion.img
                src="https://avatars.githubusercontent.com/u/83389426?v=4"
                alt="Sriharsha Naladala"
                style={{
                    maxWidth: 'min(250px, 80vw)',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    width: '100%',
                    height: 'auto'
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            />
        </motion.div>
    );
};

export default ProfilePhoto;
